import { hopeTheme } from "vuepress-theme-hope";
import navbar from './navbar.js';
import sidebar from './sidebar.js';
import blog from './blog.js';
import comment from './comment.js';

export default hopeTheme({
  navbarLayout: {
    start: ["Brand"],
    center: [],
    end: ["Outlook", "Search", "Links", "Repo"],
  },
  navbarIcon: true,
  logo: "https://cdn.iycx.top/higurashi/mologo.png",
  hostname: "https://higurashi.ycx-studios.site",
  favicon: "https://cdn.iycx.top/favicon.ico",
  
  iconAssets: [
    "https://cdn.bootcdn.net/ajax/libs/font-awesome/6.5.2/js/fontawesome.min.js",
    "https://cdn.bootcdn.net/ajax/libs/font-awesome/6.5.2/js/brands.min.js",
    "https://cdn.bootcdn.net/ajax/libs/font-awesome/6.5.2/js/solid.min.js"
  ],
  iconPrefix: "fas fa-",
  
  fullscreen: true,
  
  author: {
    name: "ycx Studios",
    url: "https://www.chinalcmod.com",
    email: "admin@chinalcmod.com"
  },
  
  repo: 'ycx-Studios/higurashi-docs',
  docsDir: 'docs',
  docsBranch: 'master',
  
  navbar,
  sidebar,
  
  blog,
  
  displayFooter: true,
  footer: "© 2013-2024 <a href=\"https://www.chinalcmod.com\">ycx Studios</a>",
  copyright: "本网站发布的内容与 07th Expansion 或 MangaGamer 没有直接关系，热爱本作品请购买正版 | <a href=\"https://github.com/ycx-Studios/higurashi-docs/blob/master/LICENSE\" target=\"_blank\" rel=\"noopener noreferrer\">AGPL-3.0 Licensed</a>",
  plugins: {
    feed: false,
    blog: true,
  
    comment,
  
    copyright: {
      author: "ycx Studios",
      license: "AGPL-3.0",
      global: true,
    },
  
    mdEnhance: {
      tabs: true,
      gfm: true,
      align: true,
      attrs: true,
    },
    
    searchPro: {
      indexContent: true,
      indexOptions: {
        tokenize: (text, fieldName) =>
          fieldName === "id" ? [text] : cut(text, true),
      },
      customFields: [
        {
          name: "category",
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          name: "tag",
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
        {
          name: "author",
          getter: (page) => page.frontmatter.author,
          formatter: "作者：$content",
        },
      ],
      locales: {
        "/": {
          placeholder: "搜索...",
        },
      },
    }
  }
});