import { searchProPlugin } from "vuepress-plugin-search-pro";
import { cut } from "nodejs-jieba";
import theme from './modules/theme.js';

export default {
  lang: 'zh-CN',
  title: "《寒蝉鸣泣之时》系列简体中文汉化补丁官方网站",

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

  theme,
  
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