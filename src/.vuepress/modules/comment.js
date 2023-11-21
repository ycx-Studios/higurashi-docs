import { comment } from "vuepress-theme-hope";

export default comment({
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
})