import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as u,c as p,b as e,e as t,d as i,w as l,a as h}from"./app-DFcMJjI2.js";const m={},_={class:"hint-container tip"},g=e("p",{class:"hint-container-title"},"本文译自 07th-mod 官网",-1),y={href:"https://07th-mod.com/wiki/Higurashi/Uninstall/",target:"_blank",rel:"noopener noreferrer"},f=h('<h1 id="游戏及-mod-卸载指南" tabindex="-1"><a class="header-anchor" href="#游戏及-mod-卸载指南"><span>游戏及 Mod 卸载指南</span></a></h1><p>如果你想完全卸载《寒蝉鸣泣之时》游戏 (想重装，或是已经通关了)，请遵循以下指南。注意，<strong>从 Steam 卸载游戏不会删除 Mod 文件</strong>。所以要遵循以下指南从电脑中完全删除 Mod 文件。</p><p>我们现在不会提供任何单独卸载 Mod 的方法，<strong>下面的步骤会把 Mod 和游戏一起卸载掉</strong>。</p><h2 id="卸载游戏和-mod-文件" tabindex="-1"><a class="header-anchor" href="#卸载游戏和-mod-文件"><span>卸载游戏和 Mod 文件</span></a></h2><ol><li><p>按照以下步骤，找到游戏安装目录，<strong>先找到安装的位置，等到后面的步骤再操作</strong>。</p><ul><li>Steam 用户 <ul><li>打开 Steam</li><li>右击游戏，然后点击<code>管理</code></li><li>点击<code>浏览本地文件</code></li></ul></li><li>GOG 和 MangaGamer 用户 <ul><li>请找到安装游戏时选择的目录，或者通过快捷方式找到它</li></ul></li></ul></li><li><p>用 Steam/GOG/MangaGamer 启动器正常地卸载游戏</p></li><li><p>手动删掉刚才在第一步找到的游戏文件夹。这样所有 Mod 文件都会被删除</p></li></ol><h2 id="删除存档" tabindex="-1"><a class="header-anchor" href="#删除存档"><span>删除存档</span></a></h2>',6),M=e("li",null,[e("p",null,[e("strong",null,"禁用 Steam 云同步/GOG 云存档"),t("，否则你的存档会神奇地恢复。")])],-1),v=e("li",null,[e("p",null,[t("删掉整个文件夹 (如果只是重装的话，请保留 "),e("code",null,"global.dat"),t(" 文件)")])],-1),P=e("h2",{id:"清除-steam-自定义背景-徽标-封面图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#清除-steam-自定义背景-徽标-封面图"},[e("span",null,"清除 Steam 自定义背景/徽标/封面图")])],-1),S=e("p",null,"有两种方式可以删除 Steam 自定义背景/徽标/封面图",-1),x=e("ol",null,[e("li",null,[e("p",null,"打开 Steam")]),e("li",null,[e("p",null,"在左侧列表点击想要还原封面图的游戏")]),e("li",null,[e("p",null,"右键点击右侧窗口中要重置的内容 (例如在最上面的封面图)")]),e("li",null,[e("p",null,"在右键菜单中，点击 “清除自定义背景” 和 “清除自定义徽标”")])],-1),b=e("ol",null,[e("li",null,[e("p",null,[t("进入 "),e("code",null,"..\\Steam\\userdata\\[用户ID]\\config\\grid"),t(" 文件夹。")]),e("ul",null,[e("li",null,[t("每个在此电脑登陆过 Steam 的用户都会有一个 "),e("code",null,"用户 ID"),t(" 的子文件夹 ("),e("code",null,"用户 ID"),t(" 是一串数字)")]),e("li",null,[t("反复进入每个 "),e("code",null,"用户 ID"),t(" 子文件夹直到找到你自己的文件夹")])])]),e("li",null,[e("p",null,"删除新样式的图片与和名称相关联的 .json 文件。"),e("ul",null,[e("li",null,"不推荐删除整个文件夹，这样会清除你以前添加的所有自定义封面图")])])],-1),k=e("h2",{id:"清理-unity-playerprefs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#清理-unity-playerprefs"},[e("span",null,"清理 Unity PlayerPrefs")])],-1),w=e("p",null,"游戏会将一些玩家自定义设置，例如屏幕分辨率和全屏/窗口化的设置存储起来。",-1),A=e("p",null,"如果遇到一些分辨率或是全屏问题，你可能需要修改或删除这些设置来修复某些问题。",-1),E=e("p",null,[e("strong",null,"请选择适合你操作系统的指引来找到 PlayerPrefs：")],-1),D=e("p",null,[t("Windows 会将这些 PlayerPrefs 存储到注册表的 "),e("code",null,"Computer\\HKEY_CURRENT_USER\\Software\\Mangagamer\\Higurashi When They Cry - Ch.1 Onikakushi"),t(" (这里用《第一章：鬼隐篇》作为示例)。请按照以下步骤清空所有关于《寒蝉鸣泣之时》游戏的注册表设置：")],-1),G={href:"https://07th-mod.com/wiki/files/delete_higurashi_registry.reg",target:"_blank",rel:"noopener noreferrer"},L=e("li",null,[e("p",null,[t("双击运行 "),e("code",null,"delete_higurashi_registry.reg")])],-1),T=e("li",null,[e("p",null,"在警告框中点击 “运行”")],-1),C=e("p",null,[t("如果你担心 .reg 文件有问题，就在文本编辑器中打开并检查一遍。这个文件只是列出了各个章节游戏的注册表文件夹，并用前缀 "),e("code",null,"-"),t(" 号来标记删除该条目。你也可以使用注册表编辑器 "),e("code",null,"regedit"),t(" 进行手动删除。")],-1),O=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"注意"),e("p",null,[t("《寒蝉鸣泣之时》可能会使用 "),e("code",null,"Manga**g**amer"),t(" (小写的 g) 而不是 "),e("code",null,"MangaGamer"),t(" (大写的 g) 作为文件夹。如果你找不到 PlayerPrefs 的话，请找找这两个文件夹是否都存在。")])],-1),I=e("p",null,[t("Linux 的 PlayerPrefs 存储在 "),e("code",null,"~/.config/unity3d/MangaGamer/[GAMENAME]/prefs"),t(" 中。")],-1),N=e("p",null,[t("例如，《第一章：鬼隐篇》的设置文件位置在 "),e("code",null,"~/.config/unity3d/MangaGamer/Higurashi When They Cry - Ch.1 Onikakushi/prefs"),t("。")],-1),B=e("p",null,"删除这个文件或者整个文件夹就可以清除设置。",-1),W=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"注意"),e("p",null,"以下内容尚未得到验证，因为 07th-mod 没有 MacOS 系统可供测试。如果你有的话，可以向他们提供反馈。")],-1),R=e("p",null,[t("MacOS 的 PlayerPrefs 存储在 "),e("code",null,"~/Library/Preferences"),t(" 目录的 "),e("code",null,".plist"),t(" 文件里。")],-1),U=e("p",null,[t("这个文件对于早期发售的游戏叫做 "),e("code",null,"unity.Mangagamer.[游戏名称].plist"),t("，较晚发布的游戏叫做 "),e("code",null,"com.Mangagamer.[游戏名称].plist"),t("。")],-1),H=e("p",null,"删除这个文件就可以清除设置。",-1),V=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"Steam 云同步"),e("p",null,"不是很确定是否准确，在使用 Proton 的时候，PlayerPrefs 文件可能不会进行云同步。如果按照下面的方式操作没有效果的话，可以试试清理或关闭 Steam 云同步。")],-1),z=e("p",null,[t("使用 Proton 的时候，PlayerPrefs 存储在 "),e("code",null,"user.reg"),t(" 文件中。")],-1),j=e("code",null,".steam/steam/steamapps/compatdata/[游戏 ID]/pfx/user.reg",-1),Z=e("code",null,"游戏 ID",-1),q=e("code",null,"310360",-1),J={href:"https://store.steampowered.com/app/310360",target:"_blank",rel:"noopener noreferrer"},K=e("p",null,"你也可以删除 Proton 的 Prefix 文件来清理 PlayerPrefs，但请注意这么做也会把游戏的存档清空。",-1),Y=e("p",null,"请注意，通过 Steam 卸载游戏会删除 Prefix 文件。",-1);function F(Q,X){const a=s("ExternalLinkIcon"),d=s("RouteLink"),r=s("Tabs");return u(),p("div",null,[e("div",_,[g,e("p",null,[t("如需阅读原文，请点击"),e("a",y,[t("这里"),i(a)]),t("。")])]),f,e("ol",null,[M,e("li",null,[e("p",null,[t("进入 "),i(d,{to:"/guide/07th-mod/faq.html#%E5%AD%98%E6%A1%A3%E6%96%87%E4%BB%B6%E4%BD%8D%E7%BD%AE"},{default:l(()=>[t("常见问题页面的 “存档位置”")]),_:1}),t(" 中提到的文件夹。")])]),v]),P,S,i(r,{id:"96",data:[{id:"方法一：从 Steam 中卸载"},{id:"方法二：删除文件 (进阶)"}]},{title0:l(({value:n,isActive:o})=>[t("方法一：从 Steam 中卸载")]),title1:l(({value:n,isActive:o})=>[t("方法二：删除文件 (进阶)")]),tab0:l(({value:n,isActive:o})=>[x]),tab1:l(({value:n,isActive:o})=>[b]),_:1}),k,w,A,E,i(r,{id:"167",data:[{id:"Windows"},{id:"Linux"},{id:"MacOS"},{id:"Proton / Wine"}]},{title0:l(({value:n,isActive:o})=>[t("Windows")]),title1:l(({value:n,isActive:o})=>[t("Linux")]),title2:l(({value:n,isActive:o})=>[t("MacOS")]),title3:l(({value:n,isActive:o})=>[t("Proton / Wine")]),tab0:l(({value:n,isActive:o})=>[D,e("ol",null,[e("li",null,[e("p",null,[t("下载这个文件 "),e("a",G,[t("delete_higurashi_registry.reg"),i(a)])])]),L,T]),C]),tab1:l(({value:n,isActive:o})=>[O,I,N,B]),tab2:l(({value:n,isActive:o})=>[W,R,U,H]),tab3:l(({value:n,isActive:o})=>[V,z,e("p",null,[t("这个文件位于 "),j,t("。"),Z,t(" 可以通过访问 Steam 商店页面，然后查看链接最后的几位数字得到。例如《第一章：鬼隐篇》的 ID 就是 "),q,t(" ("),e("a",J,[t("https://store.steampowered.com/app/310360"),i(a)]),t(")。")]),K,Y]),_:1})])}const te=c(m,[["render",F],["__file","uninstall.html.vue"]]),le=JSON.parse('{"path":"/guide/07th-mod/uninstall.html","title":"游戏及 Mod 卸载指南","lang":"zh-CN","frontmatter":{"icon":"screwdriver-wrench","title":"游戏及 Mod 卸载指南","author":"Lancher, ycx","category":"使用指南","tag":["07th-mod","安装指南"],"article":false,"order":7,"description":"本文译自 07th-mod 官网 如需阅读原文，请点击这里。 游戏及 Mod 卸载指南 如果你想完全卸载《寒蝉鸣泣之时》游戏 (想重装，或是已经通关了)，请遵循以下指南。注意，从 Steam 卸载游戏不会删除 Mod 文件。所以要遵循以下指南从电脑中完全删除 Mod 文件。 我们现在不会提供任何单独卸载 Mod 的方法，下面的步骤会把 Mod 和游戏一...","head":[["meta",{"property":"og:url","content":"https://higurashi.ycx-studios.site/guide/07th-mod/uninstall.html"}],["meta",{"property":"og:site_name","content":"《寒蝉鸣泣之时》系列简体中文汉化补丁官方网站"}],["meta",{"property":"og:title","content":"游戏及 Mod 卸载指南"}],["meta",{"property":"og:description","content":"本文译自 07th-mod 官网 如需阅读原文，请点击这里。 游戏及 Mod 卸载指南 如果你想完全卸载《寒蝉鸣泣之时》游戏 (想重装，或是已经通关了)，请遵循以下指南。注意，从 Steam 卸载游戏不会删除 Mod 文件。所以要遵循以下指南从电脑中完全删除 Mod 文件。 我们现在不会提供任何单独卸载 Mod 的方法，下面的步骤会把 Mod 和游戏一..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-26T10:00:25.000Z"}],["meta",{"property":"article:author","content":"Lancher, ycx"}],["meta",{"property":"article:tag","content":"07th-mod"}],["meta",{"property":"article:tag","content":"安装指南"}],["meta",{"property":"article:modified_time","content":"2024-04-26T10:00:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"游戏及 Mod 卸载指南\\",\\"description\\":\\"本文译自 07th-mod 官网 如需阅读原文，请点击这里。 游戏及 Mod 卸载指南 如果你想完全卸载《寒蝉鸣泣之时》游戏 (想重装，或是已经通关了)，请遵循以下指南。注意，从 Steam 卸载游戏不会删除 Mod 文件。所以要遵循以下指南从电脑中完全删除 Mod 文件。 我们现在不会提供任何单独卸载 Mod 的方法，下面的步骤会把 Mod 和游戏一...\\"}"]]},"headers":[{"level":2,"title":"卸载游戏和 Mod 文件","slug":"卸载游戏和-mod-文件","link":"#卸载游戏和-mod-文件","children":[]},{"level":2,"title":"删除存档","slug":"删除存档","link":"#删除存档","children":[]},{"level":2,"title":"清除 Steam 自定义背景/徽标/封面图","slug":"清除-steam-自定义背景-徽标-封面图","link":"#清除-steam-自定义背景-徽标-封面图","children":[]},{"level":2,"title":"清理 Unity PlayerPrefs","slug":"清理-unity-playerprefs","link":"#清理-unity-playerprefs","children":[]}],"git":{"createdTime":1689665342000,"updatedTime":1714125625000,"contributors":[{"name":"ycx","email":"ycx1287984258@163.com","commits":11}]},"readingTime":{"minutes":4.34,"words":1302},"filePathRelative":"guide/07th-mod/uninstall.md","localizedDate":"2023年7月18日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">本文译自 07th-mod 官网</p>\\n<p>如需阅读原文，请点击<a href=\\"https://07th-mod.com/wiki/Higurashi/Uninstall/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">这里</a>。</p>\\n</div>\\n<h1>游戏及 Mod 卸载指南</h1>\\n<p>如果你想完全卸载《寒蝉鸣泣之时》游戏 (想重装，或是已经通关了)，请遵循以下指南。注意，<strong>从 Steam 卸载游戏不会删除 Mod 文件</strong>。所以要遵循以下指南从电脑中完全删除 Mod 文件。</p>","copyright":{"author":"Lancher, ycx"},"autoDesc":true}');export{te as comp,le as data};
