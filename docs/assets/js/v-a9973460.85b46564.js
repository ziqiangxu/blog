"use strict";(self.webpackChunkziqiangxu_github_io=self.webpackChunkziqiangxu_github_io||[]).push([[2711],{9059:(a,e,h)=>{h.r(e),h.d(e,{data:()=>d});const d={key:"v-a9973460",path:"/OS/%E7%AC%AC%E4%B8%80%E7%AB%A0-%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E7%9A%84%E6%A6%82%E5%BF%B5.html",title:"操作系统引论",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"1.1操作系统的概念",slug:"_1-1操作系统的概念",children:[{level:3,title:"操作系统",slug:"操作系统",children:[]}]}],filePathRelative:"OS/第一章-操作系统的概念.md",git:{updatedTime:1619257649e3}}},9213:(a,e,h)=>{h.r(e),h.d(e,{default:()=>r});const d=(0,h(6252).uE)('<h1 id="操作系统引论" tabindex="-1"><a class="header-anchor" href="#操作系统引论" aria-hidden="true">#</a> 操作系统引论</h1><p>嗨，大家好！这是一篇操作系统课程的高分笔记，真的高分笔记</p><h2 id="_1-1操作系统的概念" tabindex="-1"><a class="header-anchor" href="#_1-1操作系统的概念" aria-hidden="true">#</a> 1.1操作系统的概念</h2><p>完整的计算机系统由计算机硬件和计算机软件组成，计算机硬件部分被称为裸机，只能执行机器代码语言，一般人无法使用。 操作系统在计算机系统中的地位： 硬件裸机&gt;操作系统&gt;其他系统软件&gt;应用软件&gt;用户</p><h3 id="操作系统" tabindex="-1"><a class="header-anchor" href="#操作系统" aria-hidden="true">#</a> 操作系统</h3><p>计算机系统中的能够有效控制和管理计算机硬件资源和软件资源，合理组织计算机工作流程和方便用户使用计算机的一个系统软件。（位于硬件层之上，所有软件层之下）</p><h4 id="操作系统的使用方式" tabindex="-1"><a class="header-anchor" href="#操作系统的使用方式" aria-hidden="true">#</a> 操作系统的使用方式</h4><p>命令方式、程序方式、图形方式等</p><h4 id="_1-2操作系统的发展" tabindex="-1"><a class="header-anchor" href="#_1-2操作系统的发展" aria-hidden="true">#</a> １.２操作系统的发展</h4><p>（几种基本操作系统）</p><h5 id="批处理系统" tabindex="-1"><a class="header-anchor" href="#批处理系统" aria-hidden="true">#</a> 批处理系统</h5><p>批处理技术：是在系统中配置一个监控程序，并在该监控程序的控制下，能够对一批作业自动进行处理的技术。 单道批处理系统：自动性、顺序性、单道性。 多道批处理系统：多道性、调度性、无序性。 多到批处理原理：在A程序进行I/O操作或者A程序需要中断的时候通过调度程序切换到B程序，以使得计算机的各个资源处于忙碌的状态，充分利用资源。</p><h5 id="分时系统" tabindex="-1"><a class="header-anchor" href="#分时系统" aria-hidden="true">#</a> 分时系统</h5><p>一台高性能主机，连接着许多终端。让每个用户的程序在主机上运行一个时间片（很短的时间），如果在不长的时间（比如3秒）让所有用户的程序都能执行一遍，就可以使每个用户都能够及时与自己的作业交互。特征：多路性、及时性、交互性、独立性</p><h5 id="实时系统" tabindex="-1"><a class="header-anchor" href="#实时系统" aria-hidden="true">#</a> 实时系统</h5><p>定义：能及时响应外部事件的请求，在规定时间能处理完该事件，并控制所有实时任务协调一致地运行。 开发背景：满足实时控制和实时信息处理两个领域的要求 特征：多路性、及时性、交互性、独立性、可靠性。（多路性说明：实时控制表现为多个现场信息采集或多个执行机构的控制；实时信息处理表现为为多个终端按分时原则提供服务）</p><h5 id="网络操作系统" tabindex="-1"><a class="header-anchor" href="#网络操作系统" aria-hidden="true">#</a> 网络操作系统</h5><p>使网络上各计算机方便有效地共享计网络资源的软件、为网络用户提供各种服务的软件和有关通信协议的程序的集合</p><h5 id="嵌入式操作系统" tabindex="-1"><a class="header-anchor" href="#嵌入式操作系统" aria-hidden="true">#</a> 嵌入式操作系统</h5><p>运行在嵌入式硬件平台的，对整个系统进行软硬件管理的系统软件。 特征：微型化、可裁剪性、实时性、高可靠性、易移植性。</p><h4 id="_1-3操作系统的基本特征" tabindex="-1"><a class="header-anchor" href="#_1-3操作系统的基本特征" aria-hidden="true">#</a> １.3操作系统的基本特征</h4><p>-　并发：多个事件在同一时间间隔发生，为了实现并发，为每个程序创建进程。因为程序是静态实体，而进程为系统能独立分配资源的基本单位（一个程序可有多个进程）。 -　共享：系统中的资源可供内存中多个并发执行的进程共享使用。有互斥共享（如打印机）和同时访问 -　虚拟：通过过某种技术把一个物理机上的实体变成若干个逻辑上的对应物。例如：Ｉｎｔｅｌ双核处理器（物理核心）在设备管理器里查看显示一共有四个逻辑处理器。 -　异步性：在多道程序的环境下，由于资源等因素的限制，每个程序不知何时执行，何时暂停。</p><blockquote><p>关于并发和异步性的解释理解比较困难，这是我觉得本书的一个不足。没有先介绍什么是进程。【进程组成：一段机器代码、数据、堆栈和程序控制块（ＰＣＢ）】</p></blockquote><h4 id="_1-4操作系统的主要功能" tabindex="-1"><a class="header-anchor" href="#_1-4操作系统的主要功能" aria-hidden="true">#</a> 1.4操作系统的主要功能</h4><h5 id="_1-处理机管理" tabindex="-1"><a class="header-anchor" href="#_1-处理机管理" aria-hidden="true">#</a> １．处理机管理</h5><p>处理机的分配和运行是以进程为单位的，所以对处理机的管理可以归结为对进程的管理。 进程控制：负责进程的创建、撤销和状态转换； 进程同步：对进程的次序进行协调； 进程通信：实现进程之间信息的交换； 进程调度：按一定的算法进行处理机分配。</p><h5 id="_2-存储机管理" tabindex="-1"><a class="header-anchor" href="#_2-存储机管理" aria-hidden="true">#</a> ２．存储机管理</h5><p>内存的分配／回收：按照一定的策略分配内存，并在程序结束后回收内存； 内存保护：确保程序只在自己的内存空间中运行，从而不影响操作系统和其他程序的运行； 地址映射：实现地址空间中的逻辑地址到内存中物理地址的转换； 内存扩充：为了允许大型作业或多个作业的运行，必须借助虚拟存储技术去获得增加内存的效果。</p><h5 id="_3-设备管理" tabindex="-1"><a class="header-anchor" href="#_3-设备管理" aria-hidden="true">#</a> ３．设备管理</h5><p>缓冲管理：利用缓冲来缓和 <code>CPU</code> 和 <code>I/O</code> 设备速度上不匹配的矛盾，以提高资源利用率和Ｉ／O速度； 设备分配：为用户分配完成 <code>I/O</code> 所需的设备和控制器； 设备处理：启动设备进行真正的 <code>I/O</code> 操作，响应并处理来自设备的中断请求。</p><h5 id="_4-文件管理" tabindex="-1"><a class="header-anchor" href="#_4-文件管理" aria-hidden="true">#</a> ４．文件管理</h5><p>主要任务是有效地支持文件的存储、检索和修改等操作，解决文件的共享和保护问题。 文件存储空间的管理；目录管理；文件的读写管理和保护。</p><h5 id="_5-用户接口" tabindex="-1"><a class="header-anchor" href="#_5-用户接口" aria-hidden="true">#</a> ５．用户接口</h5><p>对应操作系统的使用方式 命令接口、程序接口、图形接口</p><h4 id="_1-5操作系统的结构设计" tabindex="-1"><a class="header-anchor" href="#_1-5操作系统的结构设计" aria-hidden="true">#</a> 1.5操作系统的结构设计</h4><h5 id="设计目标" tabindex="-1"><a class="header-anchor" href="#设计目标" aria-hidden="true">#</a> 设计目标</h5><p>方便性、有效性（我觉得应该是高效性）、可扩展性、开放性 可扩展性的补充补充：采用微内核的结构，以便增加新的功能模块和修改老的功能模块，使其具有良好的可扩充性。听说 <code>Linux</code> 坚持使用宏内核，为什么呢？</p><p>？？？微内核和宏内核是什么，震惊</p><blockquote><p>好吧，读到这里，深深地了解到，要仔细了解操作系统的原理之后再来看前面这种总结的话。 Linux 使用宏内核是为了高效率，微内核模块之间进行通讯会有一定的性能开销</p></blockquote><p>持续更新...... 参考资料《操作系统原理与实践教程》——滕艳平，清华大学出版社</p>',40),r={render:function(a,e){return d}}}}]);