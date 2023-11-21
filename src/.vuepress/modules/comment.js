import { comment } from "vuepress-theme-hope";

export default comment({
  provider: "Waline",
  serverURL: "https://higurashi-comments.ycx-studios.site",
  emoji: [
    'https://registry.npmmirror.com/@waline/emojis/1.2.0/files/alus',
    'https://registry.npmmirror.com/@waline/emojis/1.2.0/files/bilibili',
    'https://registry.npmmirror.com/@waline/emojis/1.2.0/files/bmoji',
    'https://registry.npmmirror.com/@waline/emojis/1.2.0/files/qq',
    'https://registry.npmmirror.com/@waline/emojis/1.2.0/files/tieba',
    'https://registry.npmmirror.com/@waline/emojis/1.2.0/files/tw-emoji',
    'https://registry.npmmirror.com/@waline/emojis/1.2.0/files/weibo',
    'https://registry.npmmirror.com/@waline/emojis/1.2.0/files/soul-emoji',
  ],
  search: false,
  lang: "zh-CN",
  requiredMeta: ['nick', 'mail'],
  copyright: false,
  /* reaction: true, */
  locale: {
    placeholder: '请填写留言内容，支持 Markdown 格式。\n填写邮箱可以在被回复时收到邮件提醒，也可以注册并登录一个账号。\n左下角的四个按钮分别是：格式帮助、表情、上传图片与预览。\n由于新的内置图片上传机制，目前只支持小于 128 KB 的图片。\n若要上传大文件，可以先自行寻找图床或其他服务，再粘贴图片。',
    admin: '管理员'
  }
})