(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{198:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("p",[t._v("嗨，大家好！这是一篇操作系统课程的高分笔记，真的高分笔记\n###第一章 操作系统引论")]),t._v(" "),t._m(0),t._v(" "),r("p",[t._v("完整的计算机系统由计算机硬件和计算机软件组成，计算机硬件部分被称为裸机，只能执行机器代码语言，一般人无法使用。\n操作系统在计算机系统中的地位：\n硬件裸机>操作系统>其他系统软件>应用软件>用户")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("计算机系统中的能够有效控制和管理计算机硬件资源和软件资源，合理组织计算机工作流程和方便用户使用计算机的一个系统软件。（位于硬件层之上，所有软件层之下）")]),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("命令方式、程序方式、图形方式等")]),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("（几种基本操作系统）")]),t._v(" "),t._m(4),t._v(" "),r("p",[t._v("批处理技术：是在系统中配置一个监控程序，并在该监控程序的控制下，能够对一批作业自动进行处理的技术。\n单道批处理系统：自动性、顺序性、单道性。\n多道批处理系统：多道性、调度性、无序性。\n多到批处理原理：在A程序进行I/O操作或者A程序需要中断的时候通过调度程序切换到B程序，以使得计算机的各个资源处于忙碌的状态，充分利用资源。")]),t._v(" "),t._m(5),t._v(" "),r("p",[t._v("一台高性能主机，连接着许多终端。让每个用户的程序在主机上运行一个时间片（很短的时间），如果在不长的时间（比如3秒）让所有用户的程序都能执行一遍，就可以使每个用户都能够及时与自己的作业交互。特征：多路性、及时性、交互性、独立性")]),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("定义：能及时响应外部事件的请求，在规定时间能处理完该事件，并控制所有实时任务协调一致地运行。\n开发背景：满足实时控制和实时信息处理两个领域的要求\n特征：多路性、及时性、交互性、独立性、可靠性。（多路性说明：实时控制表现为多个现场信息采集或多个执行机构的控制；实时信息处理表现为为多个终端按分时原则提供服务）\n#####　网络操作系统\n使网络上各计算机方便有效地共享计网络资源的软件、为网络用户提供各种服务的软件和有关通信协议的程序的集合")]),t._v(" "),t._m(7),t._v(" "),r("p",[t._v("运行在嵌入式硬件平台的，对整个系统进行软硬件管理的系统软件。\n特征：微型化、可裁剪性、实时性、高可靠性、易移植性。")]),t._v(" "),t._m(8),t._v(" "),r("p",[t._v("-　并发：多个事件在同一时间间隔发生，为了实现并发，为每个程序创建进程。因为程序是静态实体，而进程为系统能独立分配资源的基本单位（一个程序可有多个进程）。\n-　共享：系统中的资源可供内存中多个并发执行的进程共享使用。有互斥共享（如打印机）和同时访问\n-　虚拟：通过过某种技术把一个物理机上的实体变成若干个逻辑上的对应物。例如：Ｉｎｔｅｌ双核处理器（物理核心）在设备管理器里查看显示一共有四个逻辑处理器。\n-　异步性：在多道程序的环境下，由于资源等因素的限制，每个程序不知何时执行，何时暂停。")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),r("p",[t._v("处理机的分配和运行是以进程为单位的，所以对处理机的管理可以归结为对进程的管理。\n进程控制：负责进程的创建、撤销和状态转换；\n进程同步：对进程的次序进行协调；\n进程通信：实现进程之间信息的交换；\n进程调度：按一定的算法进行处理机分配。")]),t._v(" "),t._m(12),t._v(" "),r("p",[t._v("内存的分配／回收：按照一定的策略分配内存，并在程序结束后回收内存；\n内存保护：确保程序只在自己的内存空间中运行，从而不影响操作系统和其他程序的运行；\n地址映射：实现地址空间中的逻辑地址到内存中物理地址的转换；\n内存扩充：为了允许大型作业或多个作业的运行，必须借助虚拟存储技术去获得增加内存的效果。")]),t._v(" "),t._m(13),t._v(" "),r("p",[t._v("缓冲管理：利用缓冲来缓和ＣＰＵ和Ｉ／Ｏ设备速度上不匹配的矛盾，以提高资源利用率和Ｉ／O速度；\n设备分配：为用户分配完成Ｉ／Ｏ所需的设备和控制器；\n设备处理：启动设备进行真正的Ｉ／Ｏ操作，响应并处理来自设备的中断请求。")]),t._v(" "),t._m(14),t._v(" "),r("p",[t._v("主要任务是有效地支持文件的存储、检索和修改等操作，解决文件的共享和保护问题。\n文件存储空间的管理；目录管理；文件的读写管理和保护。")]),t._v(" "),t._m(15),t._v(" "),r("p",[t._v("对应操作系统的使用方式\n命令接口、程序接口、图形接口")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),r("p",[t._v("方便性、有效性（我觉得应该是高效性）、可扩展性、开放性\n可扩展性的补充补充：采用微内核的结构，以便增加新的功能模块和修改老的功能模块，使其具有良好的可扩充性。听说Ｌｉｎｕｘ坚持使用宏内核，为什么呢？\n？？？微内核和宏内核是什么，震惊")]),t._v(" "),t._m(18),t._v(" "),r("p",[t._v("持续更新......\n参考资料《操作系统原理与实践教程》——滕艳平，清华大学出版社")]),t._v(" "),r("comment-comment")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_1-1操作系统的概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1操作系统的概念","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.1操作系统的概念")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"操作系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作系统","aria-hidden":"true"}},[this._v("#")]),this._v(" 操作系统")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"操作系统的使用方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作系统的使用方式","aria-hidden":"true"}},[this._v("#")]),this._v(" 操作系统的使用方式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"１-２操作系统的发展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#１-２操作系统的发展","aria-hidden":"true"}},[this._v("#")]),this._v(" １.２操作系统的发展")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"批处理系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#批处理系统","aria-hidden":"true"}},[this._v("#")]),this._v(" 批处理系统")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"分时系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分时系统","aria-hidden":"true"}},[this._v("#")]),this._v(" 分时系统")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"实时系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实时系统","aria-hidden":"true"}},[this._v("#")]),this._v(" 实时系统")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"嵌入式操作系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#嵌入式操作系统","aria-hidden":"true"}},[this._v("#")]),this._v(" 嵌入式操作系统")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"１-3操作系统的基本特征"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#１-3操作系统的基本特征","aria-hidden":"true"}},[this._v("#")]),this._v(" １.3操作系统的基本特征")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("关于并发和异步性的解释理解比较困难，这是我觉得本书的一个不足。没有先介绍什么是进程。【进程组成：一段机器代码、数据、堆栈和程序控制块（ＰＣＢ）】")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-4操作系统的主要功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4操作系统的主要功能","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.4操作系统的主要功能")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"１．处理机管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#１．处理机管理","aria-hidden":"true"}},[this._v("#")]),this._v(" １．处理机管理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"２．存储机管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#２．存储机管理","aria-hidden":"true"}},[this._v("#")]),this._v(" ２．存储机管理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"３．设备管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#３．设备管理","aria-hidden":"true"}},[this._v("#")]),this._v(" ３．设备管理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"４．文件管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#４．文件管理","aria-hidden":"true"}},[this._v("#")]),this._v(" ４．文件管理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"５．用户接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#５．用户接口","aria-hidden":"true"}},[this._v("#")]),this._v(" ５．用户接口")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-5操作系统的结构设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-5操作系统的结构设计","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.5操作系统的结构设计")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"设计目标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设计目标","aria-hidden":"true"}},[this._v("#")]),this._v(" 设计目标")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("好吧，读到这里，深深地了解到，要仔细了解操作系统的原理之后再来看前面这种总结的话。")])])}],!1,null,null,null);e.default=s.exports}}]);