import React from 'react'
import './styles.css'
import { ethers } from 'ethers'
import { ShaderFragment } from './ShaderFragment'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'

export const ShaderComponent = () => {
  if (ExecutionEnvironment.canUseDOM) {
    let GlslCanvas = require('glslCanvas').default
    const canvasRef = React.useRef()
    React.useEffect(() => {
      const canvas = canvasRef
      var sandbox = new GlslCanvas(canvas.current)
      const rpcProvider = new ethers.providers.JsonRpcProvider(
        process.env.RPC_ENDPOINT
      )

      rpcProvider.getBlockNumber().then((num) => {
        sandbox.load(ShaderFragment)
        sandbox.setUniform('u_seed', Math.pow(num, 0.5))
      })

      canvas.current.style.width = '100%'
    }, [])
    return <canvas className="shader-canvas" ref={canvasRef} />
  }

  return <canvas className="shader-canvas" />
}
