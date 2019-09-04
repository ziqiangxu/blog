(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{190:function(t,e,s){"use strict";s.r(e);var i=s(0),a=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("p",[t._v("本文适用于Windows客户端，Linux终端。想必macOS也应该是一样的。本教程同样适用于其他的git托管平台，比如coding，gitlab等。（假设你知道git和github的区别）")]),t._v(" "),s("ul",[s("li",[t._v("先安装git客户端\nWindows点一点，Linux用命令安装git就OK。\n我的电脑是"),s("a",{attrs:{href:"https://deepin.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Deepin操作系统"),s("OutboundLink")],1),t._v("，使用以下命令：\n"),s("code",[t._v("sudo apt install git")])])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),s("p",[t._v("user.name是github用户名\nuser.email是github绑定的邮箱")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("这里不用apt-get而使用get是因为get是友好版的apt-get，可以看进度条哦。还可以少打几个字，何乐而不为呢。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("配置本机的git")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(' git config --global user.name "填用户名"\n git config --global user.email "填邮箱"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("生成密钥")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(' ssh-keygen -t rsa -C "邮箱同上"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/6434906-06d91778a43a0f16.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"图一"}}),this._v("\n然后会出现上面的提示，按回车使用它的默认设置就好。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("提交密钥\n从图一可以得知秘钥是存放地址。在c:\\User\\用户名\\.ssh\\文件夹下。复制id_rsa.pub里面的文本，在github添加这个ssh key就好啦。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"https方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#https方式","aria-hidden":"true"}},[this._v("#")]),this._v(" https方式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"方法一"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法一","aria-hidden":"true"}},[this._v("#")]),this._v(" 方法一")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("git config --global credential.helper store")]),this._v("\n开启记住密码，以后push就不用每次输入账号了。\n以上的操作实际是操作"),e("code",[this._v("~/.gitconfig")]),this._v("文件，你还可以在"),e("code",[this._v("~/.git-credentials")]),this._v("找到你的账号和密码哦")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"方法二"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法二","aria-hidden":"true"}},[this._v("#")]),this._v(" 方法二")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("将"),s("code",[t._v(".git/config")]),t._v("中的url改成\n"),s("code",[t._v("https://name:password@github.com/name/project.git")]),t._v("\n的格式。其中"),s("code",[t._v("name")]),t._v("表示账号，"),s("code",[t._v("password")]),t._v("表示密码。"),s("code",[t._v("push")]),t._v("的时候会自动提交你的密码。此法适用于大部分git托管网站。\n享受高速的http传输吧")])}],!1,null,null,null);e.default=a.exports}}]);