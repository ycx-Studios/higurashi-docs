import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "首页", icon: "house", link: "/" },
  {
    text: "汉化补丁",
    icon: "language",
    prefix: "/patch/",
    children: [
      { text: "补丁列表", link: "list", icon: "list" },
      { text: "寒蝉鸣泣之时：鬼隐篇", link: "onikakushi", icon: "code-branch" },
      { text: "寒蝉鸣泣之时：绵流篇", link: "watanagashi", icon: "code-branch" },
      { text: "寒蝉鸣泣之时：罪灭篇", link: "tsumihoroboshi", icon: "code-branch" }
    ]
  },
  {
    text: "使用指南",
    icon: "signs-post",
    prefix: "/guide/",
    children: [{
      text: "07th-mod 补丁",
      icon: "cube",
      prefix: "07th-mod/",
      children: [
          { text: "安装指南", link: "main", icon: "file-arrow-down" },
          { text: "快捷键和设置说明", link: "shortcuts", icon: "gears" },
          { text: "常见问题", link: "faq", icon: "circle-question" },
          { text: "游戏及 Mod 卸载指南", link: "uninstall", icon: "screwdriver-wrench" }
      ]
    }, ]
  },
  { text: "资源下载", icon: "download", link: "https://download.chinalcmod.com/Higurashi" },
  { text: "关于我们", icon: "circle-info", link: "about" },
]);