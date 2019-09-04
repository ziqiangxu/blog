(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{217:function(t,e,_){"use strict";_.r(e);var n=_(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),_("p",[t._v("不同版本操作可能略有差别，请各位操作前备份")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),_("p",[t._v("安装过程是需要关闭显示服务器的")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),_("p",[t._v("https://wiki.deepin.org/wiki/%E6%98%BE%E5%8D%A1#.E5.AE.89.E8.A3.85.E9.97.AD.E6.BA.90.E9.A9.B1.E5.8A.A8")]),t._v(" "),_("p",[t._v("本文永久更新链接"),_("a",{attrs:{href:"https://www.jianshu.com/p/faece1be1c87",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jianshu.com/p/faece1be1c87"),_("OutboundLink")],1),t._v("\n最近一次修订：20190526")]),t._v(" "),_("comment-comment")],1)},[function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("h1",{attrs:{id:"deepin-搭建深度学习环境（安装显卡驱动、cuda、cudnn）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#deepin-搭建深度学习环境（安装显卡驱动、cuda、cudnn）","aria-hidden":"true"}},[t._v("#")]),t._v(" "),_("code",[t._v("Deepin")]),t._v(" 搭建深度学习环境（安装显卡驱动、"),_("code",[t._v("cuda")]),t._v("、"),_("code",[t._v("cuDNN")]),t._v("）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"写在最前面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写在最前面","aria-hidden":"true"}},[this._v("#")]),this._v(" 写在最前面")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[t._v("本文不是针对超级新手的教程，本文默认读者有阅读 "),_("code",[t._v("NVIDIA")]),t._v(" 官方指南的能力。由于 "),_("code",[t._v("NVIDIA")]),t._v(" 官方指南的手册只提到了很少的发行版。连 "),_("code",[t._v("Debian")]),t._v(" 都没有提到，让我等 "),_("code",[t._v("Deepin")]),t._v(" 铁杆用户感觉到有些犹豫，想着是不是应该换个发行版了？还好有一个 "),_("code",[t._v("Debian")]),t._v(" 系的发行版—— "),_("code",[t._v("Ubuntu")]),t._v(" ，所以我依照 "),_("code",[t._v("NVIDIA")]),t._v(" 针对 "),_("code",[t._v("Ubuntu")]),t._v(" 给出的指南进行了安装。基本顺利，主要就是安装的选择上需要注意一下。下面就是我多次踩坑总结出来的。显卡型号 "),_("code",[t._v("NVIDIA Corporation GP102 [TITAN X] (rev a1)")]),t._v(" ，有可能是我运气好，没有把系统搞崩。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("驱动版本： 410")]),this._v(" "),e("li",[this._v("cuda版本： 10")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"需要知晓的知识点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需要知晓的知识点","aria-hidden":"true"}},[this._v("#")]),this._v(" 需要知晓的知识点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("nouveau")]),this._v("： 单词本意是“新”， 开源驱动。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"一-用深度的显卡驱动器切换到使用闭源驱动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-用深度的显卡驱动器切换到使用闭源驱动","aria-hidden":"true"}},[this._v("#")]),this._v(" 一 用深度的显卡驱动器切换到使用闭源驱动")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("blockquote",[_("p",[t._v("注意了，这一步很重要。因为如果你的电脑使用了 "),_("code",[t._v("nouveau")]),t._v(" 开源驱动（如果电脑有 "),_("code",[t._v("NVIDIA")]),t._v(" 显卡的话， "),_("code",[t._v("Deepin 15.9")]),t._v(" 是默认使用它的）的话，是没办法安装 "),_("code",[t._v("NVIDIA")]),t._v(" 的闭源驱动的\n\x3c!--\n下载驱动 https://www.nvidia.com/Download/index.aspx，应该会得到一个形如"),_("code",[t._v("NVIDIA-linux-XXX.run")]),t._v("的文件。\n安装过程是需要关闭显示服务器的")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("注销当前登录用户")]),this._v(" "),e("li",[this._v("按"),e("code",[this._v("Ctrl + Alt + F3")]),this._v("进入tty3，登录后执行")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("sudo systemctl stop lightdm  # 关闭显示服务器\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[e("code",[this._v("sudo sh <*.run文件>")]),this._v("\n--\x3e")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"二-安装cuda"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-安装cuda","aria-hidden":"true"}},[this._v("#")]),this._v(" 二 安装CUDA")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("blockquote",[_("p",[t._v("这一步是比较凶险的，所以请在操作前用 "),_("code",[t._v("深度备份还原工具")]),t._v(" 备份一下你的系统（一般只用备份 "),_("code",[t._v("/")]),t._v(" 分区），我是备份了 "),_("code",[t._v("home")]),t._v(" 以外的和系统相关的所有分区。中途被搞坏了一次，还好我机智，这是我第一次使用 "),_("code",[t._v("深度备份还原工具")]),t._v(" ，还是很给力的。")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[t._v("依照官方指南进行操作https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html\n下载 "),_("code",[t._v("Ubuntu")]),t._v(" 的 "),_("code",[t._v("runfile(local)")]),t._v("，别选 "),_("code",[t._v("deb")]),t._v(" 或者 "),_("code",[t._v("cluster")]),t._v("，装不上的。")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ol",[_("li",[t._v("注销当前登录用户")]),t._v(" "),_("li",[t._v("按 "),_("code",[t._v("Ctrl + Alt + F3")]),t._v(" 进入 "),_("code",[t._v("tty3")]),t._v(" ，登录后执行 "),_("code",[t._v("sudo systemctl stop lightdm # 关闭显示服务器")])]),t._v(" "),_("li",[t._v("执行"),_("code",[t._v("sudo sh <*.run文件>")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("安装的中途它会提示：\na. 移除比较老的驱动（深度的显卡驱动管理器安装的软件源里的驱动，奈何 "),e("code",[this._v("cuda")]),this._v(" 需要配合指定版本的驱动）\n"),e("code",[this._v("sudo apt autoremove nvidia*")]),this._v("\nb. 是否安装比较新的驱动，要选 "),e("code",[this._v("yes")]),this._v(" 哈，否则没办法开机了。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"三-安装cudnn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-安装cudnn","aria-hidden":"true"}},[this._v("#")]),this._v(" 三 安装CUDNN")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("依照官方指南进行操作https://docs.nvidia.com/deeplearning/sdk/cudnn-install/index.html#installlinux\n下载"),e("code",[this._v("cuDNN Library for Linux")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"参考链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考链接","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考链接")])}],!1,null,null,null);e.default=s.exports}}]);