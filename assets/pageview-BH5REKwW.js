function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./app-C3bzvhf_.js";var e={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://higurashi-comments.ycx-studios.site",emoji:["https://higurashi.ycx-studios.site/emojis/alus","https://higurashi.ycx-studios.site/emojis/bilibili","https://higurashi.ycx-studios.site/emojis/bmoji","https://higurashi.ycx-studios.site/emojis/qq","https://higurashi.ycx-studios.site/emojis/tieba","https://higurashi.ycx-studios.site/emojis/tw-emoji","https://higurashi.ycx-studios.site/emojis/weibo","https://higurashi.ycx-studios.site/emojis/soul-emoji"],search:!1,lang:"zh-CN",requiredMeta:["nick","mail"],copyright:!1,locale:{placeholder:`请填写留言内容，支持 Markdown 格式。
填写邮箱可以在被回复时收到邮件提醒，也可以注册并登录一个账号。
左下角的四个按钮分别是：格式帮助、表情、上传图片与预览。
由于新的内置图片上传机制，目前只支持小于 128 KB 的图片。
若要上传大文件，可以先自行寻找图床或其他服务，再粘贴图片。`,admin:"管理员"}};const a=async()=>{try{const{pageviewCount:i}=await t(()=>import("./app-C3bzvhf_.js").then(s=>s.M),__vite__mapDeps([]));return i({serverURL:e.serverURL})}catch{console.error("@waline/client is not installed!")}};export{a as updatePageview};
