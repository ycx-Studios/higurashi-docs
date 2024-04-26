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

::: caution

本文章目前存在问题，会导致浏览器无法渲染页面。

目前正在尝试解决，暂时删除会出现问题的内容，敬请谅解！

:::

::: tip 本文译自 07th-mod 官网

如需阅读原文，请点击[这里](https://07th-mod.com/wiki/Higurashi/FAQ/)。

:::

# 《寒蝉鸣泣之时》常见问题解答

欢迎来到《寒蝉鸣泣之时》常见问题解答，你可以用页面顶端的**搜索栏**或者右边的**导航栏**快速定位你的问题。

## 我遇到的问题在这里找不到怎么办？

如果遇到的是汉化补丁的问题，请联系我们。如果是 Mod 本身的问题，请[在此页面 (英文)](https://07th-mod.com/wiki/Higurashi/support/) 联系 07th-mod。

**※ 以下的 “我们” 如无特殊说明，均指代 07th-mod。**

## 常见问题

### 语音匹配等级详细说明/Mod 设置有哪些功能？

请查看[快捷键与设置介绍页面](./shortcuts.md)。

## 已知问题

### 没有背景、角色立绘或其他图像 (黑屏，只有在底部显示的对话文本)

有些时候，正常剧情中就会出现只有文本没有图像的情况 (例如在《第一章：鬼隐篇》显示完开头的诗句之后)。请先试试正常玩一会，看看问题是不是真的是由游戏 BUG 引起的，或者只是剧情中故意显示的黑屏。

如果还是有问题 (可以正常进行游戏，但是不显示任何图像)，先试试重启游戏。重启之后，应该就可以正常显示了。

### 游戏中播放语音时出现卡顿

#### 可能的解决方案

- 如果你正在使用 Hamachi，请先试试停用它
- 禁用所有非必要的网络适配器
- 在固态硬盘上安装游戏，而非机械硬盘

#### 问题的原因

同时存在多个网络适配器时可能会影响《寒蝉鸣泣之时》游戏 Unity 引擎的资源加载。在这个页面可查看详细说明：[Unity may try to access the wrong network adapter (英文)](https://answers.unity.com/questions/623448/www-class-for-loading-local-texture-is-very-slow.html)。其它网络问题也可能会造成卡顿。

至于为什么最好装在固态硬盘上，机械硬盘的磁盘碎片太多或者空间不够会导致加载资源的时候速度变得缓慢，因此我们推荐安装在固态硬盘上。

### 同一角色的两个立绘同时出现在屏幕上 (重叠在一起/重复显示立绘)

我们暂时还没有好办法解决这个问题，不过你可以尝试这个解决方法：

- 存个档
- 重启游戏
- 读取存档

完成以上步骤后，你可能要玩一会儿才能让重复出现的立绘完全消失。

遇到这个问题时，请将你的存档发送给我们，以便我们可以修复这个问题，我们将不胜感激。

### 游戏启动后卡住，显示黑屏或白屏

使用最新版本的 Mod，应该不会引起启动游戏时卡白屏或是黑屏的问题。如果遇到了这个问题：

- 等个一两分钟，看看游戏会不会自行恢复。如果没有效果，请继续看下一步。

- 按照[日志文件位置](faq.md#%E6%97%A5%E5%BF%97%E6%96%87%E4%BB%B6%E4%BD%8D%E7%BD%AE)的说明找到名为 `output_log.txt` 或 `output_log.txt` 的游戏日志。

- 在 [Discord 服务器 (英文)](https://07th-mod.com/wiki/Higurashi/support/) 中的 `#higu_support` 频道将游戏日志提交给我们。

#### **我的游戏以前可以运行，但是现在卡在黑屏/提示存档损坏的问题**

有的时候存档文件可能会损坏。虽然游戏之前可以运行，但损坏后会导致游戏卡在黑屏界面。如果是这个原因，那你应该可以在游戏日志的某个地方找到这样的内容:

::: info

Could not read from save file C:\Users\drojf\AppData\Roaming\MangaGamer\higurashi02\save003.dat
Exception: System.IndexOutOfRangeException: Array index is out of range.
  at CLZF2.lzf_decompress (System.Byte[] input, System.Byte[]& output) [0x00000]in ＜filename unknown＞:0
  at CLZF2.Decompress (System.Byte[] inputBytes) [0x00000] in ＜filename unknown＞:0
  at Assets.Scripts.Core.Buriko.BurikoSaveManager.GetSaveData (Int32 slot, System.String path) [0x00000] in ＜filename unknown＞:0

:::

如果与你的情况一致，**请首先禁用 Steam 云同步/GOG 云存档**，然后尝试删除日志中提到的存档文件 (或者先把存档文件挪出目录让游戏读不到)。

如果可以的话，你可以使用 Mod 选项菜单来找到日志和存档文件的位置，或者查看指南的[删除存档](uninstall.md#%E5%88%A0%E9%99%A4%E5%AD%98%E6%A1%A3)部分了解详细说明。

#### **在更新了 Windows 系统或者显卡驱动之后随机出现黑屏的现象，或在日志中出现 "IndexOutOfRangeException" 字段**

如果你出现了黑屏的情况，并且游戏日志里出现了 `IndexOutOfRangeException: Array index is out of range. at UnityEngine.Display.RecreateDisplayList (System.IntPtr[] nativeDisplay) [0x00000] in <filename unknown>:0`，那么你很有可能遇到的就是这个问题。

不仅仅是影响《寒蝉鸣泣之时》，这个问题会影响所有 Unity 引擎的游戏，问题是与显卡控制面板中的纵横比选项有关。在 [这个 Steam 论坛的帖子 (英文)](https://steamcommunity.com/discussions/forum/1/1480982971174752598/) 中查看二楼的回复，里面会指导你如何在英伟达 (或是英特尔、AMD) 的控制面板中解决这个问题。

### 存档兼容性问题/我的存档在更新后不能用了

不同版本的 Mod 之间保存的存档是互不兼容的。

如果你的存档是由旧版游戏保存的，不要点击 “继续游戏” 或加载存档。请用章节跳跃菜单或者重新开始新游戏。否则你可能遇到一些怪问题，比如卡在黑屏或游戏崩溃。

如果你想在多个设备之间共享存档 (比如借助 Steam 云同步)，请先确保设备间安装的 Mod 版本一致。

全局保存的数据 (例如你的游戏进度和解锁的内容) *应该*会兼容不同版本的 Mod，也*应该*兼容未安装 Mod 的原版游戏。

在此页面的底部列出了关于存档存放位置的详细信息。

### 没有声音/音频/背景音乐/语音

在调试此问题时，有必要测试并告诉我们以下内容

1. 检查游戏内设置，看看语音、音乐或音效的音量是否调到了零

2. 禁用、卸载或结束与计算机上安装的任何额外音频增强相关软件或驱动程序相关的进程！
  
    - 下面这些与音频设备相关的软件可能会干扰在游戏中播放的语音或是音频。请关闭下面的软件或设备：

      - 雷蛇雷云
        - 这里指的是图标像云朵的 2.0 旧版本。后台可能会有多个进程在运行，请确保全部结束、卸载或禁用掉。据说新版本不会出现问题，但也可以试试同时关闭新版和旧版。
      - 罗技 G HUB
      - 华硕 Sonic Studio 3
      - HyperX 的软件或耳机
      - 赛睿 Nahimic (会预装在微星品牌的电脑上！)
      - 总的来说你需要关闭：
          - 游戏音频软件
          - 蓝牙耳机软件
          - 在你的电脑上任何与音频有关的第三方软件

    - 请先尝试禁用、卸载、结束与上面提到的软件相关进程 (检查任务管理器来确保那些程序被完全关闭了！)

3. 尝试关闭每一个程序，然后使用任务管理器结束计算机上的所有无关进程 (能被结束的非 Windows 关键进程)。然后尝试运行游戏，看看是不是其中某个进程引起的问题。

4. 检查一下其他章节的游戏有没有问题，还是只有这一个章节有问题

5. 检查重启电脑能不能解决问题

6. 试一试其它音频设备 (比如用扬声器而不是 USB/蓝牙耳机)

7. 检查你的游戏路径中有没有 `#` 号或是其它奇怪的特殊字符。这会导致只有在播放开场动画视频的时候才能听到声音。

如果上面提到的方案没有效果，那下面的内容是关于一些特殊情况的更多帮助：

#### **没有语音，但是其它声音听起来还算正常**

首先，请确保你已经玩过了游戏的序章 (开头的部分)。旁白和有些对话 (例如《祟杀篇》的序章部分) 是没有语音的，所以你要等到角色说话的时候再确定是不是真的没有语音 (角色说话的时候文本会带上引号：**`“像是这样”`**)。

如果确实没有播放语音，在游戏菜单页面以外的地方，按下两次 **F10** 键来打开 Mod 菜单。检查背景音乐或是语音的音量是否调到了零。

#### **只有在播放开场动画的视频时有声音**

1. 这个问题一般是由于其他软件或者驱动程序干扰了游戏引起的。
    - 已知这些软件会导致这个问题：
      - 雷蛇雷云
      - 赛睿 Nahimic
      - 在上面的 `没有声音/音频/背景音乐/语音` 列表中列出的所有软件也有可能
    - 请先尝试卸载这些软件或终止与这些程序或驱动程序关联的进程。
    - 如果你无法确定是哪个程序引起的，可以试着关闭所有程序，并通过任务管理器结束计算机上所有非必要的进程，然后启动游戏看看问题有没有解决。
    - 有玩家告诉我们这个问题不会影响《第一章》、《第二章》，但是会影响《第三章》。
    - 如果你的日志里出现了 `Error: Cannot create FMOD::Sound instance for resource �t�, (Operation could not be performed because specified sound/DSP connection is not ready. )`，那么你很有可能遇到的就是这个问题。

2. 还有的玩家游戏路径中有 `#` 号，这肯定会导致游戏除了开场动画视频之外的所有声音无法播放。请确保游戏路径中没有包含任何特殊字符。
    - 如果你需要移动或更改 Steam 游戏的安装位置，请查看：[移动 Steam 安装文件和游戏](https://help.steampowered.com/zh-cn/faqs/view/4BD4-4528-6B2E-8327)。

3. 我们也收到过下述问题的报告，但可能只是巧合：
    - 其中一位用户通过清空注册表解决了这个问题，但请将此作为最后的修复措施。请参考本页面底部的 “注册表文件位置与如何清空” 了解如何执行操作。

#### **完全没有声音**

Windows 允许你为每个软件单独设置音量，这个功能可能会导致游戏没有声音。

- 右击桌面任务栏右下角的声音图标
- 点击 “打开声音设置”
- 找到 “高级声音选项”
- 点击 “应用音量和设备首选项”
- 请先启动游戏，然后检查游戏是否在此处被静音

### 玩《第八章：祭囃篇》时遇到 `Fatal error in gc: get thread context failed`

如果出现 `Fatal error in gc: get thread context failed` 错误，你可能需要卸载第三方杀毒软件 (这里指不由微软提供的，Windows 自带的也不包含在内)，或者在杀毒软件中解除阻止游戏或加入白名单。

众所周知，AVG 杀毒软件经常会误杀 (当然，某些国产杀毒软件也会)。

### 文字记录窗口或其他用户界面 (UI) 卡在屏幕上

即便是原版游戏，也可能遇到不少类似错误，比如说会出现有弹出菜单或是窗口无法关闭的情况。

特别是文字记录窗口，因为它能用鼠标滚轮打开，所以很容易会卡住。如果在点击什么按钮的时候不小心滑了下滚轮，可能就会同时弹出两个窗口，这样就会导致游戏出现问题。

目前我们也没有能解决这个问题的办法，唯一能做的就是在查看菜单的时候小心点别滑到滚轮，点击选项前等待画面淡入淡出结束，慢慢操作。

想了解更多信息，可以查看[这个 Github 问题 (英文)](https://github.com/07th-mod/higurashi-assembly/issues/60)。

### 无法存档/阅读 Tips 时无法点击保存按钮

请检查你是否正在阅读游戏的 Tips 部分。当你在阅读 Tips 部分的时候，[游戏将不允许进行存档/快速保存/读档/快读读档 (英文)](https://github.com/07th-mod/tatarigoroshi/issues/74#issuecomment-578990330)。

### Steam 成就无法解锁

先试试重启 Steam，因为有时候成就其实解锁了，只是没有正常显示出来。

之前，我们还遇到过其他类似的问题，所以如果重启了仍然无法正常解锁成就，请联系我们。

### 游戏启动时显示白屏，然后游戏崩溃了。崩溃日志里包含了 `lci_proxyumd32.dll caused a Breakpoint` 错误

如果你正在使用 USB 转 HDMI 转换器，或是加载了由 Fresco Logic 提供的驱动程序，则会导致这个问题。可以查看这个 [空洞骑士的帖子 (英文)](https://steamcommunity.com/app/367520/discussions/0/1700541698692038649/) 了解详细信息。

想解决这个问题，你需要在设备管理器中禁用 (或者卸载?) 驱动程序，位于`设备管理器`→`系统设备`→`FrescoLogic 代理显示适配器` / `FrescoLogic Proxy Display Adapter`，如下图所示：

![](https://cdn.iycx.top/higurashi/guide/device-manager-frescologic-driver.jpg)  

## 已知问题 - 手动安装

### 游戏崩溃

经常会有人下载了最新的语音补丁却忘记升级图像补丁。如果图像补丁是旧版的没有更新，那么当游戏运行到要打开一个不存在的文件时游戏就会崩溃。栗子：游戏尝试打开一张不存在于 `CG` 文件夹的图片。

### 游戏已经是最新版了，但是有些声音无法播放或者图像加载不出来！

发生这种问题时，首先清空下 `CompiledUpdateScripts` 文件夹。在游戏运行时，按下 **F10** 键，然后在 “存档和日志文件” 标签页下点击 “显示编译完毕的脚本”。确保你的游戏是最新版并且上述文件夹里是空的，然后重启游戏。正常情况下会没有反应一段时间。在更新完补丁之后请确保按这些步骤操作一次！

### 延迟和性能问题

如果游戏时不时卡顿或卡住，你应该检查一下这些问题：

- 关闭**所有**在后台运行的程序，即使那些看起来毫无关联、人畜无害的也要关闭。

- 如果游戏安装在机械硬盘里，请移动到固态硬盘。同时也可以检查下硬盘的状态是否正常，长时间的文件查找操作会造成加载资源时游戏卡住。

- 如果游戏之前可以运行的话，回想下最近电脑是否做过什么更改。比如说 Windows 系统更新、驱动更新、硬件上的改动、安装了新程序、更改了杀毒软件设置……

- 如果是播放语音时出现卡顿，[查看这个已知问题](#语音在游戏中播放时出现卡顿)

- 重启下电脑

- 虽然《寒蝉鸣泣之时》对电脑的配置要求并不高，但是配置太低的电脑或者太旧的系统可能性能和流畅度都不太高。请记住，这是一个 Unity 引擎的游戏，好的性能或是较新的硬件还是有必要的。

## 已知问题 - Linux

### [仅限 Wine 用户] 启动时不显示文字：缺少字体

有些使用 Wine 的用户 (不影响 Proton 或 Native) 报告了这个问题，他们在第一次启动游戏的时候看不到任何文字。

这个问题只会出现在所有的 Mod 菜单中 (例如 F10 菜单)，也就是菜单不会显示文字，并且不会影响到正常的游戏。

想解决这个问题，你需要将 `corefonts` 字体包安装到 wineprefix 中。各个系统安装 `corefonts` 的方式可能不同，所以你可能需要自行查找下安装方法。07th-mod 网站上提供了一些截图，可能会提供帮助，[点击查看 (英文)](https://07th-mod.com/wiki/Higurashi/FAQ/#wine-users-only-no-text-on-startup-missing-corefonts)。

## 其他问题

### 有仅语音补丁吗 (不包含来自 PS3 的素材)？

有的，但是它们可能不由官方发布 (鬼隐篇)、很久没更新 (棉流篇)，或是不再提供支持的 (所有章节)。所以不要向我们反馈任何有关仅语音补丁的问题。要知道这个补丁不支持很多特性，最完整的版本还是完整高清语音补丁。你可以在[这个页面 (英文)](https://07th-mod.com/wiki/Higurashi/Higurashi-Part-1.1---Voices-only-Patch/)找到仅语音补丁。

### 什么是 “OST 重制” 选项？

原声音乐重制是在四月补丁之前就开始的一个项目，包含对几首原版音乐 (2019 年之前发布) 的民间重制，[点击这里去 BandCamp 试听](https://radiataalice.bandcamp.com/album/hinamizawa-syndrome-vol-1)

这个补丁更多地是作为子项目来开发，是为了用现代乐器改进最初的 1999 年版的 midi 配乐，并修复 Steam 版配乐中被剪辑和音频失真问题。

## 存档文件位置

::: warning

如果你想删除或修改存档，**请先禁用 Steam 云同步**，因为它会撤销你所做的所有更改。

:::

### 自动查找存档位置

进行游戏时，按下 **F10** 键，在 “存档文件与日志文件” 标签页下点击 “打开存档目录”。

### 手动查找存档位置

请选择适合你操作系统的指南来寻找存档：

:::: tabs

@tab Windows

存档会存储在：
`C:\Users\[你的用户名]\AppData\Roaming\MangaGamer\higurashi01`

捷径：复制并粘贴这个地址到资源管理器的地址栏中打开：`%AppData%/Mangagamer`

@tab Linux

- 对于《第一章》和《第二章》，存档数据被分别存储在如下两个长得差不多的目录里：
    - `~/.config/unity3d/MangaGamer/Higurashi When they Cry - Ch.1 Onikakushi`
    - `~/.config/unity3d/Mangagamer/Higurashi When They Cry _ Ch_1 Onikakushi`
  (注意：这里目录符号换成下划线了)

- 对于《第三章》到《第八章》，存档数据都被存储在同一个目录里：
    `~/.config/unity3d/MangaGamer/Higurashi When they Cry - Ch.3 Tatarigoroshi`

@tab MacOS

存档存储在：

`~/Library/Application Support/unity.MangaGamer.Higurashi When They Cry - Ch.1 Onikakushi/`

@tab Proton / Wine

使用 Proton 的时候，存档被存储在 Proton 的 “Prefix” (`pfx` 文件夹) 中。在 Prefix 目录里，它们的目录结构与在 Windows 系统类似 (可能会使用 `Mangagamer`  文件夹，小写的 g)

这个文件夹的完整路径是：`.steam/steam/steamapps/compatdata/[游戏 ID]/pfx/drive_c/users/steamuser/AppData/Roaming/Mangagamer/higurashi[章节编号]`。

`游戏 ID` 可以通过访问 Steam 商店页面，然后查看链接最后的几位数字得到。例如《第一章：鬼隐篇》的 ID 就是 `310360` (https://store.steampowered.com/app/310360)。

::::

在文件夹里会包含：

- 一个存储不是特定存档的信息的文件 `global.dat` (注意：一些信息会存储在注册表中，见下文)
- 手动存档的文件，比如 `save000.dat`
- 快速存档的文件，比如 `qsave0.dat`
- 与每个存档相关联的截图，比如 `save000.png` 和 `qsave0.png`

要清空你的存档数据，先把这些文件备份一下，然后**禁用 Steam 云同步**，最后再全部删除。**Steam 会把存档同步回来**，所以请确保暂时禁用 Steam 云同步，否则存档会重新出现，或是被 Steam 覆盖掉。

游戏还在 PlayerPrefs 中存储了一些与分辨率和全屏幕相关的附加设置，请阅读 [清理 Unity PlayerPrefs](uninstall.md#%E6%B8%85%E7%90%86-unity-playerprefs) 了解更多信息。

## 日志文件位置

::: tip

对于遇到游戏启动或是崩溃问题的玩家，请按以下方式获取**游戏日志文件**。

:::

在 Windows 系统上，文件名为 **output_log.txt**，在 Linux 或 MacOS 系统上，文件名为 **Player.log**。

- 适用于所有系统：打开游戏之后，按 **F10** 键，然后点击 “疑难解答” 标签页，然后在 “存档文件与日志文件” 分类下面点击 “打开 output_log.txt / Player.log 目录” 按钮。

- Windows 系统 (**output_log.txt**)：
    - 对于《第一章》至《第七章》，日志文件位于游戏目录中 `HigurashiEp0X_Data` 文件夹的根目录下。例如 `C:\games\Steam\steamapps\common\Higurashi When They Cry\HigurashiEp01_Data\output_log.txt`。
    - 对于《第八章》，日志文件位于 `%appdata%/../LocalLow/Mangagamer/Higurashi When They Cry - Ch.8 Matsuribayashi`。完整路径类似于 `C:\Users\[用户名]\AppData\LocalLow\MangaGamer\Higurashi When They Cry - Ch.8 Matsuribayashi\output_log.txt`

- MacOS 系统 (**Player.log**)：`/Users/<用户名>/Library/Logs/Unity/Player.log`。你可以打开 `访达`，按下快捷键 `Shift-Command-G`，然后粘贴这个地址：`~/Library/Logs/Unity`。

- Linux 系统 (**Player.log**)：`~/.config/unity3d/MangaGamer/Higurashi When They Cry - Ch.5 Meakashi/Player.log` (这是《第五章》的文件位置)。

## 玩家设置文件位置与清理

见 [清理 Unity PlayerPrefs](uninstall.md#%E6%B8%85%E7%90%86-unity-playerprefs)

## 我有关于主机版澪尽篇的问题

见 [澪尽篇常见问题解答 (英文)](https://07th-mod.com/wiki/Higurashi/MiotsukushiFAQ/)

## 我有关于音乐和音效变更/四月更新的问题

见 [背景音乐与音效常见问题解答](faq-bgm-se.md)
