import{a5 as t}from"./app-ZbTjsCYW.js";var o={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://higurashi-comments.ycx-studios.site",emoji:["https://unpkg.com/@waline/emojis@1.2.0/alus","https://unpkg.com/@waline/emojis@1.2.0/bilibili","https://unpkg.com/@waline/emojis@1.2.0/bmoji","https://unpkg.com/@waline/emojis@1.2.0/qq","https://unpkg.com/@waline/emojis@1.2.0/tieba","https://unpkg.com/@waline/emojis@1.2.0/tw-emoji","https://unpkg.com/@waline/emojis@1.2.0/weibo","https://unpkg.com/@waline/emojis@1.2.0/soul-emoji"],requiredMeta:["nick","mail"],copyright:!1,locale:{placeholder:`请填写留言内容，支持 Markdown 格式。
填写邮箱可以在被回复时收到邮件提醒，也可以注册并登录一个账号。
左下角的四个按钮分别是：格式帮助、表情、上传图片与预览。`,admin:"管理员"}};const n=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-ZbTjsCYW.js").then(i=>i.a6),__vite__mapDeps([]));return e({serverURL:o.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{n as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}