---
icon: screwdriver-wrench
title: 游戏及 Mod 卸载指南
author: Lancher, ycx
category: 使用指南
tag:
  - 07th-mod
  - 安装指南
article: false
order: 7
---

::: tip 本文译自 07th-mod 官网

如需阅读原文，请点击[这里](https://07th-mod.com/wiki/Higurashi/Uninstall/)。

:::

# 游戏及 Mod 卸载指南

如果你想完全卸载寒蝉 (想重装，或是已经通关了)，请遵循以下指引。注意，**从 Steam 卸载游戏不会删除 Mod 文件**。所以要遵循以下指引从电脑中完全删除 Mod 文件。

我们现在不会提供任何单独卸载 Mod 的方法，**下面的步骤会把 Mod 和游戏一起卸载掉**。

## 卸载游戏和 Mod 文件

1. 按照以下步骤，找到游戏安装目录，**先找到位置，后面再操作**。
    - Steam 用户
        - 打开 Steam
        - 右击游戏，然后点击`管理`
        - 点击`浏览本地文件`
    - GOG 和 MangaGamer 用户
        - 请找到安装游戏时选择的目录，或者通过快捷方式找到它

2. 用 Steam/GOG/MangaGamer 启动器正常地卸载游戏

3. 手动删掉刚才找到的游戏文件夹。这样所有 Mod 文件都会被删除

## 删除存档

1. **禁用 Steam 云同步/GOG 云存档**，否则你的存档会神奇般地恢复。

2. 进入 [常见问题页面的 “存档位置”](faq.md/#存档文件位置) 中提到的文件夹。

3. 删掉整个文件夹 (如果只是重装的话，请保留 `global.dat` 文件)

## 清除 Steam 自定义背景/徽标/封面图

有两种方式可以删除 Steam 自定义背景/徽标/封面图

:::: tabs

@tab 方法一：从 Steam 中卸载

1. 打开 Steam

2. 进入想要还原封面图的游戏界面

3. 右键点击要重置的内容 (例如游戏最上面的封面图)

4. 在右击菜单中，点击 “清除自定义背景” 和 “清除自定义徽标”

@tab 方法二：删除文件 (进阶)

1. 进入 `..\Steam\userdata\[用户ID]\config\grid` 文件夹。

    - 每个在此电脑登陆过 Steam 的用户都会有一个 `用户 ID` 的子文件夹 (`用户 ID` 是一串数字)
    - 反复进入每个 `用户 ID` 子文件夹直到找到你自己的文件夹

2. 删除新样式的图片与和名称相关联的 .json 文件。

    - 不推荐删除整个文件夹，这样会清除你以前添加的所有自定义封面图

::::

## 清理 Unity PlayerPrefs

游戏会将一些玩家自定义设置，例如屏幕分辨率和全屏/窗口化的设置存储起来。

如果遇到一些分辨率或是全屏问题，你可能需要修改或删除这些设置来修复某些问题。

**请选择适合你操作系统的指引来找到 PlayerPrefs：**

:::: tabs

@tab Windows

Windows 会将这些 PlayerPrefs 存储到注册表的 `Computer\HKEY_CURRENT_USER\Software\Mangagamer\Higurashi When They Cry - Ch.1 Onikakushi` (这里用第一章作为示例)。请按照以下步骤清空所有关于寒蝉鸣泣之时游戏的注册表设置：

1. 下载这个文件 [delete_higurashi_registry.reg](https://07th-mod.com/wiki/files/delete_higurashi_registry.reg)

2. 双击运行 `delete_higurashi_registry.reg`

3. 在警告框中点击 “运行”

如果你担心 .reg 文件有问题，就在文本编辑器中打开并检查一遍。这个文件只是列出了各个游戏的注册表文件夹，并用前缀 `-` 来标记删除该条目。你也可以使用注册表编辑器 `regedit` 进行手动删除。

@tab Linux

::: warning

寒蝉鸣泣之时可能会使用 `Manga**g**amer` (小写的 g) 而不是 `MangaGamer` (大写的 g) 作为文件夹。如果你找不到 PlayerPrefs 的话，请都找找这两个文件夹是否存在。

:::

Linux 的 PlayerPrefs 存储在 `~/.config/unity3d/MangaGamer/[GAMENAME]/prefs` 中。

例如，第一章的设置文件位置在 `~/.config/unity3d/MangaGamer/Higurashi When They Cry - Ch.1 Onikakushi/prefs`。

删除这个文件或者整个文件夹就可以清除设置。

@tab MacOS

::: warning

以下内容尚未得到验证，因为 07th-mod 没有 MacOS 系统可供测试。如果你有的话，可以向他们提供反馈。

:::

MacOS 的 PlayerPrefs 存储在 `~/Library/Preferences` 目录的 `.plist` 文件里。

这个文件对于早期发售的游戏叫做 `unity.Mangagamer.[GAMENAME].plist`，较晚发布的游戏叫做 `com.Mangagamer.[GAMENAME].plist`。

删除这个文件就可以清除设置。

@tab Proton / Wine

::: warning Steam 云同步

不是很确定是否准确，在使用 Proton 的时候，PlayerPrefs 文件可能不会同步到云。如果按照下面的方式操作没有效果的话，可以试试清理或关闭 Steam 云同步。

:::

使用 Proton 的时候，PlayerPrefs 存储在 `user.reg` 文件中。

这个文件位于 `.steam/steam/steamapps/compatdata/[GAME_ID]/pfx/user.reg`。`GAME_ID` 可以通过访问 Steam 商店页面，然后查看链接最后的几位数字得到。例如《第一章：鬼隐篇》的 ID 就是 `310360` (https://store.steampowered.com/app/310360)。

你也可以删除 Proton 的 Prefix 文件来清理 PlayerPrefs，但注意这么做也会把游戏的存档清空。

请注意，通过 Steam 卸载游戏会删除 Prefix 文件。

::::