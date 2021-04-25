(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{397:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"用-git-在服务器部署你的代码、同步文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用-git-在服务器部署你的代码、同步文件"}},[t._v("#")]),t._v(" 用 "),a("code",[t._v("Git")]),t._v(" 在服务器部署你的代码、同步文件")]),t._v(" "),a("p",[t._v("应用场景：\n1.构建私有仓库，只是保存代码的话还是推荐coding或github；\n2.需要在服务器和本地同步文件；\n3.需要在服务器部署代码；\n4......还有很多，等你去发现呢\n开始干活儿：")]),t._v(" "),a("h2",{attrs:{id:"第一步-配置服务端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一步-配置服务端"}},[t._v("#")]),t._v(" 第一步 配置服务端：")]),t._v(" "),a("p",[t._v("假设:")]),t._v(" "),a("ul",[a("li",[t._v("当前用户名是test;")]),t._v(" "),a("li",[t._v("ip地址是：45.76.222.90")]),t._v(" "),a("li",[t._v("当前目录是/home/test/")])]),t._v(" "),a("p",[t._v("1、服务器安装git，并初始化仓库 git init [仓库名]\n"),a("code",[t._v("git init git-test")]),t._v("\n然后就出现了一个git-test文件夹\n2、允许仓库接受远程推送\n先切换到仓库目录下\n"),a("code",[t._v("git config receive.denyCurrentBranch ignore")]),t._v("\n这样就产生了一个远程仓库，仓库地址是\n"),a("code",[t._v("ssh://test@45.76.222.90:/home/test/git-test.git")])]),t._v(" "),a("h2",{attrs:{id:"第二步-配置本地端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二步-配置本地端"}},[t._v("#")]),t._v(" 第二步 配置本地端")]),t._v(" "),a("p",[a("code",[t._v("git clone ssh://test@45.76.222.90:/home/test/git-test.git")]),t._v("\n然后就可以向服务端push文件了,要使用这一组命令")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fast-commit"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push master\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"第三步-服务端接收文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三步-服务端接收文件"}},[t._v("#")]),t._v(" 第三步 服务端接收文件")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" update-server-info\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -f\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("还可以直接编辑仓库里.git/hooks/目录下新建一个post-update文件，内容是")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/sh")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("仓库路径"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("unset")]),t._v(" GIT_DIR\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -f\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("blockquote",[a("p",[t._v("记得给这个脚本添加可执行权限")])]),t._v(" "),a("p",[t._v("这样本地提交代码之后服务器就可以自动检出了，当然你也可以在这个文件里加入更多的Linux命令，实现你的想要执行的操作。")]),t._v(" "),a("blockquote",[a("p",[t._v("这样配置，每次提交和拉取数据都要输入密码进行验证，很烦。可以配置服务器的"),a("a",{attrs:{href:"https://www.jianshu.com/p/6761199bedba",target:"_blank",rel:"noopener noreferrer"}},[t._v("ssh免密登录"),a("OutboundLink")],1),t._v("来进一步简化工作。")])]),t._v(" "),a("p",[t._v("您还可以参考"),a("a",{attrs:{href:"https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90",target:"_blank",rel:"noopener noreferrer"}},[t._v("其他教程"),a("OutboundLink")],1),t._v("，本教程适合快速实现需求，您需要学习更多git知识")]),t._v(" "),a("comment-comment")],1)}),[],!1,null,null,null);s.default=e.exports}}]);