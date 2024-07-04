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
      { text: "寒蝉鸣泣之时：绵流篇", link: "watanagashi", icon: "code-branch" },
      { text: "寒蝉鸣泣之时：祟杀篇", link: "tatarigoroshi", icon: "code-branch" },
      { text: "寒蝉鸣泣之时：暇溃篇", link: "himatsubushi", icon: "code-branch" },
      { text: "寒蝉鸣泣之时：目明篇", link: "meakashi", icon: "code-branch" },
      { text: "寒蝉鸣泣之时：罪灭篇", link: "tsumihoroboshi", icon: "code-branch" }
    ],
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
        { text: "安装指南", link: "main", icon: "file-arrow-down" },
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
        { text: "游戏及 Mod 卸载指南", link: "uninstall", icon: "screwdriver-wrench" }
      ]
    }]
  },
  {
    text: "下载中心",
    icon: "download",
    children: [
      { text: "天翼云盘 (访问码: xx1o)", icon: "file-arrow-down", link: "https://cloud.189.cn/web/share?code=euaYZzjEbQji" },
      { text: "资源下载站", icon: "file-arrow-down", link: "https://download.chinalcmod.com/Higurashi" }
    ]
  },
  "about",
]);
