---
title: 网络基础名词2 - SDN相关
date: 2020-10-14
tags:
 - Network
categories:
 - Tech
 - IT
author: 转载
isShowComments: false
---

转载一篇SDN的相关文章，里面涉及很多网络基础知识的概念（部分概念出现在之前的基础名词篇 “[网络基础名词1](/blogs/2020/0927-networkterm1.html)“ ，有需要可前往参考）。

<!-- more -->

## 图解SDN：软件定义网络导论篇

::: tip 转载

*非常棒的科普文章,原文转载作记录 - 推荐前往查看原文！* （<font color=#e69500 size=2>注意：文章发表时间较早，注意部分知识的更新</font>）

- [https://zhuanlan.zhihu.com/p/29038974](https://zhuanlan.zhihu.com/p/29038974)
- [http://mp.weixin.qq.com/s?__biz=MjM5MTM3MzIzMg==&mid=209513316&idx=1&sn=e5dbd9a2ccccb88d0ee5c4d5790699c1#rd](http://mp.weixin.qq.com/s?__biz=MjM5MTM3MzIzMg==&mid=209513316&idx=1&sn=e5dbd9a2ccccb88d0ee5c4d5790699c1#rd)

:::

### 互联网的真面目？网络前世今生



![img](https://pic2.zhimg.com/80/v2-f1b09ff959c74e00df05e9c0457354f5_1440w.jpg)

**图例**

![img](https://pic1.zhimg.com/80/v2-a54c84e9281d161e9415c8ab688d3220_1440w.jpg)





**如何将两个主机连接起来？**

![img](https://pic2.zhimg.com/80/v2-fdf01a32a2fbe6b3d3c9d0f671b78eb5_1440w.jpg)





**网线来了**

![img](https://pic2.zhimg.com/80/v2-5a40d03d5a9316b531dec20e1a64aeb1_1440w.jpg)





**网线不够长肿么办？**

![img](https://pic2.zhimg.com/80/v2-b35603ac1456702f3fbba491ec3303c9_1440w.jpg)





**中继器来了**

![img](https://pic2.zhimg.com/80/v2-91252ca98683e0c2322ca04345e16ee5_1440w.jpg)





**中继器口不够肿么办？**

![img](https://pic3.zhimg.com/80/v2-72308dd83b0af67e51e2de24b2f539d6_1440w.jpg)





**集线器来了**

![img](https://pic1.zhimg.com/80/v2-9ebf080d737e359d96a047da92867178_1440w.jpg)





**怕骚扰怎么办？网桥来了**

![img](https://pic1.zhimg.com/80/v2-a88d91b0a4254f6141422d0149745f1c_1440w.jpg)

![img](http://mmbiz.qpic.cn/mmbiz/SXmUIvtwcDWVzgIdJuibsgPF6a8SNPj1AUIrNZs0JqyRyNoC7MJ2YdicSCic9sChHrnsuKlia6ghznXtFkRzLHxAGA/0?wx_fmt=jpeg)

**不够快怎么办？交换机来了**

![img](https://pic1.zhimg.com/80/v2-7d1e628f1dc7e5f8ee15ebcc32eed85c_1440w.jpg)





![img](https://pic4.zhimg.com/80/v2-c7a0ee139a566387b2cd0eb6a3307023_1440w.jpg)





**不够远怎么办？路由器来了**

![img](https://pic3.zhimg.com/80/v2-65db2260191a3504fd55c6ac0feb6742_1440w.jpg)

![img](https://pic3.zhimg.com/80/v2-67828e07e9e940e38c39588b13aa70e6_1440w.jpg)

![img](https://pic3.zhimg.com/80/v2-d63c135cacad00152853aa0b081aa53e_1440w.jpg)





**布线麻烦怎么办？无线AC/AP来了**

![img](https://pic4.zhimg.com/80/v2-93f94f2ca469120d1e03eabea6ef13b7_1440w.jpg)

![img](https://pic1.zhimg.com/80/v2-94237c77285cf3d36bc020935f1f3a38_1440w.jpg)



**不够安全怎么办？防火墙来了**

![img](https://pic1.zhimg.com/80/v2-adbe738c64b0c4a848998d0b4b460368_1440w.jpg)



![img](https://pic3.zhimg.com/80/v2-44bdaa5c86e1360daea2f4581e4f567a_1440w.jpg)





**网络拥挤怎么办？流控来了**

![img](https://pic2.zhimg.com/80/v2-0d56141b0d948162471c2a591de71401_1440w.jpg)



![img](https://pic3.zhimg.com/80/v2-4e7041c84417226778a4cb8ba6940bce_1440w.jpg)



![img](https://pic1.zhimg.com/80/v2-d11a22bc0c7d019cfa508e36e7a2a1c0_1440w.jpg)



![img](https://pic3.zhimg.com/80/v2-49eca5d114f1c520ee6c6edbc8bdb0d6_1440w.jpg)





**问题来了，一个网络到底需要多少设备？**

![img](https://pic1.zhimg.com/80/v2-36598c79131f1f376ab47dbb5f0c570c_1440w.jpg)



**家庭SOHO网络是这样的**

![img](https://pic4.zhimg.com/80/v2-bf951bd4466faa64138769913c2f3083_1440w.jpg)





**小型创业公司是这样的**

![img](https://pic1.zhimg.com/80/v2-aaf2bd4f00816b1d74488af794e9a7f8_1440w.jpg)





**园区网络是这样的**

![img](https://pic2.zhimg.com/80/v2-5b55ac2a8818a338409e04d522897291_1440w.jpg)



![img](https://pic3.zhimg.com/80/v2-1c9d5bf1d0bdd58e5d79474d8b25af2e_1440w.jpg)





**政务网是这样的**

![img](https://pic2.zhimg.com/80/v2-34946715eaa591ade665eb27eb1e413d_1440w.jpg)



![img](https://pic4.zhimg.com/80/v2-fcd0055a5d73414b817c9991ed3fac8f_1440w.jpg)





**数据中心网是这样的**

![img](https://pic4.zhimg.com/80/v2-518e3c4b8071d4f88c4fe98a7a432a57_1440w.jpg)



![img](https://pic1.zhimg.com/80/v2-d5c46f1ae971bd31867d2b3f5afc1510_1440w.jpg)





**电信网/互联网是这样的**

![img](https://pic3.zhimg.com/80/v2-1fa100fc0df62e78c1036ed17a6b7ef6_1440w.jpg)



![img](https://pic1.zhimg.com/80/v2-74b6c003b3ac86c066ddfc0c5f984c08_1440w.jpg)



![img](https://pic3.zhimg.com/80/v2-6aa7d492245981a7364980fa66a89b9e_1440w.jpg)



![img](https://pic3.zhimg.com/80/v2-e9d45553b4db6c7f30c8fef6b4a3dfa2_1440w.jpg)



**来一张全家福？原来这才是互联网真面目！**

![img](https://pic2.zhimg.com/80/v2-13170fdc38a32c3999e02167422f0b35_1440w.jpg)



### 危机四伏 八面埋伏

**有哪些厂商在生产网络设备？**

![img](https://pic3.zhimg.com/80/v2-2dc2a8c5040bcc102384a2fbafaca892_1440w.jpg)





**如何对网络设备进行操作？**

![img](https://pic2.zhimg.com/80/v2-25d4ed77f67a7f7ca94412a1f7f562b1_1440w.jpg)





**如何管理这么多网络设备？**

![img](https://pic2.zhimg.com/80/v2-52ab57b57abedd5fb8ca2cc6c2e22fe5_1440w.jpg)





**问题一：传统网络管理和部署非常麻烦**

![img](https://pic3.zhimg.com/80/v2-af71b5296de8992f40219f3a2b8e4606_1440w.jpg)



**网络设备之间如何协同工作？**

![img](https://pic3.zhimg.com/80/v2-8014ee85814da8032a0d6720d06df88e_1440w.jpg)



![img](https://pic4.zhimg.com/80/v2-86dfb24847650c6e1199f556ab4a474f_1440w.jpg)





**如果网络发生变动？如何进行交互？**

![img](https://pic3.zhimg.com/80/v2-018ff023a07aa608dae3782cb8cca58e_1440w.jpg)





**当流量暴涨拓扑膨胀时**

![img](https://pic2.zhimg.com/80/v2-5a4df86035beeb9587e6083fc2f1e7bd_1440w.jpg)



**问题二：分布式网络架构瓶颈凸显**

![img](https://pic1.zhimg.com/80/v2-61ef33c3cd5f4a34f602fcf00d59e8e8_1440w.jpg)



**网络带宽分配如何解决？**

![img](https://pic2.zhimg.com/80/v2-30aa02d149622931e0b49f50f0b88ba1_1440w.jpg)



![img](https://pic2.zhimg.com/80/v2-11f68b096cd5ee431840fd071e90c2a1_1440w.jpg)



![img](https://pic4.zhimg.com/80/v2-d63bac62b50305a43f7d148c855adb07_1440w.jpg)





**流量可视化难！**

![img](https://pic2.zhimg.com/80/v2-1a1eefbebcccac084031b09dfaa45f39_1440w.jpg)



**问题三：流量控制是棘手难题！**

![img](https://pic2.zhimg.com/80/v2-b11150e60be30ba8d236149e75dab8d5_1440w.jpg)



**能否自定义设备的转发策略？**

![img](https://pic1.zhimg.com/80/v2-2532dac9849449709896a78a35a2d218_1440w.jpg)



**能否将这个软件运行在设备上？**

![img](https://pic4.zhimg.com/80/v2-d97629cc385abe8f639919c5736d6ef7_1440w.jpg)



**问题四：无法按需，不可编程**

![img](https://pic3.zhimg.com/80/v2-368ab016e8da2776e987e8779313464a_1440w.jpg)



### 进击的SDN，该来的总会来的

**SDN是什么？**

![img](https://pic2.zhimg.com/80/v2-0ba6965d8ad4bda1bbca3f37928477e9_1440w.jpg)



**SDN是什么？学术界：怎么又是斯坦福？跨世纪的继承！**

![img](https://pic2.zhimg.com/80/v2-d99acfcca3b48666b37a175af0f124b5_1440w.jpg)



**SDN是什么？商业界：一马当先的Google，标杆案例B4网络！**

![img](https://pic1.zhimg.com/80/v2-0ad6e70625b6200761111029993b6fd8_1440w.jpg)



**SDN是什么？运营商NFV/ETSI**

![img](https://pic4.zhimg.com/80/v2-5b4b997f6c4732539f8149a7c96d7ed7_1440w.jpg)



![img](https://pic1.zhimg.com/80/v2-b7be282806a8859cb15692a3cfbf29d8_1440w.jpg)





**SDN到底是什么？**

![img](https://pic2.zhimg.com/80/v2-1a45dc2783e788d32d069264c606689d_1440w.jpg)



![img](https://pic4.zhimg.com/80/v2-82b04222201642abdf8fcae31315060b_1440w.jpg)



![img](https://pic1.zhimg.com/80/v2-7136449ff575a6183c4e78fee5fa8c60_1440w.jpg)



![img](https://pic3.zhimg.com/80/v2-20c4769b3c26c9d1cd9595dcebda578e_1440w.jpg)





**SDN网络交互方式变革**

![img](https://pic4.zhimg.com/80/v2-e51fd694f6861e08c0f7dfdfd5c20307_1440w.jpg)



**哪些组织在推动SDN发展？**

![img](https://pic2.zhimg.com/80/v2-1f4cf3ddcb4a5e0c29b5448245b9c85d_1440w.jpg)



![img](https://pic4.zhimg.com/80/v2-f1dd9306a0247e864d82cc4a0a3c264b_1440w.jpg)





**产业链分析（玩家图谱）**

![img](https://pic1.zhimg.com/80/v2-8c156ab805174befb3e839ba78fabd88_1440w.jpg)



![img](https://pic4.zhimg.com/80/v2-15cea9f17a322298058a783999bf98a7_1440w.jpg)



**学习SDN的最佳姿势**

![img](https://pic4.zhimg.com/80/v2-2a03e14ff74ecfce542b7b310bd7ee7f_1440w.png)





<style scoped>
  .content__default:not(.custom) img{
    max-width: 70%;
  }
</style>