---
icon: file-arrow-down
title: 安装指南
author: Lancher, ycx
category: 使用指南
tag:
  - 07th-mod
  - 安装指南
article: false
order: 2
---

::: tip 本文译自 07th-mod 官网

如需阅读原文，请点击[这里](https://07th-mod.com/wiki/Higurashi/Manual-Installation/)。

:::

::: caution 阅读前请注意！

本文只介绍如何从 07th-mod 官网下载并安装高清语音补丁或仅语音补丁，并不包含汉化补丁的安装教程。

如果你想安装我们的汉化补丁，请查看[补丁列表](../../patch/list.md)。

:::

::: warning 注意存档的兼容性！

打了旧版本补丁或是由原版游戏保存的存档没法兼容打了新版补丁的游戏。虽然加载之后大多数情况下看着还好，但玩着玩着最后肯定是会遇到问题的。我们的建议是从头开始游戏，或者使用 “章节跳跃” 功能跳转到之前玩到的章节。也可以通过按 `Ctrl` 键跳过阅读过的文本。

:::

::: info 如何解压 .7z 压缩包？

- Windows：下载 [7-zip](https://7-zip.org/)、[Bandizip](https://www.bandisoft.com/bandizip/)、[WinRAR](https://www.win-rar.com/start.html?&L=7) 等解压软件

- Linux：使用包管理器安装 `p7zip`

- Mac：下载 [Keka](https://www.keka.io/zh-cn/)

:::

::: details 点击展开视频教程

<BiliBili bvid="BV1a4421U7BV" time="420" />

:::

## 准备工作
打开 [07th-mod 官网](https://07th-mod.com)。

![](https://cdn.iycx.top/higurashi/guide/07th-mod-main.jpg)  

点击 `INSTALL THE PATCH`。页面跳转后，在左侧的导航栏找到 `Higurashi` 标签并点击展开。

![](https://cdn.iycx.top/higurashi/guide/07th-mod-wiki.jpg)  

子标签从上到下分别为 `介绍`、`自动安装器`、`手动安装`、`快捷键与设置`、`仅语音补丁`、`常见问题解答` (包含 `Linux 系统与 Steam Deck`、`背景音乐与音效` 以及 `澪尽篇`)、`获得支持`、`卸载 Mod 及游戏`。

![](https://cdn.iycx.top/higurashi/guide/07th-mod-higurashi.jpg)  

由于 07th-mod 网站的服务器架设在国外，在国内使用自动安装器的体验不佳，且安装器容易被杀毒软件误删，因此我们推荐使用手动安装 (Manual Installation)，本文也将只介绍手动安装的方法。

## 安装完整高清语音补丁

请选择 **手动安装 (Manual Installation)** 标签，滚动到网页的下方可以找到各个文件的下载地址。

![](https://cdn.iycx.top/higurashi/guide/07th-mod-full-patch.jpg)  

以下分别对应了 Windows/Linux 和 Mac OSX 的安装教程。

:::: tabs

@tab Windows/Linux

::: caution 注意

**我们已经在 2022 年 11 月 13 日的更新中修复了这个问题。如果在最新版的补丁上仍然会崩溃，请联系我们。**

::: details [已修复] Linux 用户：使用窗口模式会导致游戏或 GNOME/MATE 桌面崩溃

#### 复现问题

这个问题会在以下情况被复现：
- 从全屏幕模式切到窗口模式
- 游戏以窗口模式启动
- 拖动游戏窗口

如果始终以全屏幕模式进行游戏，那应该都不会出现这个问题。

这个问题似乎只会影响到《第三章》到《第六章》，尽管理论上在《第一章》和《第二章》也会出现，甚至在原版游戏上也会发生这个问题。

不是所有的桌面环境都会出现问题，不过已知 GNOME 桌面环境会受到影响。

#### 问题症状

当错误发生时，游戏窗口将会变得非常大或者非常小，并且整个屏幕将变为黑色或蓝色。

错误发生之后，游戏可能会卡死、崩溃，甚至会让你的桌面环境崩溃。

#### 引发问题的原因

这个问题是由于 Unity 引擎 ≤ `5.5.3p3` 版本的调整窗口大小函数损坏，此函数会发送未初始化的栈数据给 `XSetWMNormalHints`。

想了解更多信息，请阅读以下文章：

- [Merged PR: Fix Unity killing window managers with insane window size (英文)](https://github.com/07th-mod/higurashi-assembly/pull/93)

- [Draft PR: Linux gnome crash workaround (英文)](https://github.com/07th-mod/higurashi-assembly/pull/91)

- [Issue: Linux GNOME desktop environment crash / corrupted configuration file issue (英文)](https://github.com/07th-mod/higurashi-patch-compiler/issues/58)

:::

1. 找到并打开游戏根目录

    - Steam 用户：打开 Steam 游戏库，从列表中选择游戏，`右键点击游戏`→`管理`→`浏览本地文件`。

2. 在 `下载 (Download)` 区域的表格中，你需要下载**每种类型的文件**各一个。也就是说，你需要下载以下文件：

    - Patch (补丁主程序)

    - Base Assets (基本资源包)

    - UI Mod (用户界面资源补丁，根据自己的系统和游戏版本选择一个)

    - System Files/Compatability Pack (系统文件补丁/兼容文件包，只有在需要时下载)

    - 对于《第二章》至《第四章》，可以根据需要安装 “可选项”

3. 进入 `HigurashiEp0X_Data/StreamingAssets` 目录 (`X` 是游戏篇章的编号)，并**删除** `CG` 和 `CGAlt` 文件夹。

    - 这不是必要的步骤，但为了节省空间并避免出问题我们建议这样做。

    - **汉化组提示**：说白了就是不用删，除非你的硬盘空间不够，否则在后面安装补丁的时候直接**覆盖文件**即可。

4. 查看 `下载 (Download)` 区域的表格，并按照如下方式操作：

    - 将**不带特殊符号**的所有压缩文件解压到游戏根目录。

    - **汉化组提示**：

      - 打开压缩包，正常你会看到 `HigurashiEp0X_Data` 文件夹，把它**替换到根目录并选择覆盖**即可。

      - Patch 和 Update 压缩包需要**在最后安装**，并且正常的话会提示**有文件需要覆盖**，选择**替换**即可。

      - 一般带有表情符号的只有 Patch 和 Update 压缩包或是除 Steam 平台以外的补丁包或是兼容包。**还请自行检查下表格，查看是否有额外需要注意的内容。**

5. 在确定游戏可以运行后，删除所有下载的压缩包。

@tab Mac OSX

1. 找到并打开游戏根目录

    - Steam 用户：打开 Steam 游戏库，从列表中选择游戏，`右键点击游戏`→`管理`→`浏览本地文件`。

    - 如果你只看到了叫做 `HigurashiEp0X` (`X` 是游戏篇章的编号)，右击它，然后点击 `显示包内容 (Show Package Contents)` 来打开 `Contents` 文件夹。

    - 游戏文件夹 (`Contents` 文件夹) 应该包括 `Resources`、`MacOS`、`Plugins`、`Frameworks` 以及其它文件夹。我们只会修改 `Resources` 文件夹。

2. 在 `下载 (Download)` 区域的表格中，你需要下载**每种类型的文件**各一个。也就是说，你需要下载以下文件：

    - Patch (补丁主程序)

    - Base Assets (基本资源包)

    - UI Mod (用户界面资源补丁，根据自己的系统和游戏版本选择一个)

    - System Files/Compatability Pack (系统文件补丁/兼容文件包，只有在需要时下载)

    - 对于《第二章》至《第四章》，可以根据需要安装 “可选项”

3. 进入 `Resources/Data/StreamingAssets` 文件夹，并**删除** `CG` 和 `CGAlt` 文件夹。

    - 这不是必要的步骤，但为了节省空间并避免出问题我们建议这样做。

    - **汉化组提示**：说白了就是不用删，除非你的硬盘空间不够，否则在后面安装补丁的时候直接**覆盖文件**即可。

4. 返回 `Resources/Data` 文件夹，用以下方法解压所有下载的文件：

    - 将**不带特殊符号**的所有压缩文件解压到 `Resources/Data` (与游戏可执行文件 `.exe` 同级)。

    - Patch 和 Update 压缩包需要**在最后解压**，并且正常的话会提示**有文件需要覆盖**，选择**替换**即可。

    - 一般带有表情符号的只有 Patch 和 Update 压缩包或是除 Steam 平台以外的补丁包或是兼容包。没有额外说明的话，都是解压到 `Resources/Data` 目录下。**还请自行检查下表格，查看是否有额外需要注意的内容。**

5. 完成后，应该会生成一个 `HigurashiEp0X_Data` 文件夹 (`X` 是游戏篇章的编号)，完整路径应该是 `Resources/Data/HigurashiEp0X_Data`。

6. 在 `Resources/Data` 文件夹下打开终端窗口，输入 `rsync -avP HigurashiEp*/* .` 并按下回车。等待文件复制完成。如果在右键菜单中找不到选项或者不知道如何操作，可以查看[此处的帮助](../patch/faq.md#macos-%E5%8F%B3%E9%94%AE%E6%B2%A1%E6%9C%89-%E5%9C%A8%E5%BD%93%E5%89%8D%E4%BD%8D%E7%BD%AE%E6%89%93%E5%BC%80%E7%BB%88%E7%AB%AF-%E7%9A%84%E5%8A%9F%E8%83%BD)。

7. 解压 BGM & SE 压缩包到 `Resources/Data/StreamingAssets` 文件夹下。

8. 在确定游戏可以运行后，删除所有下载的压缩包以及 `HigurashiEp0X_Data` 文件夹。

::::

## 安装仅语音补丁 (不推荐)

::: caution 我们不推荐安装仅语音补丁

仅语音补丁提供了最小的文件修改，即仅为原版游戏添加了语音的支持。

如果你遇到了问题，07th-mod 可能不会为你提供帮助。

不过如果你遇到了有关于汉化补丁的问题，汉化组仍然可以为你提供支持。

:::

请选择 **仅语音补丁 (Voice-only Patch)** 标签。

找到下载页面。

![](https://cdn.iycx.top/higurashi/guide/07th-mod-voice-only-patch.jpg)  

Patch 和 Voices 必须下载，最后一个 HD Ryukishi Sprites 是高清龙绘补丁，可选择下载。

下载完毕后，可按照上方的安装教程安装。