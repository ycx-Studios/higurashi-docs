import { hopeTheme } from "vuepress-theme-hope";
import { searchPlugin } from "@vuepress/plugin-search";

export default {
  plugins: [
    'vuepress-plugin-tabs', searchPlugin({
      isSearchable: (page) => page.path !== '/',
      locales: {
        "/": {
          placeholder: "搜索",
        }
      }
    }),
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

  theme: hopeTheme({
    themeColor: {
      blue: "#4885ed",
      purple: "#625684"
    },
    navbarLayout: {
      start: ["Brand"],
      center: [],
      end: ["Outlook", "Search", "Links", "Repo"],
    },
    // searchPlaceholder: "搜索...",
    navbarIcon: true,
    logo: "https://cdn.iycx.top/higurashi/mologo.png",
    hostname: "https://higurashi.ycx-studios.site",

    author: "ycx Studios",
    lastUpdated: '最后更新',
    repo: 'ycx-Studios/higurashi-docs',
    repoLabel: 'Github',
    docsDir: 'docs',
    docsBranch: 'master',
    editLink: true,
    editLinkText: '编辑此页',

    navbar: [
      { text: "首页", icon: "home", link: "/" },
      {
        text: "汉化补丁",
        icon: "language",
        prefix: "/patch",
        children: [
          { text: "补丁列表", link: "/list", icon: "list" },
          { text: "寒蝉鸣泣之时：鬼隐篇", link: "/onikakushi", icon: "language" },
          { text: "寒蝉鸣泣之时：罪灭篇", link: "/tsumihoroboshi", icon: "language" }
        ]
      },
      {
        text: "使用指南",
        icon: "guide",
        prefix: "/guide",
        children: [
          {
            text: "07th-mod 补丁",
            icon: "module",
            prefix: "/07th-mod",
            children: [
              { text: "安装指南", link: "/main", icon: "install" },
              { text: "快捷键和设置说明", link: "/shortcuts", icon: "setting" },
              { text: "常见问题", link: "/faq", icon: "question" },
              { text: "游戏及 Mod 卸载指南", link: "/uninstall", icon: "repair" }
            ]
          },
        ]
      },
      { text: "关于我们", icon: "info", link: "/about" },
    ],
    sidebar: [
      "",
      {
        text: "汉化补丁",
        icon: "language",
        prefix: "/patch/",
        collapsible: true,
        children: [
          { text: "补丁列表", link: "list" },
          { text: "寒蝉鸣泣之时：鬼隐篇", link: "onikakushi" },
          { text: "寒蝉鸣泣之时：罪灭篇", link: "tsumihoroboshi" }
        ],
      },
      {
        text: "使用指南",
        icon: "guide",
        prefix: "/guide/",
        collapsible: true,
        children: [
          {
            text: "07th-mod 补丁",
            icon: "module",
            prefix: "07th-mod/",
            children: [
              "main",
              "shortcuts",
              "faq",
              "uninstall"
            ],
          },
        ],
      },
      "about"
    ],

    blog: {
      avatar: "https://cdn.iycx.top/files/YS.jpg",
      sidebarDisplay: "mobile",
      medias: {
        Steam: "https://store.steampowered.com/bundle/709",
        Baidu: "https://tieba.baidu.com/f?ie=utf-8&kw=%E7%A7%8B%E8%9D%89%E9%B8%A3%E6%B3%A3%E4%B9%8B%E6%97%B6",
        Github: "https://github.com/ycx-Studios/higurashi-docs",
      },
    },

    displayFooter: true,
    footer: "© 2013-2023 <a href=\"https://www.chinalcmod.com\">ycx Studios</a>",
    copyright: "本网站发布的内容与 07th Expansion 或 MangaGamer 没有直接关系，热爱本作品请购买正版 | <a href=\"https://github.com/ycx-Studios/higurashi-docs/blob/master/LICENSE\" target=\"_blank\" rel=\"noopener noreferrer\">AGPL-3.0 Licensed</a>",

    plugins: {
      feed: false,
      pwa: false,
      blog: true,

      comment: {
        provider: "Waline",
        comment: true,
        serverURL: "https://higurashi-comments.ycx-studios.site",
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
        pageSize: 8,
        copyright: false,
        locale: {
          placeholder: '请填写留言内容，支持 Markdown 格式。\n填写邮箱可以在被回复时收到邮件提醒，也可以注册并登录一个账号。\n左下角的四个按钮分别是：格式帮助、表情、上传图片与预览。',
          admin: '管理员'
        }
      },

      copyright: {
        status: "global",
      },

      git: {
        timezone: "Asia/Shanghai",
      },

      mdEnhance: {
        presentation: [
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

    }
  }),
  /* configureWebpack: () => {
    const NODE_ENV = process.env.NODE_ENV
    if (NODE_ENV === 'production') {
      return {
        output: {
          publicPath: 'https://cdn.jsdelivr.net/gh/ycx-studios/higurashi-docs@gh-pages/'
        },
        resolve: {
          alias: {
            'public': path.resolve(__dirname, './public')
          }
        }
      }
    } else {
      return {
        resolve: {
          alias: {
            'public': path.resolve(__dirname, './public')
          }
        }
      }
    }
  }, */
};
