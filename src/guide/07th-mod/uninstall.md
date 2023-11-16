---
icon: screwdriver-wrench
title: 游戏及 Mod 卸载指南
author: Lancher
category: 使用指南
tag:
  - 07th-mod
  - 安装指南
article: false
---

::: tip 本文译自 07th-mod 官网

如需阅读原文，请点击[这里](https://07th-mod.com/wiki/Higurashi/Uninstall/)。

:::

# 游戏及 Mod 卸载指南

如果你想完全卸载寒蝉(为了重装，或者已经玩通了)，请遵循以下指引。注意**从 Steam 卸载游戏不会删除 Mod 文件**。所以要遵循以下指引从电脑中完全删除 Mod 文件。

我们现在不会提供任何只卸载 Mod 的方法，**下面的过程会把 Mod 和游戏一起卸载掉**。

## 卸载游戏和 Mod 文件

1. 按照以下步骤，找到游戏安装目录，**暂时记住它**。
    - Steam 用户
        - 打开 Steam
        - 右击游戏，然后点击管理
        - 点击浏览本地文件
    - GOG 和 MangaGamer 用户
        - 用游戏简称在资源管理器中搜索游戏位置

2. 用 Steam/GOG/MangaGamer 启动器正常地卸载游戏

3. 手动删掉刚才找到的游戏文件夹。这样所有 Mod 文件都会被删除

## 删除存档

1. **禁用 Steam 云同步**，否则你的存档会重现。

2. 进入[常见问题页面的 “存档位置”](faq.md/#存档文件位置) 中提到的文件夹。

3. 删掉整个文件夹 (如果想重装的话请保留 `global.dat` 文件)

## 删掉自定义 Steam 封面图

有两种方式可以删除自定义 Steam 封面图文件

:::: tabs

@tab 方法一：从 Steam 中卸载

1. 打开 Steam

2. 进入想要重置封面图的游戏界面

3. 右击封面图 (栗子：顶端的封面图)

4. 在右击菜单中，点击“清除自定义背景”和“清除自定义徽标”

@tab 方法二：删除文件 (进阶)

1. 进入 `..\Steam\userdata\[用户ID]\config\grid` 文件夹。

    - 每个在此电脑登陆过 Steam 的用户都会有一个`用户 ID`的子文件夹(`用户 ID`是一串数字)
    - 反复进入每个`用户 ID`子文件夹直到找到你自己的文件夹

2. 删除新样式的图片与和名称相关联的 .json 文件。

    - 不推荐删除整个文件夹，这样会清除你以前添加到所有自定义封面图

::::

## 清除注册表(进阶，仅 Windows)

游戏本体会把一些设置，比如屏幕分辨率和全屏/窗口设置，生成一些注册表项目储存起来。一般储存到注册表的 `Computer\HKEY_CURRENT_USER\Software\Mangagamer\Higurashi When They Cry - Ch.1 Onikakushi` (第一章)。按照以下步骤清空寒蝉游戏的注册表设置：

1. 下载这个文件 [delete_higurashi_registry.reg](https://07th-mod.com/wiki/files/delete_higurashi_registry.reg)

2. 双击运行 `delete_higurashi_registry.reg`

3. 在警告框中点击“运行”

如果你担心 .reg 文件有问题，就在文本编辑器中打开并检查一遍。这个文件只是列举了每个注册表文件夹，并用前缀 `-` 来删除该条目。你也可以在注册表中手动删除。
