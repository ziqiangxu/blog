(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{400:function(t,e,_){"use strict";_.r(e);var n=_(42),v=Object(n.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h4",{attrs:{id:"_2-1进程的概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1进程的概念"}},[t._v("#")]),t._v(" 2.1进程的概念")]),t._v(" "),_("p",[t._v("进程是具有独立功能的程序在某个数据集上的执行过程，是系统进行资源分配和调度的一个独立单位。")]),t._v(" "),_("p",[t._v("现代操作系统最基本的特征是程序的并发执行和资源的共享，程序是静态的机器指令的集合，不能如实反映并发程序执行过程的动态性，为此，引入进程的概念来描述程序的动态执行过程。")]),t._v(" "),_("ul",[_("li",[t._v("表2.1 顺序执行与并发执行的比较")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("顺序执行")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("并发执行")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("程序顺序性")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("程序间断性")])]),t._v(" "),_("tr",[_("td",[t._v("程序具有封闭性")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("失去封闭性")])]),t._v(" "),_("tr",[_("td",[t._v("独享资源")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("共享资源")])]),t._v(" "),_("tr",[_("td",[t._v("具有可再现性")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("失去可再现性（有间接或直接的制约关系）")])])])]),t._v(" "),_("p",[t._v("#####　进程的特征\n１．动态性：进程是程序的一次执行过程；\n２．独立性：进程的程序是相对独立的顺序程序，可以按照自己的速度和方向独立向前推进。同时也是拥有资源的独立单位；\n３．异步性：由于进程的相互制约，使进程具有间断性；\n４．并发性：多个进程在一个时间段都被执行；\n５．结构特性：进程由程序段、数据段和进程控制块三部分组成。")]),t._v(" "),_("h4",{attrs:{id:"_2-8-线程的基本概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-线程的基本概念"}},[t._v("#")]),t._v(" 2.8 线程的基本概念")]),t._v(" "),_("p",[t._v("操作系统引入进程的目的：为了使多个程序并发执行，改善资源的利用率和提高系统的吞吐量。而引入线程的目的就是减少操作系统并发执行时的时空开销，使操作系统的并发粒度更小、并发性更好。为什么线程可以做到这点呢？\n请看两者的对比\n进程：是一个资源的拥有者，因而在进程的创建、撤销和切换中，系统付出较大的时空开销，进程的数目不能太多。\n为了使多个程序能够更好地并发，同时又要减少时空开销，要把CPU调度和分配针对不同的活动实体进行，以使之轻装上阵。要求拥有资源的基本单位不能频繁地切换。在这样的要求下产生了线程--------（轻量）\n线程：是操作系统进程中能够独立执行的实体，是处理器调度和分派的基本单位。线程是进程的组成单位，它只拥有很少的一部分资源（如计数器、寄存器），和所属进程的其他线程共享进程所拥有的所有资源。一个进程至少有线程（主线程），他们靠全局变量进行通信。")]),t._v(" "),_("comment-comment")],1)}),[],!1,null,null,null);e.default=v.exports}}]);