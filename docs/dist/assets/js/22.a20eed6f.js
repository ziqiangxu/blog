(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{192:function(t,e,n){"use strict";n.r(e);var s=n(0),i=Object(s.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[this._m(0),this._v(" "),this._m(1),this._m(2),this._v(" "),this._m(3),this._v(" "),e("comment-comment")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("全局修改\n文件"),e("code",[this._v("~/.gradle/init.gradle")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('allprojects {\n    repositories {\n        maven {\n            url "http://maven.aliyun.com/nexus/content/groups/public"\n        }\n    }\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("根据项目修改\n文件：项目根目录的文件"),e("code",[this._v("build.gradle")]),this._v("中\n往"),e("code",[this._v("repositories")]),this._v("节点添加"),e("code",[this._v("maven{ url 'https://maven.aliyun.com/repository/public'}")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("buildscript {\n    repositories {\n        maven{ url 'https://maven.aliyun.com/repository/public'}  // 修改1\n        mavenCentral()  // maven官方的吧？\n        mavenLocal()  // 本地仓库\n        **************  // 其他镜像源，优先级较低\n    }\n}\n\nrepositories {\n    maven{ url 'https://maven.aliyun.com/repository/public'}  // 修改2\n    ************\n}\n")])])])}],!1,null,null,null);e.default=i.exports}}]);