---
icon: question
title: 常见问题
author: Lancher
category: 使用指南
tag:
  - 07th-mod
  - 安装指南
article: false
star: 2
---

::: tip 本文译自 07th-mod 官网

如需阅读原文，请点击[这里](https://07th-mod.com/wiki/Higurashi/FAQ/)。

:::

# 寒蝉常见问题帮助

欢迎来到常见问题帮助区，你可以用页面顶端的**搜索栏**或者右边的**导航栏**快速定位你的问题。

## 我的问题在这里找不到怎么办？

汉化补丁问题请联系我们，Mod 本身问题请[在此页面](https://07th-mod.com/wiki/Higurashi/support/)联系07th-mod

**※ 以下的 “我们” 如无特殊说明，均指 07th-mod**

## 常见问题

### 语音匹配等级和其它的 Mod 设置有啥用？

请看[快捷键与设置介绍页面](./shortcuts.md)

## 已知问题

### 语音在游戏中播放时出现卡顿

#### 可能的解决方案

- 如果 Hamachi 在运行，关掉它
- 禁用所有备用的网络适配器
- 在固态硬盘上安装游戏，而非机械硬盘

#### 解决方案的理由

多个网络适配器同时启用时会干扰 Unity 引擎的资源加载。在这个页面可查看详细说明：
[Unity may try to access the wrong network adapter](https://answers.unity.com/questions/623448/www-class-for-loading-local-texture-is-very-slow.html)
。也有可能是其它网络问题造成的卡顿。

碎片化太严重或者太满的机械硬盘加载资源时会变得很慢，因此我们推荐安装在固态硬盘上。

### 同一角色的两个立绘同时出现在屏幕上 (重叠/重复立绘)

我们暂时无法 “恰当地” 解决这个 BUG，不过你可以尝试这个解决方法：

- 保存游戏
- 重启游戏
- 读取存档

完成以上步骤后，你可能要玩一会儿才能让重复的立绘完全消失。

遇到这个问题时请将你的存档发送给我们，以便我们可以修复这个 BUG，我们将不胜感激。

### 游戏启动时卡在白屏

第一次打开游戏时，通常会在白屏上 “卡” 着最多两分钟，但是：

- 如果卡了两分钟以上 (请等待至少 10 分钟)，很有可能是因为脚本文件编译失败。**请在
 [Discord](https://discord.gg/pf5VhF9)
上给我们留言，我们会发给你预编译的脚本文件来解决这个问题。**
如果我们接到了足够多的这个问题的报告，我们会在以后发布时附加上预编译脚本。

- 如果游戏一直卡在黑屏界面，可能是什么东西出了问题。发生这个问题时请联系我们。

### 游戏启动时卡在黑屏

可能造成游戏启动时黑屏的原因有很多。这些原因通常被记录在游戏日志里 (在
[Higurashi Support](https://07th-mod.com/wiki/Higurashi/support/)
了解如何找到日志)。请在
 [reporting a black screen issue on Discord](https://07th-mod.com/wiki/Higurashi/support/)向我们提交日志。

#### **我的游戏以前可以运行，但是现在卡在黑屏**

有时存档文件可能会损坏。尽管游戏以前可以运行，但还是会卡在黑屏。这样你应该会在游戏日志的顶部看到这样的内容:
```
Could not read from save file C:\Users\drojf\AppData\Roaming\MangaGamer\higurashi02\save003.dat
Exception: System.IndexOutOfRangeException: Array index is out of range.
  at CLZF2.lzf_decompress (System.Byte[] input, System.Byte[]& output) [0x00000]in <filename unknown>:0
  at CLZF2.Decompress (System.Byte[] inputBytes) [0x00000] in <filename unknown>:0
  at Assets.Scripts.Core.Buriko.BurikoSaveManager.GetSaveData (Int32 slot, System.String path) [0x00000] in <filename unknown>:0
```

请尝试删除日志中提到的存档文件(或者移动文件让游戏找不到)。你可以用 Mod 选项菜单 (如果能用的话) 来找到日志和存档文件，或者借助
[Support page](https://07th-mod.com/wiki/Higurashi/support/)
,Part 4 (Higurashi Game Log and Save Files)，手动找到它们。

#### **在 Windows 系统更新或者显卡驱动更新之后随机出现黑屏的现象，而且日志中出现 "IndexOutOfRangeException" 字段**

如果你遇到了黑屏，而且游戏日志里有 `IndexOutOfRangeException: Array index is out of range. at UnityEngine.Display.RecreateDisplayList (System.IntPtr[] nativeDisplay) [0x00000] in <filename unknown>:0`，那么你很有可能遇到了这个问题。

这个问题会影响所有 Unity 引擎的游戏，不只是寒蝉，而且与显卡控制面板中的纵横比选项有关。在
[这个 Steam 论坛帖子](https://steamcommunity.com/discussions/forum/1/1480982971174752598/)
中查看二楼的回复，以得知如何在英伟达控制面板 (也有英特尔、AMD) 中解决这个问题。

### 存档兼容性问题/我的存档在更新后用不了

两个版本的 Mod 间的存档是互不兼容的。

如果你有旧存档，不要点击 “继续游戏” 或加载存档。请用章节跳跃菜单或者重开一局新游戏。否则你可能遇到一些怪问题，比如卡在黑屏，或者游戏崩溃。

如果你想在多个设备间使用存档(比如借助 Steam 云同步)，先确保多个设备间 Mod 版本一致。

全局存档数据(比如你已经解锁的内容)*应该*在不同版本的 Mod 间相互兼容，包括未安装 Mod 的游戏。

此页面底部列出了关于存档位置的详细信息。

### 没有声音/音频/BGM/语音

在调试此问题时，有必要测试并报告以下内容

1. 检查游戏内设置，看看语音、语音、音效的音量是否调到了零

2. 下面的软件(和音频设备相关)可能干扰语音/音频在游戏中的播放。请关闭下面的软件或设备：

    - 雷云
    - 罗技 G HUB
    - 华硕 Sonic Studio 3
    - HyperX 的软件或耳机
    - 总体来说：
        - 游戏音频软件
        - 蓝牙耳机软件
        - 任何和你电脑音频有关的第三方软件

3. 检查其它章节有没有问题，还是只有这个章节有问题

4. 检查重启电脑能否解决问题

5. 试一试其它音频设备(比如用扬声器代替 USB/蓝牙耳机)

6. 检查你的游戏路径中有没有 `#` 或者其它的奇怪的特殊字符。这会导致只有在打开视频时才能听到声音。

下面是关于一些特殊情况的帮助

#### **没有语音，但是其它的听起来都 OK**

首先，请确保你玩过了游戏的 OP 部分。旁白和有些对话 (例如祟杀篇 OP 部分) 是没有语音的，所以你要等到角色应该说话时再确定是否真的没有语音。

如果语音真的没有播放，在游戏菜单页面之外，按下两次 **F10** 键来打开 Mod 菜单。检查 BGM/语音音量是否调成了零。

#### **OP 视频只有声音**

有些用户在 OP 视频播放时只有声音，其中一位用户通过清空注册表解决了这个问题，但请将此作为最后措施。在本页面底端查看 “注册表位置与如何清空” 以了解如何做。一位用户的游戏路径中有 `#`。这绝对会导致除了 OP 视频外的所有声音全部失效。确保你的游戏路径中没有任何特殊字符。如果你想更改 Steam 游戏安装目录，请见此
[帮助](https://support.steampowered.com/kb_article.php?ref=7418-YUBN-8129)
。

#### **完全没有声音**

Windows 有允许你为每个软件单独设置音量的功能，可能导致游戏没有声音。
- 右击桌面右下角的声音图标
- 点击 “打开声音设置”
- 找到 “高级声音选项”
- 点击 “应用音量和设备首选项”
- 检查游戏是否静音

### Linux-游戏在启动时崩溃，日志开头有 "fatal stalled cross-thread pipe" 的错误信息

- 如果日志开头有 `src/common/pipes.cpp (852) : fatal stalled cross-thread pipe` 的错误，可能是游戏和 Steam 连接出现问题
- 要修复这个问题：
    - 重启 Steam 并打开游戏
    - 尝试在不开启 Steam 时运行游戏 (关闭 Steam，然后直接点击游戏程序)

### Linux-当使用 awesomewm 桌面管理器移动鼠标时，整个游戏/系统会卡住
- 这个问题已经报告给 awesomewm 桌面管理器了
- 这个问题不只影响寒蝉
- 要修复这个问题：
    - 关闭 compositor
    - 用 `--no-argb` 的变量启动桌面管理器(
      [更多信息在此，虽然和这个问题不完全一样](https://github.com/awesomeWM/awesome/issues/2502)
    )

### 使用 GNOME/MATE 桌面的 Linux 用户-游戏启动时整个桌面崩溃

GNOME/MATE 桌面 (Ubuntu 和 Fedora 的默认桌面) 会导致启动第四章及后面篇章时整个桌面崩溃。甚至游戏本体 (未安装 Mod) 也会出现这个问题。

一个解决方案是安装 XFCE 桌面。

在安装 Mod 之前，请先确保你能打开游戏本体 (不要存档！本体存档和本 Mod 不兼容)

### 祭囃篇 (第八章) 出现 "Fatal error in gc: get thread context failed" 错误

如果你遇到了 `Fatal error in gc: get thread context failed` 错误，要么卸载第三方杀毒软件，要么把游戏加入杀毒软件白名单。

AVG 很容易因杀毒软件出现这个问题。

### 文本记录或者其它界面 (UI) 卡在屏幕上

游戏本体也会有很多 UI 上的 BUG，比如关不掉的弹出菜单或窗口。

文本记录特别容易卡在屏幕上，因为它和鼠标滚轮绑定在一起。如果你不小心在按下一些按钮时滚动鼠标，可能同时弹出两个窗口。

我们暂时没法修复这个问题，在滚动滚轮时请不要点击按钮，进入菜单时请慢一点。

在[这里](https://github.com/07th-mod/higurashi-assembly/issues/60)查看详细信息。

### 在 Tips 中无法保存/点不动保存按钮

不好意思，这个是特性。Tips 模式下无法保存游戏，只有在主线中能保存。

### Steam 成就解锁不了

首先，请尝试重启 Steam。

其次，如果还有问题请与我们联系。

## 手动安装的已知问题

### 游戏崩溃

经常会有人下载了最新的语音补丁却忘记升级图像补丁。如果图像补丁是老版的，那么当游戏运行到要打开一个不存在的文件时游戏就会崩溃。栗子：游戏尝试打开一张不存在于 `CG` 文件夹的图片。

### 游戏已经是最新的，但是一些语音或者图像加载不出来

发生这种问题时，首先清空 `CompiledUpdateScripts` 文件夹。在游戏运行时，按下 **F10**，然后在 “存档和日志文件” 下点击 “显示编译完毕的脚本”。确保你的游戏是最新版本且上述文件夹是空的，然后重启游戏。正常情况下会白屏一段时间。

### 延迟和性能问题

如果游戏时不时地卡顿或卡住，你应该检查一下下面的东西：

- 关闭**所有**后台中运行的程序，连看上去 “无害” 的也要关
- 如果游戏安装在机械硬盘，请移动到固态硬盘。同时也可以检查下机械硬盘是否运转正常，长时间的文件搜索会造成加载资源时游戏卡住
- 回想下最近电脑是否做过什么更改(如果游戏以前可以运行的话)。比如说 Windows 系统更新、驱动更新、硬件变动、安装了新程序、更改了杀毒软件设置……
- 如果是语音播放中出现卡顿，[看这个已知问题](#语音在游戏中播放时出现卡顿)
- 重启电脑
- 虽然寒蝉对电脑配置要求并不高，但是太老的电脑或者系统玩起来表现并不好。请记住这是一个 Unity 游戏，性能稍高的配置还是有必要的。

## 寒蝉语音和音效变更/四月的更新

### 四月的更新是啥？

四月更新更改了 BGM 和音效。主要变动有：

- 一些 BGM/音效被替换成了完全不同的或新的 BGM/音效
- 一些情况下，重复的BGM取代了现有的 BGM，导致 BGM 曲目变少
- 一些 BGM/音效被换成了原 BGM/音效的修改/重录版本
- 修正了一些 BGM 被剪辑和失真的问题，同时新版本中应用了不同乐器演奏的音频
- 修改了游戏脚本的一些地方，以播放和旧版本不同的音频。因为本 Mod 用的是自己的脚本，所以我们不受影响。

详情见下方：

- 音乐变动：见
[寒蝉音乐变动表 (需翻墙)](https://docs.google.com/spreadsheets/d/1c4Ou9ssNuTAsxJozD0nnc-fzfaIwAdk30F2JhhQGmw4/edit?usp=sharing)
- 音效变动： (暂时没有音效变动表)

### 这个 Mod 提供了什么选项？

本 Mod 允许你通过 F10 Mod 菜单切换 BGM/音效。以下是修复每个 BGM 或音效的方法：

- 如果某个 BGM 或音效被完全不同的音频替换掉了，我们已经将其还原回原版本
- 如果某个 BGM 或音效有严重的失真问题或其它音频问题，而且新文件的问题较小，那么我们采用新版本

未来我们也许会提供一个 “完全降级” 补丁，可以将每一个文件还原到四月更新之前，但现在还没有。

## 杂项问题

### 有仅语音补丁吗 (没有 PS3 立绘)？

有的，但是可能是非官方的 (鬼隐篇)，太旧了 (棉流篇)，或者不再提供支持 (所有篇章)。所以不要向我们反馈任何有关仅语音补丁的问题。要知道这个补丁不支持很多特性。最完善的版本是语音和图像补丁。你可以在[这个页面](https://07th-mod.com/wiki/Higurashi/Higurashi-Part-1.1---Voices-only-Patch/)找到仅语音补丁。

### 啥是“OST 重制”选项？

OST 重制是在四月补丁之前就开始的一个项目，包含对几首原版 (2019 年之前) 音乐的民间重制-
[点此试听](https://radiataalice.bandcamp.com/album/hinamizawa-syndrome-vol-1)
- 这个补丁更多地是作为副项目来开发，试图用现代乐器改进最初的 1999 年版配乐，并修复 Steam 版配乐的剪辑和失真问题。

## 存档文件位置

在游戏中，按下 **F10**，然后在 “存档和日志文件” 下点击 “显示存档”。要是这不管用，或者你想手动找到你的存档文件，请见以下内容：

以下是寒蝉第一章的存档位置 (其它篇章也一样)：

- Windows：`C:\Users\[你的用户名]\AppData\Roaming\MangaGamer\higurashi01`
    - 捷径：把这个复制到资源管理器地址栏 `%AppData%/Mangagamer`
- MacOS：`~/Library/Application Support/unity.MangaGamer.Higurashi When They Cry - Ch.1 Onikakushi/`
- Linux：`~/.config/unity3d/Mangagamer/Higurashi When They Cry _ Ch_1 Onikakushi`

在文件夹里有：

- 一个存储不是特定存档的信息的文件 `global.dat` (注意：一些信息储存在注册表中，见下面)
- 自动存档文件，比如 `save000.dat`
- 和每个存档相关联的截图，比如 `save000.png` 和 `qsave0.png`

要清空你的存档数据，先把这些文件备份一下，**禁用 Steam 云同步**，然后全部删除。**Steam 会把存档同步回来**，所以请确保暂时禁用 Steam 云同步，否则存档会重现/被 Steam 覆写。

## 注册表位置与如何清理 (仅 Windows)

见[清除注册表](./uninstall.md#清除注册表-进阶-仅-windows)

## 我有关于主机版澪尽篇的问题

见[澪尽篇常见问题解答](https://07th-mod.com/wiki/Higurashi/MiotsukushiFAQ/) (未翻译)












