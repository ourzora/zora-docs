const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const math = require('remark-math')
const katex = require('rehype-katex')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Zora',
  url: 'https://zora.engineering',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/zoraOrb.svg',
  organizationName: 'ourzora',
  projectName: 'ZoraOS Documentation',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'ZoraOs Documentation Logo',
        src: 'img/zoraOrb.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          position: 'left',
          label: 'Guides',
          to: 'docs/guides/introduction',
        },
        {
          position: 'left',
          label: 'Showcase',
          to: 'docs/showcase',
        },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    prism: {
      theme: darkCodeTheme,
      additionalLanguages: ['solidity', 'graphql'],
    },
    algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
    },
    footer: {
      style: 'dark',
    },
    image: 'img/previewImage.png',
    ...(process.env.GTAG_ID && {
      gtag: {
        trackingID: process.env.GTAG_ID || '',
        anonymizeIP: true,
      },
    }),
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        guides: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [
    [
      'docusaurus2-dotenv',
      {
        safe: false,
        systemvars: true,
        silent: false,
        expand: false,
        defaults: false,
        RPC_ENDPOINT: process.env.RPC_ENDPOINT,
        GTAG_ID: process.env.GTAG_ID,
      },
    ],
  ],
}
