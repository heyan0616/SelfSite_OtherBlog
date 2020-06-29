---
title: 测试文章
date: 2020-01-02
tags:
 - demo
categories:
 - Demo
isShowComments: false
---



摘要: 文字摘要<br>摘要中插入图片

![avatar](https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2822367155,3110157686&fm=26&gp=0.jpg)





<!-- more -->

## 测试文章

### 摘要

如需摘要，在文中加入注释`<!-- more -->`，此时注释上面的内容即为摘要显示在首页。

### 图片摘要

> 图片格式如下（markdown图片格式）：

``` markdown
![avatar](https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2822367155,3110157686&fm=26&gp=0.jpg)
```



### 侧边栏显示

默认显示，如需不显示，在文章头部`Front Matter`配置部分加上

```
sidebar: false
```



### 评论显示

默认显示，如需不显示（如本文），在文章头部`Front Matter`配置部分加上

```
isShowComments: false
```



### `Front Matter`参考示例

```
title: 测试文章
date: 2020-01-02
author: name
sidebar: false
isShowComments: false
tags:
 - tag1
 - tag2
categories:
 - category1
 - category2
key:
 - '32bitmd5code'
```

