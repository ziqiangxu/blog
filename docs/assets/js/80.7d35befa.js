(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{247:function(t,e,i){"use strict";i.r(e);var _=i(0),s=Object(_.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),i("p",[t._v("数据结构是递归的：\n如后面章节所讲到的广义表")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),i("blockquote",[i("p",[t._v("原文：即求得问题规模为"),i("code",[t._v("i - 1")]),t._v("的解之后，由问题的递推性质，能从已知求得的规模为"),i("code",[t._v("1, 2, ..., i -1")]),t._v("的一系列的解，构造出问题规模为"),i("code",[t._v("i")]),t._v("的解。"),i("font",{attrs:{color:"red"}},[t._v("和递归思路相反")])],1)]),t._v(" "),t._m(7),t._v(" "),i("p",[t._v("回溯法也称为试探法，将问题的候选解按照某种顺序逐一枚举和检验。当发现当前候选解不可能是解时，就放弃它而选择下一个候选解。如果当前的解除了不满足问题规模外，其他所有要求都满足，则扩大当前候选解的规模继续试探。**放弃当前候选解，寻找下一个候选解的过程叫做回溯。**扩大当前候选解的规模，并继续试探的过程叫向前试探。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"一、递归"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、递归","aria-hidden":"true"}},[this._v("#")]),this._v(" 一、递归")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("递归可以利用前面计算的结果以求得答案。若一个对象部分地包含它自己，或用自己给自己定义，则这个对象是递归的；而且若一个过程直接或间接地调用自己，则称这个过程是递归的过程。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("对于"),e("strong",[this._v("一个较复杂的问题，如果可以分解成几个相对简单的且解法相同的或类似的子问题")]),this._v("时，只要解决这些子问题，那么原问题就迎刃而解了。")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("blockquote",[i("p",[t._v("解决一个"),i("code",[t._v("i")]),t._v("的问题，就是解决"),i("code",[t._v("i - 1")]),t._v("的问题；解决"),i("code",[t._v("i -1")]),t._v("的问题，就是解决"),i("code",[t._v("i - 2")]),t._v("的问题，以此推到问题可以直接解决。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[e("p",[this._v("当分解之后的子问题可以直接解决时，就停止分解。这些可以直接解决的问题就是递归结束的条件。")])]),this._v(" "),e("li",[e("p",[this._v("递归定义的函数可以用递归过程来编程解决。递归过程直接反映了定义的结构")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"二、递推"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、递推","aria-hidden":"true"}},[this._v("#")]),this._v(" 二、递推")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("递推是利用问题本身所具有的递推关系对问题求解的一种方法。采用递推法建立起来的算法一般具有重要的递推性质。我的理解就是可以由小规模推导出大规模，由小"),e("code",[this._v("i - 1")]),this._v("向大"),e("code",[this._v("i")]),this._v("推导。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"三、回溯法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、回溯法","aria-hidden":"true"}},[this._v("#")]),this._v(" 三、回溯法")])}],!1,null,null,null);e.default=s.exports}}]);