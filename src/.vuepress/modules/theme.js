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
  iconAssets: "fontawesome-with-brands",
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
  }
});