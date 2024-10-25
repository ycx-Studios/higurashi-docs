import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "首页", icon: "house", link: "/" },
  {
    text: "汉化补丁",
    icon: "language",
    prefix: "/patch/",
    children: [
      { text: "补丁列表", link: "list", icon: "list" },
      { text: "【暂停下载】寒蝉鸣泣之时：鬼隐篇", link: "onikakushi", icon: "code-branch" },
      { text: "【暂停下载】寒蝉鸣泣之时：绵流篇", link: "watanagashi", icon: "code-branch" },
      { text: "【暂停下载】寒蝉鸣泣之时：祟杀篇", link: "tatarigoroshi", icon: "code-branch" },
      { text: "【暂停下载】寒蝉鸣泣之时：暇溃篇", link: "himatsubushi", icon: "code-branch" },
      { text: "【暂停下载】寒蝉鸣泣之时：目明篇", link: "meakashi", icon: "code-branch" },
      { text: "【暂停下载】寒蝉鸣泣之时：罪灭篇", link: "tsumihoroboshi", icon: "code-branch" },
      { text: "【暂停下载】寒蝉鸣泣之时：皆杀篇", link: "minagoroshi", icon: "code-branch" }
    ]
  },
  {
    text: "使用指南",
    icon: "signs-post",
    prefix: "/guide/",
    children: [{
      text: "汉化补丁",
      icon: "cube",
      prefix: "patch/",
      children: [
        { text: "安装和卸载指南", link: "main", icon: "file-arrow-down" },
        { text: "游戏内设置和配置文件说明", link: "config", icon: "gears" },
        { text: "常见问题解答", link: "faq", icon: "circle-question" }
      ]
    }, {
      text: "07th-mod 补丁",
      icon: "cube",
      prefix: "07th-mod/",
      children: [
        { text: "补丁介绍", link: "introduction", icon: "circle-info" },
        { text: "安装指南", link: "main", icon: "file-arrow-down" },
        { text: "快捷键和设置说明", link: "shortcuts", icon: "gears" },
        { text: "常见问题解答", link: "faq", icon: "circle-question" },
        { text: "　- Linux 和 Steam Deck", link: "faq-linux-steam-deck" },
        { text: "　- 背景音乐与音效", link: "faq-bgm-se" },
        { text: "游戏和 Mod 卸载指南", link: "uninstall", icon: "screwdriver-wrench" }
      ]
    }]
  },
  { text: "下载中心", icon: "download", link: "download" },
  { text: "关于我们", icon: "circle-info", link: "about" },
]);
