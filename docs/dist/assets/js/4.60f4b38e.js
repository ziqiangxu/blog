(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{174:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),s("p",[t._v("如何确定这些库，还需继续努力学习")]),t._v(" "),s("comment-comment")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"cmake-之库文件添加"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmake-之库文件添加","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("CMake")]),this._v(" 之库文件添加")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果某些头文件的使用需要指明链接库的位置，但你没有在指明。很有可能会出现：\n"),e("code",[this._v("error adding sysmbols: DSO missiong from command line")]),this._v(" 这样的错误。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果你指明了链接库，但是没有指出全部的链接库，很有可能会出现 "),e("code",[this._v("undefined reference to symbol ***（头文件中的函数名）")]),this._v(" 或者 "),e("code",[this._v("对函数未定义的引用")]),this._v(" 之类的错误。\n在 "),e("code",[this._v("CMakelists.txt")]),this._v(" 文件中，通过")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cmake extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("target_link_libraries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("[TARGET_NAME] [链接库名字]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 按名字添加")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("target_link_directories")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("[链接库目录]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 按目录添加")]),t._v("\n")])])])}],!1,null,null,null);e.default=a.exports}}]);