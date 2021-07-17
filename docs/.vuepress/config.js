module.exports = {
  base: '/',
  title: 'Higurashi Patch 帮助中心',
  head: [
    ['link', {
      rel: 'icon',
      href: 'https://cdn.iycx.top/favicon.ico'
    }]
  ],
  markdown: {
    lineNumbers: true,
    externalLinks: {
      target: '_blank',
      rel: 'noreferrer noopener'
    }
  },
  evergreen: false,
  themeConfig: {
    logo: 'https://cdn.iycx.top/files/mologo.png',
    nav: [{
        text: '首页',
        link: '/'
      }
    ],
    sidebar: 'auto',
    lastUpdated: '最后更新', // string | boolean
    repo: 'ycx-Studios/higurashi-docs',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'Github',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此页',
    smoothScroll: true
  }
}
