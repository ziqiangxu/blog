(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{239:function(e,t,n){"use strict";n.r(t);var s=n(0),v=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("p",[e._v("我用的操作系统是deepin\n自己手残，卸载了某个软件，导致无法进入桌面环境，且没有办法进入其他tty。")]),e._v(" "),n("blockquote",[n("p",[e._v("既然我清晰地记得是因为卸载某个软件导致的这个问题，那么就有解决办法了。我只要把这个软件装回去就好啦！所以我需要能够使用apt工具")])]),e._v(" "),n("p",[e._v("还好一直保留者deepin的live系统\n进入live系统后我进行了如下操作：")]),e._v(" "),n("ol",[n("li",[e._v("将要修复系统的根分区挂载到"),n("code",[e._v("/mnt")]),e._v("目录下，如果还有其它分区都统一以"),n("code",[e._v("/mnt")]),e._v("为根目录进行挂载：")])]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("# 备注，sda5是我的根分区，sda6是我的home分区。请根据实际情况执行指令\nsudo mount /dev/sda5 /mnt\nsudo mount /dev/sda6 /mnt/home \n")])])]),n("p",[e._v("系统运行的时候还需要其它的一些虚拟分区【一些和设备有关的分区，这句话对不对各位看官自行斟酌】")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("# 这条命令依次将live系统的 /dev /dev/pts /proc /sys /run 分区挂载到要修复的\n# 系统的根目录，这些分区在系统运行的时候是需要的\nfor i in /dev /dev/pts /proc /sys /run; do sudo mount -B $i /mnt$i; done\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[n("p",[n("code",[e._v("chroot")]),e._v("到"),n("code",[e._v("mnt")]),e._v("目录下\n"),n("code",[e._v("sudo chroot /mnt")]),e._v("\n这步执行完了之后，就登录到了要修复的系统的root账户")])]),e._v(" "),n("li",[n("p",[e._v("安装我不小心删掉的软件\n在这一步，遇到了困难，"),n("code",[e._v("apt")]),e._v("没办法解析软件源的地址"),n("code",[e._v("packages.deepin.com")]),e._v("。ping了一下"),n("code",[e._v("packages.deepin.com")]),e._v("对应的ip地址，是通的，估计是"),n("code",[e._v("dns")]),e._v("的服务没启动吧，然后改了一下"),n("code",[e._v("/etc/hosts")]),e._v("，搞定")])])]),e._v(" "),n("p",[e._v("deepin是我用得最久的Linux桌面发行版。现在用的电脑已经一年多没有重装系统了")])])}],!1,null,null,null);t.default=v.exports}}]);