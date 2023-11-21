import { blog } from "vuepress-theme-hope";

const tiebaMedia = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1373CA"/><path fill="#FFF" d="M471 714c-12-6-21-12-27-17-27-22-40-47-45-81V337c0-5-3-8-8-8h-68c-5 0-8 3-8 8v279a120 120 0 0 1-72 98c-12 5-23 5-30 17v66c7 22 33 13 50 7 30-11 75-38 94-66 19 28 63 55 94 66 16 6 42 15 50-7v-66c-7-12-18-12-30-17zm322-380c10 0 19-8 19-19v-49c0-10-9-19-19-19H657v-16c0-11-9-19-19-19h-49c-11 0-19 8-19 19v230h-23c-10 0-19 8-19 18v314c0 10 9 19 19 19h245c11 0 19-9 19-19V479c0-10-8-18-19-18H657V334h136zm-79 213c6 0 10 5 10 10v158c0 5-4 10-10 10h-89c-5 0-9-5-9-10V557c0-5 4-10 9-10h89zM483 212H231c-11 0-19 8-19 19v401c0 11 8 19 19 19h41c10 0 19-8 19-19V306c0-5 5-8 10-8h112c5 0 9 3 10 8v326c0 11 8 19 19 19h41c11 0 19-8 19-19V231c0-11-8-19-19-19z"/></svg>';
const kookMedia = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#87EB00"/><path d="M275 213h532l42 78-100 473H595l-23 108h-60l-59-108H217l-42-77 100-474m101 60-83 397h126l23-106 58 106h115c2-15 8-29 8-44l-74-139 130-148c3-5 9-9 9-15l11-51H573l-92 105 22-105H376z"/><path fill="#FFF" d="M376 273h127l-22 105 92-105h126l-11 51c0 6-6 10-9 15L549 487l74 139c0 14-6 29-8 44H500l-58-106-22 106H293l83-397z"/></svg>';

export default blog({
  name: "ycx Studios",
  avatar: "https://cdn.iycx.top/files/YS.jpg",
  sidebarDisplay: "mobile",
  /* intro: "https://www.chinalcmod.com", */
  medias: {
    "Steam": "https://store.steampowered.com/bundle/709",
    "Tieba": [ "https://tieba.baidu.com/f?ie=utf-8&kw=%E7%A7%8B%E8%9D%89%E9%B8%A3%E6%B3%A3%E4%B9%8B%E6%97%B6", tiebaMedia ],
    "Github": "https://github.com/ycx-Studios",
    "KOOK": [ "https://kook.top/5zlEW2", kookMedia ],
  },
  roundAvatar: true,
});