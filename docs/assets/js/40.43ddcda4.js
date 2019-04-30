(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{251:function(e,t,v){"use strict";v.r(t);var a=v(0),_=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"qt开发注意事项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#qt开发注意事项","aria-hidden":"true"}},[e._v("#")]),e._v(" Qt开发注意事项")]),e._v(" "),v("p",[e._v("使用 "),v("code",[e._v("PyQt 5.11")]),e._v(" 开发时（版本不同也需要特别注意）")]),e._v(" "),v("h2",{attrs:{id:"使用-qslider-的时候进行如下操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用-qslider-的时候进行如下操作","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用 "),v("code",[e._v("QSlider")]),e._v(" 的时候进行如下操作")]),e._v(" "),v("ol",[v("li",[e._v("使用 "),v("code",[e._v("setValue()")]),e._v(" 会触发 "),v("code",[e._v("valueChanged")]),e._v(" 事件")]),e._v(" "),v("li",[e._v("默认最大值是 99，直接设置大于 99 的值，仍然是 99，所以需要事先设置一个 "),v("code",[e._v("maximum")]),e._v(" 值")]),e._v(" "),v("li",[e._v("当更改最大值最小值的时候需要特别注意，如果原本 "),v("code",[e._v("QSlider")]),e._v(" 的值超出了新设置的值域，也会触发 "),v("code",[e._v("valueChanged")]),e._v(" 事件。")])]),e._v(" "),v("p",[e._v("这些隐式地触发 "),v("code",[e._v("valueChanged")]),e._v(" 事件，可能会让程序大部分时间是正常的，比较复杂，难以调试。我们可以使用一些技巧避免发生这样的情况")]),e._v(" "),v("h2",{attrs:{id:"解决办法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解决办法","aria-hidden":"true"}},[e._v("#")]),e._v(" 解决办法")]),e._v(" "),v("ol",[v("li",[e._v("一旦 "),v("code",[e._v("QSlider")]),e._v(" 的值域设置好了，尽量不要修改")]),e._v(" "),v("li",[e._v("如果一定要修改，务必小心，可在进行操作前断开信号槽连接，避免发送多余的信号。")])])])}],!1,null,null,null);t.default=_.exports}}]);