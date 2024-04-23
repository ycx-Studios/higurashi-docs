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

本文只介绍如何从 07th-mod 官网下载并安装高清语音补丁，并不包含本汉化补丁的安装教程。

如果你想安装本汉化补丁，请查看[补丁列表](../../patch/list.md)。

:::

::: warning 多当心旧的存档！

由旧版本补丁或是原版游戏保存的存档可能无法与新版的补丁正常工作。虽然有时候看起来可能很正常，但加载后最终肯定会遇到问题。我们的建议是从头开始游戏，或者使用 “章节跳跃” 功能跳转到之前玩到的章节。也可以通过按 `Ctrl` 键跳过阅读过的文本。

:::

::: info 如何解压 .7z 压缩包？

- Windows：下载 [7-zip](https://7-zip.org/)、[Bandizip](https://www.bandisoft.com/bandizip/)、[WinRAR](https://www.win-rar.com/start.html?&L=7)等解压软件

- Linux：在包管理器中安装 `p7zip`

- Mac：下载 [Keka](https://www.keka.io/zh-cn/)

:::
## 准备工作
[点此打开 07th-mod 官网](https://07th-mod.com)

![](https://cdn.iycx.top/higurashi/guide/07th-mod-main.jpg)  

点击 `INSTALL THE PATCH`。

页面跳转后，在左侧找到 `Higurashi` 的标签并点击。

![](https://cdn.iycx.top/higurashi/guide/07th-mod-wiki.jpg)  

子标签从上到下分别为 `介绍`、`自动安装器`、`手动安装`、`快捷键与设置`、`仅语音补丁`、`常见问题解答` (包含 `Linux 系统与 Steam Deck 部分`、`Linux 系统与 Steam Deck 部分` 以及 `澪尽篇部分`)、`获得支持`、`卸载 Mod 及游戏`。

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

----

#### 复现问题

这个问题会在以下情况被复现：
- 从全屏幕模式切到窗口模式
- 游戏以窗口模式启动
- 拖动游戏窗口

如果始终以全屏幕模式进行游戏，那应该都不会出现这个问题。

这个问题似乎只会影响到第三章到第六章，尽管理论上在第一章和第二章也会出现，甚至在原版游戏上也会发生这个问题。

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

    - Steam 用户：打开 Steam 游戏库，从列表中选择游戏，右键点击`游戏`→`管理`→`浏览本地文件`。

2. 在`下载`区域的表格中，你需要下载**每种类型的文件**各一个。也就是说，你需要下载以下文件：

    - Patch (补丁主程序)

    - Graphics patch (图像资源文件)

    - Voices (语音文件)

    - BGM & SE (背景音乐和音效文件)

    - Movies (影片文件, 根据自己的系统选择一个)

    - UI Mod (用户界面资源文件, 根据自己的系统和游戏版本选择一个)

    - Update (其他修复文件)

    - 仅主机版追加篇章 (如凭落篇、澪尽篇等)：System Files (根据自己的系统选择一个)

3. 进入 `HigurashiEp0X_Data/StreamingAssets` 目录 (`X`是游戏篇章的编号)，并**删除** `CG` 和 `CGAlt` 文件夹。

    - 这不是必要的步骤，但为了节省空间并避免出问题我们建议这样做。

    - **汉化组提示**：说白了就是不用删，除非你的硬盘空间不够，否则在后面安装补丁的时候直接**覆盖文件**即可。

4. 查看`下载`区域的表格，并按照如下方式操作：

    - 将**不带特殊符号**的所有压缩文件解压到游戏根目录。

    - **汉化组提示**：

      - 打开压缩包，正常你会看到 `HigurashiEp0X_Data` 文件夹，把它**替换到根目录**即可。**如果你看到的不是这个文件夹，请看第三点。**

      - 一般带有表情符号的只有 Patch、BGM & SE、Update 三个压缩包。**除了出题篇的四章外，其他章节可能还有其他需要额外覆盖的文件，请自行检查下表格。**

      - BGM & SE 需要解压到 `HigurashiEp0X_Data/StreamingAssets` 下面，而**不是游戏根目录**。

      - Patch 和 Update 需要在**解压完所有压缩包之后最后安装**，并且正常的话会提示**有文件需要覆盖，选择替换即可。**

5. 在确定游戏可以运行后，删除所有下载的压缩包。

@tab Mac OSX

1. 找到并打开游戏根目录

    - Steam 用户：打开 Steam 游戏库，从列表中选择游戏，右键点击`游戏`→`管理`→`浏览本地文件`。

    - 如果你只看到了叫做 `HigurashiEp0X` (`X` 是游戏篇章的编号)，右击它，然后点击 `显示包内容 (Show Package Contents)` 来打开 `Contents` 文件夹。

    - 游戏文件夹 (`Contents` 文件夹) 应该包括 `Resources`、`MacOS`、`Plugins`、`Frameworks` 以及其它文件夹。我们只会修改 `Resources` 文件夹。

2. 在`下载`区域的表格中，你需要下载**每种类型的文件**各一个。也就是说，你需要下载以下文件：

    - Patch (补丁主程序)

    - Graphics patch (图像资源文件)

    - Voices (语音文件)

    - BGM & SE (背景音乐和音效文件)

    - Movies (影片文件, 根据自己的系统选择一个)

    - UI Mod (用户界面资源文件, 根据自己的系统和游戏版本选择一个)

    - Update (其他修复文件)

    - 仅主机版追加篇章 (如凭落篇、澪尽篇等)：System Files (根据自己的系统选择一个)

3. 进入 `Resources/Data/StreamingAssets` 文件夹，并**删除** `CG` 和 `CGAlt` 文件夹。

    - 这不是必要的步骤，但为了节省空间并避免出问题我们建议这样做。

    - **汉化组提示**：说白了就是不用删，除非你的硬盘空间不够，否则在后面安装补丁的时候直接**覆盖文件**即可。

4. 返回 `Resources/Data` 文件夹，用以下方法解压所有下载的文件：

    - 将**不带特殊符号**的所有压缩文件解压到 `Resources/Data` (与游戏可执行文件 `.exe` 同级)，**BGM & SE 的压缩文件先不操作**。

    - Patch 和 Update 需要在**解压完所有压缩包之后，BGM&SE 的压缩包之前解压**，并且正常的话会提示**有文件需要覆盖，选择替换即可。**
    
    - **汉化组提示**：打开压缩包，正常你会看到 `HigurashiEp0X_Data` 文件夹。把它**解压到 `Resources/Data`** 即可。

    - 一般带有表情符号的只有 Patch、BGM & SE、Update 三个压缩包。没有额外说明的话，都是解压到 `Resources/Data` 目录下。**除了出题篇的四章外，其他章节可能还有其他需要额外覆盖的文件，请自行检查下表格。**

5. 完成后，应该会生成一个 `HigurashiEp0X_Data` 文件夹 (`X` 是游戏篇章的编号)，完整路径应该是 `Resources/Data/HigurashiEp0X_Data`。

6. 在 `Resources/Data` 文件夹下打开终端窗口，输入 `rsync -avP HigurashiEp*/* .` 并按下回车。等待文件复制完成。如果不知道如何操作，可以查看下方的教程，或者访问[这篇文章 (英文)](https://stackoverflow.com/a/7054045)。

::: details 启用 “在当前位置打开终端” 功能并执行命令的图文教程

1. 进入 `键盘快捷键` 的 `服务` 分类，此处有两种操作方法：

- 点击位于屏幕顶部的 “访达” 菜单栏，选择 `服务`→`服务设置…`。  

- 进入 `系统设置`，找到在菜单栏最底部的 `键盘`，选择 `键盘快捷键`，然后再选择 `服务`。

2. 在 `服务` 窗口中展开 `文件和文件夹`，勾选上 `新建位于文件夹位置的终端标签页/窗口` (可以只勾选其中一个，也可以都勾选上)，然后点击完成。

![](https://cdn.iycx.top/higurashi/guide/install-mac-1.png)  

3. 回到 `Resources/Data` 文件夹，右键点击 `Data` 文件夹，选择 `服务`→`新建位于文件夹位置的终端标签页/窗口` (两个选项都可以)。

![](https://cdn.iycx.top/higurashi/guide/install-mac-2.png)  

4. 打开的终端应该会显示 `用户名@主机名 Data % █`，输入 `rsync -avP HigurashiEp*/* .` 并按下回车键，等待命令执行结束即可。

:::

7. 解压 BGM & SE 压缩包到 `Resources/Data/StreamingAssets` 文件夹下。

8. 在确定游戏可以运行后，删除所有下载的压缩包以及 `HigurashiEp0X_Data` 文件夹。

::::

## 安装仅语音补丁

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

## 下载相关

由于 07th-mod 网站的服务器架设在国外，在国内下载速度并不是很理想，所以我们做了所有文件的镜像。

虽然不能保证文件及时更新，但是我们会保证与我们汉化补丁的版本保持一致。

可以在导航栏的 `下载中心` 处找到链接，能在里面找到所有 07th-mod 所需的安装文件以及汉化补丁安装包。

**下载站是纯公益提供，是为了让玩家能有好的文件下载体验，希望大家不要滥用下载。**

**如果可以的话，我们仍然希望可以保存到自己的网盘，用自己的账号下载。**

另外，如果你有好的下载分流方案，可以联系我们，在这里十分感谢。