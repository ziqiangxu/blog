(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{234:function(t,e,s){"use strict";s.r(e);var n=s(0),i=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),s("p",[t._v("系统运行的时候还需要其它的一些虚拟分区【一些和设备有关的分区，这句话对不对各位看官自行斟酌】")]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),s("comment-comment")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"用-chroot-修复-linux-系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用-chroot-修复-linux-系统","aria-hidden":"true"}},[this._v("#")]),this._v(" 用 "),e("code",[this._v("chroot")]),this._v(" 修复 "),e("code",[this._v("Linux")]),this._v(" 系统")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我用的操作系统是 "),e("code",[this._v("Deepin")]),this._v("\n自己手残，卸载了某个软件，导致无法进入桌面环境，且没有办法进入其他tty。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("既然我清晰地记得是因为卸载某个软件导致的这个问题，那么就有解决办法了。我只要把这个软件装回去就好啦！所以我需要能够使用apt工具")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("还好一直保留者 "),e("code",[this._v("Deepin")]),this._v(" 的 "),e("code",[this._v("live")]),this._v(" 系统\n进入 "),e("code",[this._v("live")]),this._v(" 系统后我进行了如下操作：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"步骤概览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤概览","aria-hidden":"true"}},[this._v("#")]),this._v(" 步骤概览")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("将要修复系统的根分区挂载到"),s("code",[t._v("/mnt")]),t._v("目录下，如果还有其它分区都统一以"),s("code",[t._v("/mnt")]),t._v("为根目录进行挂载")]),t._v(" "),s("li",[s("code",[t._v("chroot")]),t._v("到"),s("code",[t._v("mnt")]),t._v("目录下")]),t._v(" "),s("li",[t._v("安装我不小心删掉的软件")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"第一步：挂载要修复系统的分区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一步：挂载要修复系统的分区","aria-hidden":"true"}},[this._v("#")]),this._v(" 第一步：挂载要修复系统的分区")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 备注，sda5是我的根分区，sda6是我的home分区。请根据实际情况执行指令")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" /dev/sda5 /mnt\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" /dev/sda6 /mnt/home \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# 这条命令依次将live系统的 /dev /dev/pts /proc /sys /run 分区挂载到要修复的\n# 系统的根目录，这些分区在系统运行的时候是需要的\nfor i in /dev /dev/pts /proc /sys /run; do sudo mount -B $i /mnt$i; done\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"第二步：-chroot到mnt目录下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二步：-chroot到mnt目录下","aria-hidden":"true"}},[this._v("#")]),this._v(" 第二步： "),e("code",[this._v("chroot")]),this._v("到"),e("code",[this._v("mnt")]),this._v("目录下")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("sudo chroot /mnt")]),this._v("\n这步执行完了之后，就登录到了要修复的系统的 "),e("code",[this._v("root")]),this._v(" 账户")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"第三步：安装我不小心删掉的软件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第三步：安装我不小心删掉的软件","aria-hidden":"true"}},[this._v("#")]),this._v(" 第三步：安装我不小心删掉的软件")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("在这一步，遇到了困难，"),s("code",[t._v("apt")]),t._v(" 没办法解析软件源的地址"),s("code",[t._v("packages.deepin.com")]),t._v("。ping了一下"),s("code",[t._v("packages.deepin.com")]),t._v("对应的 "),s("code",[t._v("ip")]),t._v(" 地址，是通的，估计是 "),s("code",[t._v("dns")]),t._v(" 的服务没启动吧，然后改了一下 "),s("code",[t._v("/etc/hosts")]),t._v("，搞定")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"题外话"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#题外话","aria-hidden":"true"}},[this._v("#")]),this._v(" 题外话")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("Deepin")]),this._v(" 是我用得最久的 "),e("code",[this._v("Linux")]),this._v(" 桌面发行版。现在用的电脑已经一年多没有重装系统了")])}],!1,null,null,null);e.default=i.exports}}]);