import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/aedex-simpleUI/',
  title: "aedex-simpleUI",
  description: "A blazing-fast, zero-verbosity CSS-in-JS styling engine.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API', link: '/api/core' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
        ]
      },
      {
        text: 'API Reference',
        items: [
          { text: 'Core API', link: '/api/core' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aedriansagap/aedex-simpleUI' }
    ]
  }
})
