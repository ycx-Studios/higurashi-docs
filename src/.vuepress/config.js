import { hopeTheme } from "vuepress-theme-hope";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default {
  plugins: [
    searchProPlugin({
      indexContent: true,
      autoSuggestions: true,
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
      locales: {
        "/": {
          placeholder: "搜索...",
        },
      },
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
      "script",
      {
        src: "https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.production.min.js"
      },
    ],
    [
      "script",
      {
        src: "https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js",
      },
    ],
    ["script", {
      src: "https://cdn.bootcdn.net/ajax/libs/vue/2.7.15/vue.js"
    }],
    [
      "script",
      {
        src: "https://cdn.bootcdn.net/ajax/libs/babel-standalone/7.22.17/babel.min.js"
      },
    ],
  ],

  theme: hopeTheme({
    themeColor: {
      blue: "#2196F3",
      purple: "#9C27B0"
    },
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
    editLinkText: '编辑此页',

    navbar: [{ text: "首页", icon: "house", link: "/" },
      {
        text: "汉化补丁",
        icon: "language",
        prefix: "/patch",
        children: [
          { text: "补丁列表", link: "/list", icon: "list" },
          { text: "寒蝉鸣泣之时：鬼隐篇", link: "/onikakushi", icon: "code-branch" },
          { text: "寒蝉鸣泣之时：罪灭篇", link: "/tsumihoroboshi", icon: "code-branch" }
        ]
      },
      {
        text: "使用指南",
        icon: "signs-post",
        prefix: "/guide",
        children: [{
          text: "07th-mod 补丁",
          icon: "cube",
          prefix: "/07th-mod",
          children: [
              { text: "安装指南", link: "/main", icon: "file-arrow-down" },
              { text: "快捷键和设置说明", link: "/shortcuts", icon: "gears" },
              { text: "常见问题", link: "/faq", icon: "circle-question" },
              { text: "游戏及 Mod 卸载指南", link: "/uninstall", icon: "screwdriver-wrench" }
          ]
        }, ]
      },
      { text: "关于我们", icon: "circle-info", link: "/about" },
    ],
    sidebar: [
      "",
      {
        text: "汉化补丁",
        icon: "language",
        prefix: "/patch/",
        collapsible: true,
        children: [
          { text: "补丁列表", link: "list", icon: "list" },
          { text: "寒蝉鸣泣之时：鬼隐篇", link: "onikakushi", icon: "code-branch" },
          { text: "寒蝉鸣泣之时：罪灭篇", link: "tsumihoroboshi", icon: "code-branch" }
        ],
      },
      {
        text: "使用指南",
        icon: "signs-post",
        prefix: "/guide/",
        collapsible: true,
        children: [{
          text: "07th-mod 补丁",
          icon: "cube",
          prefix: "07th-mod/",
          children: [
            "main",
            "shortcuts",
            "faq",
            "uninstall"
          ],
        }, ],
      },
      "about",
    ],

    blog: {
      name: "ycx Studios",
      avatar: "https://cdn.iycx.top/files/YS.jpg",
      sidebarDisplay: "mobile",
      /* intro: "https://www.chinalcmod.com", */
      medias: {
        "Steam": "https://store.steampowered.com/bundle/709",
        "Tieba": ["https://tieba.baidu.com/f?ie=utf-8&kw=%E7%A7%8B%E8%9D%89%E9%B8%A3%E6%B3%A3%E4%B9%8B%E6%97%B6",
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1373CA"/><path fill="#FFF" d="M471 714c-12-6-21-12-27-17-27-22-40-47-45-81V337c0-5-3-8-8-8h-68c-5 0-8 3-8 8v279a120 120 0 0 1-72 98c-12 5-23 5-30 17v66c7 22 33 13 50 7 30-11 75-38 94-66 19 28 63 55 94 66 16 6 42 15 50-7v-66c-7-12-18-12-30-17zm322-380c10 0 19-8 19-19v-49c0-10-9-19-19-19H657v-16c0-11-9-19-19-19h-49c-11 0-19 8-19 19v230h-23c-10 0-19 8-19 18v314c0 10 9 19 19 19h245c11 0 19-9 19-19V479c0-10-8-18-19-18H657V334h136zm-79 213c6 0 10 5 10 10v158c0 5-4 10-10 10h-89c-5 0-9-5-9-10V557c0-5 4-10 9-10h89zM483 212H231c-11 0-19 8-19 19v401c0 11 8 19 19 19h41c10 0 19-8 19-19V306c0-5 5-8 10-8h112c5 0 9 3 10 8v326c0 11 8 19 19 19h41c11 0 19-8 19-19V231c0-11-8-19-19-19z"/></svg>'
        ],
        "Github": "https://github.com/ycx-Studios",
        "KOOK": ["https://kook.top/5zlEW2",
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#87EB00"/><path d="M275 213h532l42 78-100 473H595l-23 108h-60l-59-108H217l-42-77 100-474m101 60-83 397h126l23-106 58 106h115c2-15 8-29 8-44l-74-139 130-148c3-5 9-9 9-15l11-51H573l-92 105 22-105H376z"/><path fill="#FFF" d="M376 273h127l-22 105 92-105h126l-11 51c0 6-6 10-9 15L549 487l74 139c0 14-6 29-8 44H500l-58-106-22 106H293l83-397z"/></svg>'
        ],
      },
      roundAvatar: true,
    },
    
    displayFooter: true,
    footer: "© 2013-2023 <a href=\"https://www.chinalcmod.com\">ycx Studios</a>",
    copyright: "本网站发布的内容与 07th Expansion 或 MangaGamer 没有直接关系，热爱本作品请购买正版 | <a href=\"https://github.com/ycx-Studios/higurashi-docs/blob/master/LICENSE\" target=\"_blank\" rel=\"noopener noreferrer\">AGPL-3.0 Licensed</a>",
    plugins: {
      feed: false,
      blog: true,

      comment: {
        provider: "Waline",
        serverURL: "https://higurashi-comments.ycx-studios.site",
        emoji: [
          'https://unpkg.com/@waline/emojis@1.2.0/alus',
          'https://unpkg.com/@waline/emojis@1.2.0/bilibili',
          'https://unpkg.com/@waline/emojis@1.2.0/bmoji',
          'https://unpkg.com/@waline/emojis@1.2.0/qq',
          'https://unpkg.com/@waline/emojis@1.2.0/tieba',
          'https://unpkg.com/@waline/emojis@1.2.0/tw-emoji',
          'https://unpkg.com/@waline/emojis@1.2.0/weibo',
          'https://unpkg.com/@waline/emojis@1.2.0/soul-emoji',
        ],
        requiredMeta: ['nick', 'mail'],
        copyright: false,
        /* reaction: true, */
        locale: {
          placeholder: '请填写留言内容，支持 Markdown 格式。\n填写邮箱可以在被回复时收到邮件提醒，也可以注册并登录一个账号。\n左下角的四个按钮分别是：格式帮助、表情、上传图片与预览。',
          admin: '管理员'
        }
      },

      copyright: {
        author: "ycx Studios",
        license: "AGPL-3.0",
        global: true,
      },

      mdEnhance: {
        tabs: true,
        gfm: true,
        revealJs: [
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