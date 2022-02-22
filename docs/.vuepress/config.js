module.exports = {
  lang: 'en-US',
  title: 'Lando',
  description: 'Lando Apache Plugin Documentation',
  base: '/apache/',
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
    ['link', {rel: 'icon', href: '/apache/favicon.ico', size: 'any'}],
    ['link', {rel: 'icon', href: '/apache/favicon.svg', type: 'image/svg+xml'}],
    ['link', {rel: 'preconnect', href: '//fonts.googleapis.com'}],
    ['link', {rel: 'preconnect', href: '//fonts.gstatic.com', crossorigin: true}],
    ['link', {rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Lexend:wght@500&display=swap'}],
  ],
  theme: '@lando/vuepress-theme-default-plus',
  themeConfig: {
    landoDocs: true,
    logo: '/images/icon.svg',
    docsDir: 'docs',
    docsBranch: 'main',
    repo: 'lando/apache',
    sidebarHeader: {
      enabled: true,
      title: 'Apache Plugin',
      icon: '/images/apacheicon.png',
    },
    sidebar: [
      {
        text: 'Getting Started',
        link: '/index.md',
      },
      '/config.md',
      '/support.md',
      {text: 'Examples', link: 'https://github.com/lando/apache/tree/main/examples'},
      {text: 'Release Notes', link: 'https://github.com/lando/apache/releases'},
      '/development.md',
    ],
  },
};
