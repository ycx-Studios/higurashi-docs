import { sidebar } from "vuepress-theme-hope";

export default sidebar([
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
    children: "structure",
  },
  "about",
]);