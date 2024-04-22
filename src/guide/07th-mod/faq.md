---
icon: circle-question
title: 常见问题解答
author: Lancher, ycx
category: 使用指南
tag:
  - 07th-mod
  - 安装指南
article: false
order: 4
---

::: tip 本文译自 07th-mod 官网

如需阅读原文，请点击[这里](https://07th-mod.com/wiki/Higurashi/FAQ/)。

:::

# 《寒蝉鸣泣之时》常见问题解答

欢迎来到《寒蝉鸣泣之时》常见问题解答，你可以用页面顶端的**搜索栏**或者右边的**导航栏**快速定位你的问题。

## 我的问题在这里找不到怎么办？

汉化补丁问题请联系我们，Mod 本身问题请[在此页面](https://07th-mod.com/wiki/Higurashi/support/)联系07th-mod

**※ 以下的 “我们” 如无特殊说明，均指 07th-mod**

## 常见问题

### 语音匹配等级和其它的 Mod 设置有啥用？

请看[快捷键与设置介绍页面](./shortcuts.md)

## 已知问题

### 没有背景、角色立绘或其他图像 (黑屏，只有在底部显示的对话文本)

有些时候，正常流程中就会出现只有文本没有图像的情况 (例如在《第一章：鬼隐篇》显示完开头的诗句之后)。请先试试正常玩一会，看看是不是真的是由游戏 BUG 引起的，或者只是流程中故意显示的黑屏。

如果还是有问题 (可以正常进行游戏，但是不显示任何图像)，先试试重启游戏。重启之后，应该就可以正常显示了。

### 语音在游戏中播放时出现卡顿

#### 可能的解决方案

- 如果你正在使用 Hamachi，请先试试停用它
- 禁用所有非必要的网络适配器
- 在固态硬盘上安装游戏，而非机械硬盘

#### 解决方案的原理

多个网络适配器同时启用时可能会干扰《寒蝉鸣泣之时》游戏 Unity 引擎的资源加载。在这个页面可查看详细说明：[Unity may try to access the wrong network adapter](https://answers.unity.com/questions/623448/www-class-for-loading-local-texture-is-very-slow.html)。也有可能是其它网络问题造成的卡顿。

至于为什么最好装在固态硬盘上，机械硬盘的磁盘碎片太多或者空间不够会导致加载资源的时候速度变得很慢，因此我们推荐安装在固态硬盘上。

### 同一角色的两个立绘同时出现在屏幕上 (重叠在一起/重复显示立绘)

我们暂时无法 “恰当地” 解决这个 BUG，不过你可以尝试这个解决方法：

- 存个档
- 重启游戏
- 读取存档

完成以上步骤后，你可能要玩一会儿才能让重复出现的立绘完全消失。

遇到这个问题时请将你的存档发送给我们，以便我们可以修复这个 BUG，我们将不胜感激。

### 游戏启动时卡在白屏

使用最新版本的 Mod，应该不会引起启动游戏时卡在白屏或者黑屏的问题。如果遇到了这个问题：

- 等个一两分钟，看看游戏会不会自行恢复。如果没有效果，请看下一步。

- 按照 [Higurashi Support](https://07th-mod.com/wiki/Higurashi/support/) 页面的说明找到名为 `output_log.txt` 或 `output_log.txt` 的游戏日志。

- 在 [Discord 服务器](https://07th-mod.com/wiki/Higurashi/support/) 中的 `#higu_support` 频道将游戏日志提交给我们。

#### **我的游戏以前可以运行，但是现在卡在黑屏/存档损坏问题**

有时存档文件可能会损坏。尽管游戏以前可以运行，但损坏后会导致游戏卡在黑屏界面。如果是这个原因，那你应该可以在游戏日志的某个位置看到这样的内容:

```
Could not read from save file C:\Users\drojf\AppData\Roaming\MangaGamer\higurashi02\save003.dat
Exception: System.IndexOutOfRangeException: Array index is out of range.
  at CLZF2.lzf_decompress (System.Byte[] input, System.Byte[]& output) [0x00000]in <filename unknown>:0
  at CLZF2.Decompress (System.Byte[] inputBytes) [0x00000] in <filename unknown>:0
  at Assets.Scripts.Core.Buriko.BurikoSaveManager.GetSaveData (Int32 slot, System.String path) [0x00000] in <filename unknown>:0
```

如果与你的情况一致，**请首先禁用 Steam 云同步/GOG 云存档**，然后尝试删除日志中提到的存档文件 (或者移动文件让游戏找不到)。

你可以用 Mod 选项菜单 (如果能用的话) 来找到日志和存档文件，或者查看指南的[删除存档](uninstall.md#%E5%88%A0%E9%99%A4%E5%AD%98%E6%A1%A3)了解详细说明。

#### **在 Windows 系统更新或者显卡驱动更新之后随机出现黑屏的现象，或在日志中出现 "IndexOutOfRangeException" 字段**

如果你遇到了黑屏，而且游戏日志里出现了 `IndexOutOfRangeException: Array index is out of range. at UnityEngine.Display.RecreateDisplayList (System.IntPtr[] nativeDisplay) [0x00000] in <filename unknown>:0`，那么你很有可能遇到了这个问题。

这个问题会影响所有 Unity 引擎的游戏，不仅仅只有《寒蝉鸣泣之时》，而且与显卡控制面板中的纵横比选项有关。在
[这个 Steam 论坛帖子](https://steamcommunity.com/discussions/forum/1/1480982971174752598/)
中查看二楼的回复，以得知如何在英伟达控制面板 (或是英特尔、AMD 的控制面板) 中解决这个问题。

### 存档兼容性问题/我的存档更新后不能用了

不同版本的 Mod 间的存档是互不兼容的。

如果你有旧版的存档，不要点击 “继续游戏” 或加载存档。请用章节跳跃菜单或者重新开始新游戏。否则你可能遇到一些怪问题，比如卡在黑屏或游戏崩溃。

如果你想在多个设备间使用存档 (比如借助 Steam 云同步)，先确保多个设备间安装的 Mod 版本一致。

全局存档数据 (比如你已经解锁的内容) *应该*在不同版本的 Mod 间相互兼容，包括未安装 Mod 的游戏。

此页面底部列出了关于存档存放位置的详细信息。

### 没有声音/音频/背景音乐/语音

在调试此问题时，有必要测试并告诉我们以下内容

1. 检查游戏内设置，看看语音、音乐或音效的音量是否调到了零

2. 禁用、卸载或结束与计算机上安装的任何 “额外” 音频相关软件或驱动程序相关的进程！
  
    - 下面的软件 (和音频设备相关) 可能干扰语音/音频在游戏中的播放。请关闭下面的软件或设备：

      - 雷蛇雷云
        - 这里指的是图标像云朵的旧版本。可能会有多个进程在运行，请确保全部关闭、卸载或禁用掉。据说新版本不会出现问题，但也可以试试关闭新版和旧版。
      - 罗技 G HUB
      - 华硕 Sonic Studio 3
      - HyperX 的软件或耳机
      - 赛睿 Nahimic (预装在微星品牌的电脑上！)
      - 总的来说：
          - 游戏音频软件
          - 蓝牙耳机软件
          - 任何和你电脑音频有关的第三方软件

    - 请先尝试禁用、卸载、结束与上面提到的软件相关进程 (检查任务管理器来确保程序完全关闭！)

3. 尝试关闭每个程序，然后使用任务管理器结束计算机上的所有进程 (能被结束的非 Windows 关键进程)。然后尝试运行游戏，看看是不是其中某个进程引起的问题。

4. 检查其它游戏的章节有没有问题，还是只有这一个章节有问题

5. 检查重启电脑能否解决问题

6. 试一试其它音频设备 (比如用扬声器而不是 USB/蓝牙耳机)

7. 检查你的游戏路径中有没有 `#` 或者其它的奇怪的特殊字符。这会导致只有在播放开场动画的视频时才能听到声音。

如果上面提到的方案没有效果，那下面的内容是关于一些特殊情况的更多帮助：

#### **没有语音，但是其它的听起来都 OK**

首先，请确保你玩过了游戏的 OP 部分。旁白和有些对话 (例如祟杀篇 OP 部分) 是没有语音的，所以你要等到角色应该说话时再确定是否真的没有语音 (说话的时候文本会带引号)。

如果语音真的没有播放，在游戏菜单页面之外，按下两次 **F10** 键来打开 Mod 菜单。检查 BGM/语音音量是否调成了零。

#### **只有在播放开场动画的视频时有声音**

1. 这个问题一般是由于其他软件或者驱动程序干扰了游戏引起的。
    - 已知这些软件会导致这个问题：
      - 雷蛇雷云
      - 赛睿 Nahimic
      - 上面 `没有声音/音频/背景音乐/语音` 列表中列出的所有软件也有可能
    - 请先尝试卸载这些软件或终止与这些程序或驱动程序关联的进程。
    - 如果你无法确定是哪个程序引起的，可以试着关闭所有程序，并通过任务管理器结束计算机上所有非必要的进程，然后启动游戏看看问题有没有解决。
    - 有玩家告诉我们这个问题不会影响到第一章、第二章，但是会影响到第三章。
    - 如果你的日志里出现了 `Error: Cannot create FMOD::Sound instance for resource �t�, (Operation could not be performed because specified sound/DSP connection is not ready. )`，那么你很有可能遇到了这个问题。

2. 还有玩家的游戏路径中有 `#`，这肯定会导致游戏除了开场动画视频之外所有声音无法播放。请确保游戏路径中没有包含任何特殊字符。
    - 如果你需要移动或更改 Steam 游戏的安装位置，请查看：[移动 Steam 安装文件和游戏](https://help.steampowered.com/zh-cn/faqs/view/4BD4-4528-6B2E-8327)。

3. 我们也收到过下述问题报告，但可能只是巧合：
    - 其中一位用户通过清空注册表解决了这个问题，但请将此作为最后的修复措施。请参考本页面底部的 “注册表文件位置与如何清空” 了解如何执行操作。

#### **完全没有声音**

Windows 有允许你为每个软件单独设置音量的功能，这可能导致游戏没有声音。

- 右击桌面右下角的声音图标
- 点击 “打开声音设置”
- 找到 “高级声音选项”
- 点击 “应用音量和设备首选项”
- 检查游戏是否静音 (请先启动游戏)

### 玩《第八章：祭囃篇》时遇到 Fatal error in gc: get thread context failed

如果出现 `Fatal error in gc: get thread context failed`错误，你可能需要卸载第三方 (非微软提供或 Windows 自带的) 杀毒软件，或者在杀毒软件解除阻止游戏或加入白名单。

众所周知，AVG 杀毒软件经常会误杀 (当然，某些国产杀毒软件也是)。

### 文字记录窗口或其他用户界面 (UI) 卡在屏幕上

即便是原版游戏，也可能会存在不少 UI 错误，比如说会出现无法关闭的弹出菜单或是窗口。

特别是文字记录窗口，因为它能用鼠标滚轮打开，所以很容易会卡住。如果在点击按钮时不小心滑动了滚轮，可能就会同时弹出两个窗口，这样就会导致游戏出现问题。

目前我们也没有能解决这个问题的办法，唯一的办法就是在查看菜单的时候小心点别滚到滚轮，慢慢操作 (点击选项前等待画面淡入淡出结束)。

想了解更多信息，可以查看[这个 Github 问题](https://github.com/07th-mod/higurashi-assembly/issues/60)。

### 无法存档/阅读 Tips 时无法点击保存按钮

请检查你是否正在阅读 Tips。当在阅读 Tips 部分时，[游戏将不允许进行存档/快速保存/读档/快读读档](https://github.com/07th-mod/tatarigoroshi/issues/74#issuecomment-578990330)。

### Steam 成就无法解锁

先试试重启 Steam，因为有时候成就其实解锁了，只是无法正常显示。

之前，我们还遇到过其他类似的问题，所以如果仍然无法正常解锁成就，请联系我们。

### 游戏启动时显示白屏，随后游戏崩溃。崩溃日志里包含了 `lci_proxyumd32.dll caused a Breakpoint` 错误

如果你正在使用 USB 转 HDMI 转接器，或是加载了由 Fresco Logic 提供的驱动程序，则会导致这个问题。可以查看这个 [空洞骑士的帖子](https://steamcommunity.com/app/367520/discussions/0/1700541698692038649/) 了解详细信息。

想解决这个问题，你需要在设备管理器中禁用 (或者卸载?) 驱动程序，位于`设备管理器`→`系统设备`→`FrescoLogic 代理显示适配器`，如下图所示：

![](https://cdn.iycx.top/higurashi/guide/device-manager-frescologic-driver.jpg)  

## 已知问题 - 手动安装

### 游戏崩溃

经常会有人下载了最新的语音补丁却忘记升级图像补丁。如果图像补丁是旧版的，那么当游戏运行到要打开一个不存在的文件时游戏就会崩溃。栗子：游戏尝试打开一张不存在于 `CG` 文件夹的图片。

### 游戏已经是最新的，但是一些声音无法播放或者图像加载不出来！

发生这种问题时，首先清空 `CompiledUpdateScripts` 文件夹。在游戏运行时，按下 **F10**，然后在 “存档和日志文件” 下点击 “显示编译完毕的脚本”。确保你的游戏是最新版本且上述文件夹是空的，然后重启游戏。正常情况下会白屏一段时间。在更新完补丁之后请确保按这些步骤操作一次！

### 延迟和性能问题

如果游戏时不时地卡顿或卡住，你应该检查一下这些问题：

- 关闭**所有**在后台运行的程序，即使那些看起来 “没问题” 的也要关闭
- 如果游戏安装在机械硬盘，请移动到固态硬盘。同时也可以检查下硬盘的状态是否正常，长时间的文件查找会造成加载资源时游戏卡住。
- 回想下最近电脑是否做过什么更改 (如果游戏以前可以运行的话)。比如说 Windows 系统更新、驱动更新、硬件上的改动、安装了新程序、更改了杀毒软件设置……
- 如果是语音播放中出现卡顿，[看这个已知问题](#语音在游戏中播放时出现卡顿)
- 重启电脑
- 虽然《寒蝉鸣泣之时》对电脑的配置要求并不高，但是太老的电脑或者系统玩起来表现并不好。请记住，这是一个 Unity 引擎的游戏，性能稍高的配置还是有必要的。

## 已知问题 - Linux

### [仅限 Wine 用户] 启动时不显示文字 - 缺少字体

有些 Wine 用户 (不影响 Proton 或 Native) 报告了这个问题，他们在第一次启动游戏的时候看不到任何文字。

这个问题只会出现在所有的 Mod 菜单 (例如 F10 菜单)，即菜单不会显示文字，并且不会影响到正常游戏。

想解决这个问题，你需要将 `corefonts` 字体包安装到 wineprefix 中。各个系统安装 `corefonts` 的方式可能不同，所以你可能需要自行查找下安装方法。07th-mod 网站上提供了一些截图，可能会提供帮助，[点击查看](https://07th-mod.com/wiki/Higurashi/FAQ/#wine-users-only-no-text-on-startup-missing-corefonts)。

## 其他问题

### 有仅语音补丁吗 (没有 PS3 立绘)？

有的，但是可能是非官方的 (鬼隐篇)，太旧了 (棉流篇)，或者不再提供支持 (所有篇章)。所以不要向我们反馈任何有关仅语音补丁的问题。要知道这个补丁不支持很多特性。最完善的版本是语音和图像补丁。你可以在[这个页面](https://07th-mod.com/wiki/Higurashi/Higurashi-Part-1.1---Voices-only-Patch/)找到仅语音补丁。

### 啥是 “OST 重制” 选项？

OST 重制是在四月补丁之前就开始的一个项目，包含对几首原版 (2019 年之前) 音乐的民间重制 - [点此试听](https://radiataalice.bandcamp.com/album/hinamizawa-syndrome-vol-1)

这个补丁更多地是作为副项目来开发，试图用现代乐器改进最初的 1999 年版的 midi 配乐，并修复 Steam 版配乐的剪辑和失真问题。

## 存档文件位置

::: warning

如果你想删除或修改存档，**请先禁用 Steam 云同步**，因为它会撤销你所做的所有更改。

:::

### 自动查找存档位置

进行游戏时，按下 **F10** 键，在 “存档与日志文件” 下点击 “打开存档目录”。

### 手动查找存档位置

请选择适合你操作系统的指引来找到存档：


:::: tabs

@tab Windows

存档会存储在：
`C:\Users\[你的用户名]\AppData\Roaming\MangaGamer\higurashi01`

捷径：把这个复制并粘贴到资源管理器地址栏中打开：`%AppData%/Mangagamer`

@tab Linux

- 对于第一章和第二章，存档数据被分别存放在如下两个长得差不多的目录里：
    - `~/.config/unity3d/MangaGamer/Higurashi When they Cry - Ch.1 Onikakushi`
    - `~/.config/unity3d/Mangagamer/Higurashi When They Cry _ Ch_1 Onikakushi`
  (注意：这个目录符号改成下划线了)

- 对于第三章到第八章，存档数据都被放在同一个目录里：
    `~/.config/unity3d/MangaGamer/Higurashi When they Cry - Ch.3 Tatarigoroshi`

@tab MacOS

存档存储在：

`~/Library/Application Support/unity.MangaGamer.Higurashi When They Cry - Ch.1 Onikakushi/`

@tab Proton / Wine

使用 Proton 的时候，存档被存储在 Proton 的 “Prefix” (`pfx` 文件夹) 中。在 Prefix 目录中，它们的目录结构与在 Windows 系统类似 (可能会使用 `Mangagamer`  文件夹，小写的 g)

这个文件夹的完整路径是：`.steam/steam/steamapps/compatdata/[GAME_ID]/pfx/drive_c/users/steamuser/AppData/Roaming/Mangagamer/higurashi[CHAPTER_NUMBER]`。

`GAME_ID` 可以通过访问 Steam 商店页面，然后查看链接最后的几位数字得到。例如《第一章：鬼隐篇》的 ID 就是 `310360` (https://store.steampowered.com/app/310360)。

::::

在文件夹里有：

- 一个存储不是特定存档的信息的文件 `global.dat` (注意：一些信息储存在注册表中，见下面)
- 手动存档文件，比如 `save000.dat`
- 快速存档文件，比如 `qsave0.dat`
- 和每个存档相关联的截图，比如 `save000.png` 和 `qsave0.png`

要清空你的存档数据，先把这些文件备份一下，**禁用 Steam 云同步**，然后全部删除。**Steam 会把存档同步回来**，所以请确保暂时禁用 Steam 云同步，否则存档会重现/被 Steam 覆写。

游戏还在 PlayerPrefs 中存储了一些与分辨率和全屏相关的附加设置 - 请阅读 [清理 Unity PlayerPrefs](uninstall.md#%E6%B8%85%E7%90%86-unity-playerprefs) 了解更多信息。

## 玩家设置文件位置与清理

见 [清理 Unity PlayerPrefs](uninstall.md#%E6%B8%85%E7%90%86-unity-playerprefs)

## 我有关于主机版澪尽篇的问题

见 [澪尽篇常见问题解答](https://07th-mod.com/wiki/Higurashi/MiotsukushiFAQ/) (未翻译)

## 我有关于音乐和音效变更/四月更新的问题

见 [背景音乐与音效常见问题解答](faq-bgm-se.md)