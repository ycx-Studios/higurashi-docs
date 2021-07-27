---
icon: page
title: 07th-mod 补丁安装指南
author: Lancher
category: 使用指南
tag:
  - 安装指南
article: false
star: 4
---

::: danger 阅读前请注意！
本文只介绍如何从 07th-mod 官网下载并安装高清语音补丁，并不包含本汉化补丁的安装教程。

如果你想安装本汉化补丁，请[点此](../patch/list.md)。
:::

::: tip 如何解压 .7z 压缩包？
·Windows：下载 7-zip、Bandizip、WinRAR等软件

·Linux：在包管理器中安装 `p7zip`

·Mac OSX：下载 Keka
:::
## 准备工作
[点此打开07th-mod官网](https://07th-mod.com)

![](https://cdn.iycx.top/higurashi/guide/1.jpg)  

点击 `INSTALL THE PATCH`。

页面跳转后，在左侧找到 `Higurashi` 的标签并点击。

![](https://cdn.iycx.top/higurashi/guide/2.jpg)  

子标签从上到下分别为 `介绍`、`自动安装`、`手动安装`、`快捷键和设置`、`仅语音包`、`常见问题解答`、`获得支持`、`卸载Mod及游戏`。

![](https://cdn.iycx.top/higurashi/guide/3.jpg)  

由于 07th-mod 服务器设置在国外，自动安装速度较慢，且安装工具容易被杀毒软件误删，因此我们推荐使用手动安装 (Manual installation)，下面也只介绍手动安装的方法。

## 完整高清语音补丁

请选择 Manual installation 标签。在网页底端可找到下载地址。

![](https://cdn.iycx.top/higurashi/guide/4.jpg)  


以下分别对应了 Windows/Linux 和 Mac OSX 的安装教程。

::::: tabs

:::: tab Windows/Linux

::: danger Linux 用户注意：

GNOME/MATE 桌面 (如 Ubuntu、Fedora 等) 会导致游戏崩溃。

如果你遇到了这个问题，可以尝试安装 XFCE 桌面。

:::


1. 找到并打开游戏根目录

    - Steam 用户：打开 Steam 游戏库，从列表中选择游戏，右击->管理->浏览游戏文件。

2. 在下载栏，**每种类型的文件各下载一个**。也就是说，你需要下载以下文件：
    - Patch

    - Graphics patch

    - Voices

    - BGM & SE

    - Movies (根据自己的系统选择一个)

    - UI Mod (根据自己的系统和游戏版本选择一个)

    - Update

    - 仅主机版追加篇章 (如凭落篇、澪尽篇等)：System Files (根据自己的系统选择一个)

3. 下载完上述所有文件后，把所有压缩包放在游戏根目录 (.exe 所在目录)，**除了 BGM & SE 压缩包**。

4. 进入 `HigurashiEp0X_Data/StreamingAssets` 目录 (`X`是游戏篇章的编号) 并**删除** `CG` 和 `CGAlt` 文件夹。

    - 这不是必要的步骤，但为了节省空间并避免出问题我们建议这样做。

5. 将**除了** `XX.Voice.and.Graphics.Patch.XX.zip` 压缩包外的所有压缩包解压到游戏根目录。

    - 在其余压缩包全部解压完毕后，解压剩余的压缩包并覆盖文件。

6. 解压 BGM & SE 压缩包到 `HigurashiEp0X_Data/StreamingAssets` 文件夹下。

7. 在确定游戏可以运行后，删除所有下载的压缩包。

::::


:::: tab "Mac OSX"

1. 找到并打开游戏根目录

    - Steam 用户：打开 Steam 游戏库，从列表中选择游戏，右击->管理->浏览游戏文件

    - 如果你刚好看到了叫做 `HigurashiEp0X` (`X` 是游戏篇章的编号)，右击它，然后点击 `show package contents` 来打开 `Contents` 文件夹

    - 游戏文件夹 (`Contents` 文件夹) 应该包括 `Resources`、`MacOS`、`Plugins`、`Frameworks` 以及其它文件夹。我们只操作 `Resources` 文件夹

2. 在下载栏，**每种类型的文件各下载一个**。也就是说，你需要下载以下文件：
    - Patch

    - Graphics patch

    - Voices

    - BGM & SE

    - Movies (根据自己的系统选择一个)

    - UI Mod (根据自己的系统和游戏版本选择一个)

    - Update

    - 仅主机版追加篇章 (如凭落篇、澪尽篇等)：System Files (根据自己的系统选择一个)

3. 下载完上述所有文件后，把所有压缩包放在 `Resources/Data` 文件夹，**除了 BGM & SE 压缩包**。

4. 进入 `Resources/Data/StreamingAssets` 文件夹并**删除** `CG` 和 `CGAlt` 文件夹。

    - 这不是必要的步骤，但为了节省空间并避免出问题我们建议这样做。

5. 返回 `Resources/Data` 文件夹，用以下方法解压所有下载的文件：
    - 将**除了** `XX.Voice.and.Graphics.Patch.XX.zip` 压缩包外的所有压缩包全部解压

    - 上述文件解压完毕后解压 `XX.Voice.and.Graphics.Patch.XX.zip`

    - 如有提示请选择全部覆盖

    - 完成后应该会出现一个 `HigurashiEp0X_Data` 文件夹 (`X` 是游戏篇章的编号)。完整路径应该是 `Resources/Data/HigurashiEp0X_Data`

6. 在 `Resources/Data` 文件夹下打开命令行，输入 `rsync -avP HigurashiEp*/* .` 并回车。等待文件复制完成。

6. 解压 BGM & SE 压缩包到 `Resources/Data/StreamingAssets` 文件夹下。

7. 在确定游戏可以运行后，删除所有下载的压缩包以及 `HigurashiEp0X_Data` 文件夹。
::::

:::::

## 仅语音补丁

选择 Voice-only Patch 标签。

找到下载页面。

![](https://cdn.iycx.top/higurashi/guide/5.jpg)  

前两个必须下载，最后一个是高清龙绘补丁，可选择下载。

下载完毕后，按照以下步骤进行安装。

1. 找到并打开游戏根目录

    - Steam 用户：打开 Steam 游戏库，从列表中选择游戏，右击->管理->浏览游戏文件。

2. 下载完上述所有文件后，把所有压缩包放在游戏根目录 (.exe 所在目录)。

3. 将所有压缩包解压到游戏根目录，覆盖文件。

4. 在确定游戏可以运行后，删除所有下载的压缩包。










