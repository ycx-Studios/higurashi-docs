import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as d,c as i,b as t,e,d as o,a as n}from"./app-XMRppJT6.js";const c={},r=n(`<h2 id="游戏内设置说明" tabindex="-1"><a class="header-anchor" href="#游戏内设置说明"><span>游戏内设置说明</span></a></h2><p>在各版本的汉化补丁中，都能按 F10 键打开 Mod 菜单。</p><p>在原版以及附加语音版汉化补丁中，Mod 菜单没有多标签页选项。<br> 07th-mod 需要在 Mod 菜单的顶部点击 <code>疑难解答</code> 标签页找到相关选项。</p><p>想要访问汉化补丁的发布页面，可以直接在 <code>支持页面</code> 的位置点击 <code>打开汉化补丁页面</code> 按钮打开网站。</p><p>更多关于汉化补丁的选项隐藏在 <code>调试工具</code> 的位置内，你需要点击 <code>显示开发者工具</code> 按钮展开菜单。<br> 在展开的菜单中找到 <code>补丁相关</code> 的位置，在这里可以手动检查更新，选择是否自动检查汉化补丁的更新，选择是否加载汉化文件。<br> 在按钮的右侧，也有文字指示自动检查更新和加载汉化文件的功能是否被启用。<br> 当按下按钮后，设置会立即保存到配置文件中，一般来说重启游戏后会立即生效。<br> 如果禁用了自动检查汉化补丁更新的功能，你也可以在这里手动检查更新。</p><h2 id="配置文件说明" tabindex="-1"><a class="header-anchor" href="#配置文件说明"><span>配置文件说明</span></a></h2><p>在最新版本的汉化补丁中，为了更便于玩家修改设置，我们将设置的保存方式从<strong>存储在内置变量中</strong>更改为<strong>在配置文件中保存</strong>。</p><p>所有关于汉化补丁的配置信息都被保存在 <code>HigurashiEp0X_Data</code> 目录下 (<code>X</code> 是游戏篇章的编号) 的 <code>config.ini</code> 配置文件中，默认情况下不会生成此文件。</p><p>此配置文件使用纯文本格式保存，可以直接用文本编辑器打开编辑。<br> 当玩家需要修改配置时，可以自行创建这个文件并修改自己想要的设置。<br> 如果在游戏内的 Mod 设置菜单中修改了设置，游戏则会自动生成这个文件。<br> 如果觉得修改的设置不正确，或想恢复默认设置，直接删除 <code>config.ini</code> 文件即可。</p><p>这是一个配置文件内容的示例：</p><div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Chinese</span><span class="token punctuation">]</span></span>
<span class="token comment"># 汉化补丁相关</span>
<span class="token key attr-name">Enabled</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Update</span><span class="token punctuation">]</span></span>
<span class="token comment"># 检查更新相关</span>
<span class="token key attr-name">Enabled</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token key attr-name">URL</span> <span class="token punctuation">=</span> <span class="token value attr-value">https://fastly.jsdelivr.net/gh/ycx-Studios/higurashi-assembly@, https://raw.githubusercontent.com/ycx-Studios/higurashi-assembly/</span>
<span class="token key attr-name">OnlyURL</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Key</span><span class="token punctuation">]</span></span>
<span class="token comment"># 键位绑定相关</span>
<span class="token key attr-name">Restrict</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token key attr-name">skip</span> <span class="token punctuation">=</span> <span class="token value attr-value">F1</span>
<span class="token key attr-name">language</span> <span class="token punctuation">=</span> <span class="token value attr-value">Mouse4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="汉化补丁相关" tabindex="-1"><a class="header-anchor" href="#汉化补丁相关"><span>汉化补丁相关</span></a></h3><p>与汉化补丁相关的设置以 <code>[Chinese]</code> 字段分隔。</p><ul><li><code>Enabled = [0/1]</code><br> 此参数控制是否启用汉化补丁。<br> 禁用时会取消载入与关于汉化补丁有关的文件，但一些例如 UI 界面的资源由于引擎限制无法控制。<br> 可选值：0 为禁用，1 为启用。默认值为 1。</li></ul><h3 id="检查更新相关" tabindex="-1"><a class="header-anchor" href="#检查更新相关"><span>检查更新相关</span></a></h3><p>与检查更新相关的设置以 <code>[Update]</code> 字段分隔。</p><ul><li><p><code>Enabled = [0/1]</code><br> 此参数控制是否启用汉化补丁的检查更新，包括本体与脚本的更新。<br> 可选值：0 为禁用，1 为启用。默认值为 1。</p></li><li><p><code>URL = [URL1, URL2, ... , URL×]</code><br> 此参数控制需要额外由程序访问的检查更新地址。<br> 我们的更新是托管在 Github 仓库的，我们有做镜像但是为了以防万一也内置了多个更新镜像地址。<br> 考虑到有玩家由于某些原因无法访问更新网站，你可以寻找可以访问的 CDN 或是自行镜像我们的更新地址。<br> 上方的实例中有提供使用 jsDelivr 镜像 Github 的参考，你可以照着它自行修改，不建议普通玩家更改这个选项。<br> 可选值：字符串类型，由英文逗号分隔。</p></li><li><p><code>OnlyURL = [0/1]</code><br> 此参数控制是否启用仅使用配置文件提供的地址检查更新。<br> 如果启用，那么只会使用上方配置文件提供的地址检查更新。<br> 可选值：0 为禁用，1 为启用。默认值为 0。</p></li></ul><h3 id="键位绑定相关" tabindex="-1"><a class="header-anchor" href="#键位绑定相关"><span>键位绑定相关</span></a></h3><p>与键位绑定相关的设置以 <code>[Key]</code> 字段分隔。</p>`,19),p=t("li",null,[t("p",null,[t("code",null,"Restrict = [0/1]"),t("br"),e(" 此参数控制是否允许绑定已经被游戏指定的按键。"),t("br"),e(" 如果启用，在多个功能上重复绑定同一个按键将会失败。"),t("br"),e(" 可选值：0 为禁用，1 为启用。默认值为 1。")])],-1),u=n(`<p><code>[功能] = [按键]</code><br> 你可以使用此格式为游戏内的功能绑定相应的按键。</p><p>可选值的示例与说明：</p><div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre class="language-ini"><code><span class="token comment"># 此处为给 F1 键绑定 “按住跳过模式” 功能</span>
<span class="token key attr-name">skip</span> <span class="token punctuation">=</span> <span class="token value attr-value">F1</span>

<span class="token comment"># 此处为给鼠标侧键绑定 “切换语言” 功能</span>
<span class="token key attr-name">language</span> <span class="token punctuation">=</span> <span class="token value attr-value">Mouse4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于允许绑定的功能，请查看下面这张表格。<br> 注意：部分功能是 07th-mod 独有的，使用原版以及附加语音版汉化补丁不包含其中的某些功能。</p>`,4),g={href:"https://docs.unity.cn/cn/current/ScriptReference/KeyCode.html",target:"_blank",rel:"noopener noreferrer"},m=t("br",null,null,-1),h=t("code",null,"变量",-1),y=n('<details class="hint-container details"><summary>点击展开允许绑定的功能列表</summary><table><thead><tr><th style="text-align:left;">键值</th><th style="text-align:left;">对应功能</th><th style="text-align:left;">原始按键</th></tr></thead><tbody><tr><td style="text-align:left;">skip</td><td style="text-align:left;">按住跳过模式</td><td style="text-align:left;">Ctrl 键</td></tr><tr><td style="text-align:left;">replay</td><td style="text-align:left;">重新播放语音</td><td style="text-align:left;">R 键</td></tr><tr><td style="text-align:left;">hide</td><td style="text-align:left;">隐藏文本框</td><td style="text-align:left;">空格键</td></tr><tr><td style="text-align:left;">logs</td><td style="text-align:left;">打开文字记录</td><td style="text-align:left;">鼠标滚轮上滑、上箭头键、PgUp 键</td></tr><tr><td style="text-align:left;">play</td><td style="text-align:left;">播放下一句</td><td style="text-align:left;">鼠标左键、回车键、右箭头键、PgDn 键</td></tr><tr><td style="text-align:left;">pause</td><td style="text-align:left;">打开暂停菜单</td><td style="text-align:left;">鼠标右键、ESC 键</td></tr><tr><td style="text-align:left;">quicksave</td><td style="text-align:left;">快速保存</td><td style="text-align:left;">F5 键</td></tr><tr><td style="text-align:left;">quickload</td><td style="text-align:left;">快速载入</td><td style="text-align:left;">F7 键</td></tr><tr><td style="text-align:left;">autoplay</td><td style="text-align:left;">自动播放模式</td><td style="text-align:left;">A 键</td></tr><tr><td style="text-align:left;">autoskip</td><td style="text-align:left;">自动跳过模式</td><td style="text-align:left;">S 键</td></tr><tr><td style="text-align:left;">fullscreen</td><td style="text-align:left;">全屏幕</td><td style="text-align:left;">F 键</td></tr><tr><td style="text-align:left;">language</td><td style="text-align:left;">切换语言</td><td style="text-align:left;">L 键</td></tr><tr><td style="text-align:left;">art</td><td style="text-align:left;">改变艺术风格</td><td style="text-align:left;">P 键</td></tr><tr><td style="text-align:left;">menu</td><td style="text-align:left;">打开 Mod 菜单</td><td style="text-align:left;">F10 键</td></tr></tbody></table></details>',1);function b(v,f){const a=l("ExternalLinkIcon");return d(),i("div",null,[r,t("ul",null,[p,t("li",null,[u,t("p",null,[e("对于按键映射列表，请"),t("a",g,[e("点击这里"),o(a)]),e("参阅 Unity 引擎开发手册的 KeyCode 章节。"),m,e(" 找到页面上的"),h,e("部分即可查看所有支持的键位列表。表格的左侧为键位码，右侧为键位的介绍。")])])]),y])}const _=s(c,[["render",b],["__file","config.html.vue"]]),M=JSON.parse('{"path":"/guide/patch/config.html","title":"游戏内设置和配置文件说明","lang":"zh-CN","frontmatter":{"icon":"gears","title":"游戏内设置和配置文件说明","author":"ycx","category":"使用指南","tag":["汉化补丁","使用说明"],"article":false,"order":2,"description":"游戏内设置说明 在各版本的汉化补丁中，都能按 F10 键打开 Mod 菜单。 在原版以及附加语音版汉化补丁中，Mod 菜单没有多标签页选项。 07th-mod 需要在 Mod 菜单的顶部点击 疑难解答 标签页找到相关选项。 想要访问汉化补丁的发布页面，可以直接在 支持页面 的位置点击 打开汉化补丁页面 按钮打开网站。 更多关于汉化补丁的选项隐藏在 调试...","head":[["meta",{"property":"og:url","content":"https://higurashi.ycx-studios.site/guide/patch/config.html"}],["meta",{"property":"og:site_name","content":"《寒蝉鸣泣之时》系列简体中文汉化补丁官方网站"}],["meta",{"property":"og:title","content":"游戏内设置和配置文件说明"}],["meta",{"property":"og:description","content":"游戏内设置说明 在各版本的汉化补丁中，都能按 F10 键打开 Mod 菜单。 在原版以及附加语音版汉化补丁中，Mod 菜单没有多标签页选项。 07th-mod 需要在 Mod 菜单的顶部点击 疑难解答 标签页找到相关选项。 想要访问汉化补丁的发布页面，可以直接在 支持页面 的位置点击 打开汉化补丁页面 按钮打开网站。 更多关于汉化补丁的选项隐藏在 调试..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-04T16:54:48.000Z"}],["meta",{"property":"article:author","content":"ycx"}],["meta",{"property":"article:tag","content":"汉化补丁"}],["meta",{"property":"article:tag","content":"使用说明"}],["meta",{"property":"article:modified_time","content":"2024-07-04T16:54:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"游戏内设置和配置文件说明\\",\\"description\\":\\"游戏内设置说明 在各版本的汉化补丁中，都能按 F10 键打开 Mod 菜单。 在原版以及附加语音版汉化补丁中，Mod 菜单没有多标签页选项。 07th-mod 需要在 Mod 菜单的顶部点击 疑难解答 标签页找到相关选项。 想要访问汉化补丁的发布页面，可以直接在 支持页面 的位置点击 打开汉化补丁页面 按钮打开网站。 更多关于汉化补丁的选项隐藏在 调试...\\"}"]]},"headers":[{"level":2,"title":"游戏内设置说明","slug":"游戏内设置说明","link":"#游戏内设置说明","children":[]},{"level":2,"title":"配置文件说明","slug":"配置文件说明","link":"#配置文件说明","children":[{"level":3,"title":"汉化补丁相关","slug":"汉化补丁相关","link":"#汉化补丁相关","children":[]},{"level":3,"title":"检查更新相关","slug":"检查更新相关","link":"#检查更新相关","children":[]},{"level":3,"title":"键位绑定相关","slug":"键位绑定相关","link":"#键位绑定相关","children":[]}]}],"git":{"createdTime":1720112088000,"updatedTime":1720112088000,"contributors":[{"name":"ycx","email":"ycx1287984258@163.com","commits":1}]},"readingTime":{"minutes":4.88,"words":1463},"filePathRelative":"guide/patch/config.md","localizedDate":"2024年7月4日","excerpt":"<h2>游戏内设置说明</h2>\\n<p>在各版本的汉化补丁中，都能按 F10 键打开 Mod 菜单。</p>\\n<p>在原版以及附加语音版汉化补丁中，Mod 菜单没有多标签页选项。<br>\\n07th-mod 需要在 Mod 菜单的顶部点击 <code>疑难解答</code> 标签页找到相关选项。</p>\\n<p>想要访问汉化补丁的发布页面，可以直接在 <code>支持页面</code> 的位置点击 <code>打开汉化补丁页面</code> 按钮打开网站。</p>\\n<p>更多关于汉化补丁的选项隐藏在 <code>调试工具</code> 的位置内，你需要点击 <code>显示开发者工具</code> 按钮展开菜单。<br>\\n在展开的菜单中找到 <code>补丁相关</code> 的位置，在这里可以手动检查更新，选择是否自动检查汉化补丁的更新，选择是否加载汉化文件。<br>\\n在按钮的右侧，也有文字指示自动检查更新和加载汉化文件的功能是否被启用。<br>\\n当按下按钮后，设置会立即保存到配置文件中，一般来说重启游戏后会立即生效。<br>\\n如果禁用了自动检查汉化补丁更新的功能，你也可以在这里手动检查更新。</p>","copyright":{"author":"ycx"},"autoDesc":true}');export{_ as comp,M as data};
