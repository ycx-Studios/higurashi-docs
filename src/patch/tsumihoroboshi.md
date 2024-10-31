---
title: 《寒蝉鸣泣之时：罪灭篇》简体中文汉化补丁 Ver 1.2
image: https://cdn.iycx.top/higurashi/ep6_chs_cover.jpg
author: ycx
icon: code-branch
category: 汉化补丁
date: 2021-08-10
tag:
  - 汉化补丁
sticky: 2
---
![](https://cdn.iycx.top/higurashi/ep6_chs_cover.jpg)  
## 摘要
<div align="center"><iframe width="100%" height="190" frameborder="0" src="https://store.steampowered.com/widget/668350/?t=%E3%80%8A%E5%AF%92%E8%9D%89%E9%B8%A3%E6%B3%A3%E4%B9%8B%E6%97%B6%E3%80%8B%E6%98%AF%E4%B8%80%E9%83%A8%E6%9C%89%E5%A3%B0%E5%B0%8F%E8%AF%B4%E3%80%82%E9%9F%B3%E4%B9%90%E3%80%81%E6%95%85%E4%BA%8B%E8%83%8C%E6%99%AF%E4%B8%8E%E8%A7%92%E8%89%B2%E5%85%B1%E5%90%8C%E5%88%9B%E9%80%A0%E4%BA%86%E4%B8%80%E4%B8%AA%E4%B8%96%E7%95%8C%EF%BC%8C%E6%98%AF%E7%8E%A9%E5%AE%B6%E9%98%85%E8%AF%BB%E5%B0%8F%E8%AF%B4%E7%9A%84%E8%88%9E%E5%8F%B0%E3%80%82%E6%AC%A2%E7%AC%91%E3%80%81%E5%93%AD%E6%B3%A3%E3%80%81%E6%80%A8%E6%81%A8%E3%80%82%E8%AF%B7%E5%B8%A6%E7%9D%80%E9%82%A3%E6%A0%B7%E7%9A%84%E5%BF%83%E6%83%85%E4%B8%8E%E4%B8%BB%E4%BA%BA%E5%85%AC%E4%B8%80%E8%B5%B7%E4%BD%93%E9%AA%8C%E6%95%85%E4%BA%8B%E5%90%A7%E3%80%82"></iframe></div>  

该补丁同步于 [Keylol 其乐](https://keylol.com/t739327-1-1) 与 [哔哩哔哩专栏](https://www.bilibili.com/read/cv12586190) 发布.  

**由于前段时间在贴吧有部分玩家质疑我们剽窃了原版游戏的文本，我们决定对所有文本重新进行替换，并且将不再向百度贴吧发布。**
**目前我们暂时继续开放汉化补丁的下载，后续将会通过热更新的方式陆续推送新的游戏文本，在此期间给各位带来的不便请谅解！**

**这个补丁使用了前辈的文本并进行改进, 我们对此万分感谢, 在下方可以找到 Staff 表, 如有建议可回帖或私信联系我们.**  
同样, 关于这个补丁有任何问题可以先查看下方的常见问题部分, 如果实在找不到解决办法, 方法同上.  
该补丁完全免费. 如果你是在任何渠道购买到的, 麻烦给一个差评!  

现已支持所有版本的游戏以及<font color='#ff3a3a'>07th-mod 补丁</font>使用汉化 (适配版本为 **v4.3.0**, 如未说明均可兼容后续更新)! (Steam, MangaGamer, GOG 版本)  
另: 有中文版的 Steam 背景与徽标可供下载, 点击这里查看[使用教程](../guide/patch/main.md#设置-steam-自定义背景-徽标-封面图), 预览图:  
![](https://cdn.iycx.top/blog/2020/05/steam-library.jpg)  

如果遇到中文显示不正常的情况 (一般是菜单), 经测试需要安装中文字体软件包. 例如 [```Noto CJK```](https://github.com/notofonts/noto-cjk) 或是 [```文泉驿微米黑/文泉驿正黑```](http://wenq.org/wqy2/index.cgi) 等, 请确认下是否有安装.  
不同的操作系统安装方式与软件包名都不同, 请自行搜索下自己使用的操作系统系统适用的安装方式与软件包名.  

Linux 测试平台: Ubuntu 20.04.6 LTS x64, MacOS 测试平台: macOS Sonoma 14.4.1  

## 参与人员
::: tip 我们在制作过程中参考了原版游戏的汉化  
:::


原翻译: Jerry2  
原润色: 香菇, 无从, Mize  
监制: ycx  
技术: ycx  
校对&润色: Lancher, ycx  
美工: ycx  
测试: Lancher, ycx  

## 更新日志

### Ver 1.2 (2024.06.24)
修复了不能正常保存章节进度和解锁 Tips 与成就的问题.  
将汉化补丁的设置存储由内置变量转移到加载配置文件.  
新增键位绑定功能, 允许对部分功能额外绑定一个功能键.  
优化读取背景音乐信息的逻辑, 匹配最新版本并汉化了部分曲目与音频.  
修复在非 Windows 系统上读取 JSON 文件会导致游戏内显示问号的问题.  
跟进 07th-mod 补丁版本 v4.3.0.  

### Ver 1.1 (2024.04.08)
优化了汉化补丁的配置文件与脚本的加载方式.  
优化了游戏内检查更新的方法, 可以针对某个单独的脚本动态进行热更新.  
为游戏内显示的背景音乐信息添加哔哩哔哩试听渠道, 进行游戏时可以按右键在暂停菜单中查看.  
现在可以在调试菜单中 (F10) 开启或关闭汉化补丁的功能, 或进行手动更新操作.  
适配 07th-mod 补丁版本 v4.2.0.

### Ver 1.0 (2021.08.10)
最初版本发布.  

### Ver 1.0 Beta (2021.02.03)
Lancher 开坑 & 版本发布.  

## 使用方法
1. 依照自己选择下载原版/附加语音版/07th-mod 版汉化包, 并且符合自己系统的安装包.  
注: 非 Windows 版本系统安装帮助均在压缩包内.  
若要使用语音版, 无需下载原版汉化包与语音补丁, 仅需下载附加语音版汉化补丁即可.  
若要使用 07th-mod 版, 请前往 [07th-mod](https://07th-mod.com/home/) 安装补丁, 此处附带了[安装指南](../guide/07th-mod/main.md).  
2. 解压缩.  
3. 将汉化补丁放置在游戏目录下, 按照提示或 ReadMe 文件操作. (Mac 版本的具体操作可参考补丁目录下的安装教程视频)  
4. 运行游戏  

## 下载地址
天翼云盘: [https://cloud.189.cn/t/eyM3EbV3eQbu](https://cloud.189.cn/t/eyM3EbV3eQbu)  
百度网盘: [https://pan.baidu.com/s/1aW2_DM4MyXKB6UCaXIivRA 提取码: 2333](https://pan.baidu.com/s/1aW2_DM4MyXKB6UCaXIivRA#2333)  
Mega: [https://mega.nz/folder/yAt00QTI#ekESStZzAKDEmTS28axfSg](https://mega.nz/folder/yAt00QTI#ekESStZzAKDEmTS28axfSg)  
中文 Steam 背景与徽标 (非必要): [Steam 原版](https://download.chinalcmod.com/Higurashi/Steam%20Library/Steam_Library_Ep06.zip) | [07th-mod 版](https://download.chinalcmod.com/Higurashi/Steam%20Library/Steam_Library_Ep06_07th-mod.zip)  

## 常见问题
### 如何使用汉化补丁?
将补丁解压后放置在游戏目录下, 运行并按照提示操作就可以了.  
其他系统请参照压缩包根目录下 ReadMe 文件.  
### 为什么当初跳过了2-5章, 直接发布第6章?
这个问题说来话长… 当初第6章的文本移植是由 Lancher 出于兴趣完成的, 制作时不能保证把剩余的7篇全做完.  
Lancher 是蕾娜粉, 第6章也是寒蝉全篇写得最好的篇目之一, 所以本着能做一篇是一篇的想法, 选择了第6章.  
后来 ycx 在程序美工等方面不断完善, 制作出了这个正式版.  
### 好辣鸡! 我不想使用这个补丁了怎么办?
直接使用 Steam 检查游戏完整性 / 重新安装就可以了.  
### 有一些对话很奇怪, 能修改吗? / 我发现了 BUG!
你可以通过回帖联系我们.
### 补丁能与高画质、语音等其他补丁共存吗?
可以. 可以下载附加语音版补丁以及 07th-mod 补丁实现共存.  

## 预览图
![](https://cdn.iycx.top/blog/2021/08/screenshot_01.jpg)

![](https://cdn.iycx.top/blog/2021/08/screenshot_02.jpg)

![](https://cdn.iycx.top/blog/2021/08/screenshot_03.jpg)

![](https://cdn.iycx.top/blog/2021/08/screenshot_04.jpg)

![](https://cdn.iycx.top/blog/2021/08/screenshot_05.jpg)
