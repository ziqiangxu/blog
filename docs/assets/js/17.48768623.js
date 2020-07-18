(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{257:function(t,e,s){"use strict";s.r(e);var i=s(0),n=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("应用场景：\n1.构建私有仓库，只是保存代码的话还是推荐coding或github；\n2.需要在服务器和本地同步文件；\n3.需要在服务器部署代码；\n4......还有很多，等你去发现呢\n开始干活儿：")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("假设:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),s("p",[t._v("还可以直接编辑仓库里.git/hooks/目录下新建一个post-update文件，内容是")]),t._v(" "),t._m(8),t._m(9),t._v(" "),s("p",[t._v("这样本地提交代码之后服务器就可以自动检出了，当然你也可以在这个文件里加入更多的Linux命令，实现你的想要执行的操作。")]),t._v(" "),s("blockquote",[s("p",[t._v("这样配置，每次提交和拉取数据都要输入密码进行验证，很烦。可以配置服务器的"),s("a",{attrs:{href:"https://www.jianshu.com/p/6761199bedba",target:"_blank",rel:"noopener noreferrer"}},[t._v("ssh免密登录"),s("OutboundLink")],1),t._v("来进一步简化工作。")])]),t._v(" "),s("p",[t._v("您还可以参考"),s("a",{attrs:{href:"https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90",target:"_blank",rel:"noopener noreferrer"}},[t._v("其他教程"),s("OutboundLink")],1),t._v("，本教程适合快速实现需求，您需要学习更多git知识")]),t._v(" "),s("comment-comment")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"用-git-在服务器部署你的代码、同步文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用-git-在服务器部署你的代码、同步文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 用 "),e("code",[this._v("Git")]),this._v(" 在服务器部署你的代码、同步文件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"第一步-配置服务端："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一步-配置服务端：","aria-hidden":"true"}},[this._v("#")]),this._v(" 第一步 配置服务端：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("当前用户名是test;")]),t._v(" "),s("li",[t._v("ip地址是：45.76.222.90")]),t._v(" "),s("li",[t._v("当前目录是/home/test/\n1、服务器安装git，并初始化仓库 git init [仓库名]\n"),s("code",[t._v("git init git-test")]),t._v("\n然后就出现了一个git-test文件夹\n2、允许仓库接受远程推送\n先切换到仓库目录下\n"),s("code",[t._v("git config receive.denyCurrentBranch ignore")]),t._v("\n这样就产生了一个远程仓库，仓库地址是\n"),s("code",[t._v("ssh://test@45.76.222.90:/home/test/git-test.git")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"第二步-配置本地端："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二步-配置本地端：","aria-hidden":"true"}},[this._v("#")]),this._v(" 第二步 配置本地端：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("git clone ssh://test@45.76.222.90:/home/test/git-test.git")]),this._v("\n然后就可以向服务端push文件了,要使用这一组命令")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('git add .\ngit commit -m "fast-commit"\ngit push master\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"第三步-服务端接收文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第三步-服务端接收文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 第三步 服务端接收文件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-git update-server-info extra-class"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[this._v("git checkout -f\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("#!/bin/sh\ncd [仓库路径]\nunset GIT_DIR\ngit checkout -f\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("记得给这个脚本添加可执行权限")])])}],!1,null,null,null);e.default=n.exports}}]);