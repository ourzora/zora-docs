export const ShaderFragment = `#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform float u_seed;

vec2 random2(vec2 st){
    st = vec2( dot(st,vec2(127.1,311.7)),
              dot(st,vec2(269.5,183.3)) );
    return -1.0 + 2.0*fract(sin(st)*43758.5453123);
}




// Gradient Noise by Inigo Quilez - iq/2013
// https://www.shadertoy.com/view/XdXGW8
float noise(in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    vec2 u = f*f*(3.0-2.0*f);

    return mix( mix( dot( random2(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),
                     dot( random2(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),
                mix( dot( random2(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),
                     dot( random2(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);
}

#define OCTAVES 6
float fbm (in vec2 st) {
    // Initial values
    float value = 0.0;
    float amplitude = .5;
    float frequency = 0.;
    //
    // Loop of octaves
    for (int i = 0; i < OCTAVES; i++) {
        value += amplitude * noise(st);
        st *= 2.;
        amplitude *= .5;
    }
    return value;
}

vec3 map2(vec3 cmap1, vec3 cmap2, vec3 w) {
	vec3 w1 = w;
	vec3 w2 = vec3(1.) - w;
	vec3 newColor = w1 * cmap1 + w2 * cmap2;
	return newColor;
}

vec3 stop1 = vec3(220. / 255., 200. / 255., 208. / 255.);
vec3 stop2 = vec3(120. / 255., 200. / 255., 207. / 255.);
vec3 stop3 = vec3(77. / 255., 149. / 255., 158. / 255.);
vec3 stop4 = vec3(48. / 255., 94. / 255., 185. / 255.);
vec3 stop5 = vec3(49. / 255., 31. / 255., 18. / 255.);
vec3 stop6 = vec3(104. / 255., 66. / 255., 50. / 255.);
vec3 stop7 = vec3(45. / 255., 28. / 255., 19. / 255.);
// yeah this will probably break if you don't use greyscale
vec3 mapColor(vec3 c) {
	if (c.x > 0.9) {
		return map2(stop1, stop1, (c - 0.9) / (1. - 0.9));
	}
	else if (c.x > 0.75) {
		return map2(stop1, stop2, (c - 0.75) / (0.9 - 0.75));
	}
	else if (c.x > 0.6) {
		return map2(stop2, stop3, (c - 0.6) / (0.75 - 0.6));
	}
	else if (c.x > 0.5) {
		return map2(stop3, stop4, (c - 0.5) / (0.6 - 0.5));
	}
	else if (c.x > 0.25) {
		return map2(stop4, stop5, (c - 0.25) / (0.5 - 0.25));
	}
	else if (c.x > 0.1) {
		return map2(stop5, stop6, (c - 0.1) / (0.25 - 0.1));
	}
	else if (c.x > 0.05) {
		return map2(stop6, stop7, (c - 0.05) / (0.1 - 0.05));
	}
	return map2(stop7, stop7, c);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;
    vec3 color = vec3(0.0);
    float seed = 111. * random2(vec2(u_seed)).y;

    float t = 1.0;
    // Uncomment to animate
    t = abs(1.0-sin(u_time*.1))*5.;
    t += abs(1.0-sin(u_time*.02 + 3.1))*7.9;
		t *= 0.7;
    // Comment and uncomment the following lines:
    vec2 unmappedSt = vec2(random2(st) + u_time);
    st += noise(st*1.5 + seed)*t - u_time * 0.05; // Animate the coordinate space
    color = vec3(1.) * smoothstep(.01,.15,fbm(st)); // Big black drops
    // color += pow(smoothstep(.05,.2,fbm(st*.5)), 1.); // Black splatter
    color -= smoothstep(.13,.15,fbm(st * .5)); // Holes on splatter
    // color -= smoothstep(.01,.2,fbm(st*2.)); // Holes on splatter
		vec3 mappedColor = mapColor(color);
		mappedColor += vec3(random2(unmappedSt).x) * 0.1;
    gl_FragColor = vec4(mappedColor,1.0);
}`
