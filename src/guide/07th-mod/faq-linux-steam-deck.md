---
icon: circle-question
title: 常见问题解答 - Linux 和 Steam Deck
author: ycx
category: 使用指南
tag:
  - 07th-mod
  - 安装指南
article: false
order: 5
---

::: tip 本文译自 07th-mod 官网

如需阅读原文，请点击[这里](https://07th-mod.com/wiki/Higurashi/FAQ-linux-steam-deck/)。

:::

# 常见问题解答 - Linux 和 Steam Deck

本文章列出了特定于 Linux 或是 Steam Deck 的问题

## Steam Deck

### 完全没有声音

Steam Deck 上有一种将指定应用程序静音的方法，比如说这篇 Reddit 帖子 [No Sound Fix](https://www.reddit.com/r/SteamDeck/comments/thy8c9/no_sound_fix/) 中所提到的

```
tldr: 游戏可能会被意外地静音。在桌面模式下重新启动游戏，然后进入音频设置中的应用程序选项卡，找到并取消静音。
……
通过在桌面模式下打开游戏，转到音频设置（单击任务栏中的扬声器图标），打开应用程序选项卡并在那里取消静音。
```

如果还是没有声音，请查看常见问题解答页面中的[没有声音/音频/背景音乐/语音](faq.md#%E6%B2%A1%E6%9C%89%E5%A3%B0%E9%9F%B3-%E9%9F%B3%E9%A2%91-%E8%83%8C%E6%99%AF%E9%9F%B3%E4%B9%90-%E8%AF%AD%E9%9F%B3)，因为你可能遇到了其他问题。

## 一般的 Linux 问题

### 游戏在启动时崩溃，日志开头有 “fatal stalled cross-thread pipe” 的错误信息

- 如果日志开头有 `src/common/pipes.cpp (852) : fatal stalled cross-thread pipe` 的错误，可能是游戏和 Steam 的通信出现问题

- 要修复这个问题：
    - 重启 Steam 并打开游戏
    - 尝试在不开启 Steam 时运行游戏 (关闭 Steam，然后直接点击游戏程序)

### 当使用 Awesomewm 桌面管理器 (其他的也有可能) 移动鼠标时，整个游戏/系统会卡住

- 这个问题已经提交给 Awesomewm 桌面管理器开发者了

- 这个问题不只影响《寒蝉鸣泣之时》，其他游戏也会遇到

- 要修复这个问题：
    - 关闭 compositor
    - 用 `--no-argb` 的变量启动桌面管理器 ([更多信息在此，虽然和这个问题不完全一样](https://github.com/awesomeWM/awesome/issues/2502))

### 游戏之前在窗口模式的时候可以正常玩，切到全屏幕后立即崩溃，并且无法重置到窗口模式

想要强制重置回窗口模式，请阅读 [清理 Unity PlayerPrefs](uninstall.md#%E6%B8%85%E7%90%86-unity-playerprefs) 以强制清除设置。

### 使用 GNOME/MATE 桌面，当游戏启动时整个桌面崩溃

::: caution 注意

**我们已经在 2022 年 11 月 13 日的更新中修复了这个问题。如果在最新版的补丁上仍然会崩溃，请联系我们。**

:::

可以展开下面的信息框获取更多信息。

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

- [Merged PR: Fix Unity killing window managers with insane window size](https://github.com/07th-mod/higurashi-assembly/pull/93)

- [Draft PR: Linux gnome crash workaround](https://github.com/07th-mod/higurashi-assembly/pull/91)

- [Issue: Linux GNOME desktop environment crash / corrupted configuration file issue](https://github.com/07th-mod/higurashi-patch-compiler/issues/58)

:::
