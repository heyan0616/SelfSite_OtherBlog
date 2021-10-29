---
title: 安卓终端模拟器Termux
date: 2021-10-26
tags:
 - Android
 - Termux
categories:
 - Tech
author: Yan
isShowComments: false
---

在安卓平板上做鼓捣一些简单的开发相关的东西

<div style="display:flex;"><img src="https://img1.baidu.com/it/u=1363082146,925123838&fm=15&fmt=auto" alt="" style="zoom:50%;display:block;" align="left"/></div>

<!-- more -->

## Termux 是什么

> Termux is a terminal emulator and Linux environment bringing powerful terminal access to Android.

Termux 是运行在 Android 上的 terminal。不需要root，运行于内部存储（不在SD卡上）。

## Termux安装

直接去[[官网]](https://termux.com/)下载最新版安装文件就行 （不建议通过Google Play安装，会提示版本过旧）

## 修改镜像源

国内使用第一步是修改镜像源（否则安装任何东西都会有can't alocate的错误提示）

安装镜像源参考 [https://mirrors.tuna.tsinghua.edu.cn/help/termux/](https://mirrors.tuna.tsinghua.edu.cn/help/termux/)

### 图形界面（TUI）替换

在较新版的 Termux 中，官方提供了图形界面（TUI）来半自动替换镜像，推荐使用该种方式以规避其他风险。 在 Termux 中执行如下命令

```sh
termux-change-repo
```

在图形界面引导下，使用自带方向键可上下移动。 
第一步使用空格选择需要更换的仓库，之后在第二步选择 TUNA/BFSU 镜像源。确认无误后回车，镜像源会自动完成更换。

### 命令行替换

使用如下命令行替换官方源为 TUNA 镜像源

```sh
sed -i 's@^\(deb.*stable main\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/termux-packages-24 stable main@' $PREFIX/etc/apt/sources.list
sed -i 's@^\(deb.*games stable\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/game-packages-24 games stable@' $PREFIX/etc/apt/sources.list.d/game.list
sed -i 's@^\(deb.*science stable\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/science-packages-24 science stable@' $PREFIX/etc/apt/sources.list.d/science.list
apt update && apt upgrade
```

### 手动修改

编辑 `$PREFIX/etc/apt/sources.list` 修改为如下内容

```sh
# The termux repository mirror from TUNA:
deb https://mirrors.tuna.tsinghua.edu.cn/termux/termux-packages-24 stable main
```

编辑 `$PREFIX/etc/apt/sources.list.d/science.list` 修改为如下内容

```sh
# The termux repository mirror from TUNA:
deb https://mirrors.tuna.tsinghua.edu.cn/termux/science-packages-24 science stable
```

编辑 `$PREFIX/etc/apt/sources.list.d/game.list` 修改为如下内容

```sh
# The termux repository mirror from TUNA:
deb https://mirrors.tuna.tsinghua.edu.cn/termux/game-packages-24 games stable
```

请使用内置或安装在 Termux 里的文本编辑器，例如 `vi` / `vim` / `nano` 等，**不要使用 RE 管理器等其他具有 ROOT 权限的外部 APP** 来修改 Termux 的文件

## 环境准备

### 更新

```sh
# 连接远程仓库，获取软件包信息
$ apt update

# 更新本地已经安装的软件包
$ apt upgrade
```

### 访问本机存储

手机 App 默认只能访问自己的数据，如果要访问手机的存储，需要请求权限。

```sh
termux-setup-storage
```

执行上面的命令以后，会跳出一个对话框，询问是否允许 Termux 访问手机存储，点击"允许"。

> 会在home目录下生成一个`storage`子目录，它是手机存储的符号链接。
>
> home目录在  /data/data/com.termux/files/home  (可以通过 cd $home 访问home目录)



## 安装软件

### 安装nodejs

安装好镜像源并更新好系统后，我们就可以安装软件了 - 如安装nodejs

```
apt install nodejs / pkg install nodejs   (pkg 背后也是调用apt 不过会先运行apt update)
```

可通过命令查看所有安装的pckage

``` sh
pkg help
pkg list-installed
```

安装好node后，我们可以测试一下，比如，新建一个脚本`hello.js`

``` js
// hello.js
console.log('hello world');
```

然后，执行这个脚本。

``` sh
$ node hello.js
hello world
```

### 安装http服务器

::: tip 参考文章，可以自己搭一个http服务器传手机文件

- [http://www.ruanyifeng.com/blog/2019/07/termux-tutorial.html](http://www.ruanyifeng.com/blog/2019/07/termux-tutorial.html)

:::

现在，通过 Node.js 运行 HTTP Server。首先，安装 npm 模块[`http-server`](https://www.npmjs.com/package/http-server)。

``` sh
$ npm install -g http-server
```

然后，运行 Server。

``` sh
$ http-server
```

正常情况下，命令行会提示 Server 已经在 8080 端口运行了，并且还会提示外部可以访问的 IP 地址。

举例来说，手机的局域网 IP 是 192.168.2.6，那么我们通过桌面电脑的浏览器访问`http://192.168.2.6:8080`，就可以看到 Termux 的根目录了。进入下面的`storage`子目录，就可以下载手机文件了。

如果手机和电脑不在同一个局域网，那可以打开手机的热点功能，让桌面电脑通过手机热点上网，再访问手机的 HTTP Server。这里顺便提一下，下面的命令可以从命令行查看手机的 IP 地址。

``` sh
$ apt install net-tools
$ ifconfig
```

### 安装python

不使用 Node.js，而使用其他方法架设 HTTP Server 也是可以的。下面演示 Python 的方法

``` sh
$ apt install python
$ python -m http.server 8080
```

然后，桌面电脑就可以访问手机了。

Termux 是非常强大的工具，除了上面的方法，还可以架设 [Apache 服务器](http://www.termuxtutorials.ga/2018/06/how-to-install-apache2-in-termux-termux.html)，或者通过[其他途径](https://wiki.termux.com/wiki/Remote_Access)（FTP、SSH、Rsync）访问手机。

