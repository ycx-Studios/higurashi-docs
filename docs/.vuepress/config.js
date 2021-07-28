const {
  config
} = require("vuepress-theme-hope");

module.exports = config({
  plugins: [
    'vuepress-plugin-tabs'
  ],
  
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  title: "《寒蝉鸣泣之时》系列简体中文汉化补丁",

  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://cdn.iycx.top/favicon.ico'
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", {
      src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"
    }],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js"
      },
    ],
  ],

  themeConfig: {
    themeColor: {
      blue: "#4885ed",
      purple: "#625684"
    },

    searchPlaceholder: "搜索...",

    logo: "https://cdn.iycx.top/higurashi/mologo.png",
    hostname: "https://higurashi.ycx-studios.site",

    author: "ycx Studios",
    lastUpdated: '最后更新',
    repo: 'ycx-Studios/higurashi-docs',
    repoLabel: 'Github',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '编辑此页',
    smoothScroll: true,
    feed: false,
    pwa: false,

    nav: [{
        text: "首页",
        icon: "home",
        link: "/"
      },
      {
        text: "汉化补丁",
        icon: "language",
        prefix: "/patch",
        items: [
          { text: "补丁列表", link: "/list/", icon: "home" },
          { text: "寒蝉鸣泣之时：鬼隐篇", link: "/onikakushi/", icon: "language" }
        ]
      },
      {
        text: "用户指南",
        icon: "guide",
        prefix: "/guide",
        items: [
          { text: "07th-mod 补丁安装指南", link: "/main/", icon: "page" },
          { text: "快捷键和设置说明", link: "/shortcuts/", icon: "page" },
          { text: "常见问题", link: "/faq/", icon: "page" },
          { text: "游戏及 Mod 卸载指南", link: "/uninstall/", icon: "page" }
        ]
      }
    ],
    sidebar: [
      "",
      {
        title: "汉化补丁",
        icon: "language",
        prefix: "/patch/",
        children: [
          "list",
          ["onikakushi", "寒蝉鸣泣之时：鬼隐篇"]
         ],
      },
      {
        title: "用户指南",
        icon: "guide",
        prefix: "/guide/",
        children: [
          "main",
          "shortcuts",
          "faq",
          "uninstall"
        ],
      }
    ],

    blog: {
      avatar: "https://cdn.iycx.top/files/YS.jpg",
      sidebarDisplay: "mobile",
      links: {
        Steam: "https://keylol.com/forum.php?mod=forumdisplay&fid=257&filter=typeid&typeid=269",
        Baidu: "https://tieba.baidu.com/f?ie=utf-8&kw=%E7%A7%8B%E8%9D%89%E9%B8%A3%E6%B3%A3%E4%B9%8B%E6%97%B6",
        Github: "https://github.com/ycx-Studios/higurashi-docs",
      },
    },

    footer: {
      display: true,
      content: "© 2013-2021 <a href=\"https://www.chinalcmod.com\">ycx Studios</a>",
      copyright: "本网站发布的内容与 07th Expansion 或 MangaGamer 没有直接关系，热爱本作品请购买正版 | AGPL-3.0 Licensed",
    },

    comment: {
      type: "waline",
      serverURL: "https://higurashi-comments.ycx-studios.site",
      visitor: true,
      emoji: [
        'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/alus',
        'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili',
        'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/qq',
        'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tieba',
        'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-emoji',
        'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo',
      ],
      meta: ['nick', 'mail', 'link'],
      requiredMeta: ['nick', 'mail'],
      pageSize: 5,
      copyright: false,
    },

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },
  },
});
