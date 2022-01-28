const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const math = require('remark-math')
const katex = require('rehype-katex')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Zora Docs',
  url: 'https://docs.zora.co',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/zoraOrb.svg',
  organizationName: 'ourzora',
  projectName: 'Zora Docs',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Zora Docs Logo',
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
          to: '/docs/guides/connect-wallet-react',
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
      apiKey: 'ea9711802399936fa4d55c3033c4cfc5',
      indexName: 'zora',
      appId: 'BH4D9OD16A',
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
    metadatas: [
      {
        name: 'title',
        content: 'Zora Docs',
      },
      {
        name: 'description',
        content:
          'Zora makes it easy for developers to get started building with NFTs by providing tools for displaying, minting, and selling NFTs all in one place. ',
      },
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ourzora/zora-docs/blob/main',
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
        safe: true,
        systemvars: true,
        silent: false,
        expand: false,
        defaults: false,
      },
    ],
  ],
}
