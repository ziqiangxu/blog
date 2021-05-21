(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{362:function(s,e,a){s.exports=a.p+"assets/img/deepin-hibernate-msg-box.4abdc79b.png"},363:function(s,e,a){s.exports=a.p+"assets/img/deepin-hibernate-select-swap-file.e7fe24e3.png"},364:function(s,e,a){s.exports=a.p+"assets/img/deepin-hibernate-is-encrypt-data.ba5c385b.png"},432:function(s,e,a){"use strict";a.r(e);var t=a(45),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"deepin-如何休眠"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deepin-如何休眠"}},[s._v("#")]),s._v(" "),t("code",[s._v("Deepin")]),s._v(" 如何休眠")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.deepin.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("deepin官网"),t("OutboundLink")],1),s._v("\n休眠这个功能还是很酷很实用的，对于 "),t("code",[s._v("Linux")]),s._v(" 系统，休眠一般就是把内存中的数据写入硬盘（"),t("code",[s._v("swap")]),s._v("文件），然后关机。在下一次开机的时候将数据重新载入内存，让你快速回到上一次的工作状态，这在你开启了大量的程序但需要暂停工作的时候尤其好用。")]),s._v(" "),t("h2",{attrs:{id:"情况一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#情况一"}},[s._v("#")]),s._v(" 情况一")]),s._v(" "),t("p",[s._v("如果你的电脑有 "),t("code",[s._v("swap")]),s._v(" 分区， "),t("code",[s._v("deepin")]),s._v(" 会探测到，关机的时候会有休眠选项了，这个功能终于加到关机菜单里了，给 "),t("code",[s._v("deepin")]),s._v(" 点赞。")]),s._v(" "),t("p",[t("s",[s._v("一般来说，如果你有一个可以正常使用的swap分区，只需要在终端执行")]),s._v(" "),t("s",[t("code",[s._v("systemctl hibernate")])]),s._v(" "),t("s",[s._v("就可以休眠了。")])]),s._v(" "),t("p",[t("strong",[s._v("当然，也有例外")]),s._v(", 如果你休眠之后开机发现你的电脑并没有恢复现场，则需要指定一下启动的磁盘（从swap分区启动），操作方法如下：")]),s._v(" "),t("blockquote",[t("p",[s._v("修改/etc/default/grub这个文件中的相关内容\n"),t("code",[s._v('GRUB_CMDLINE_LINUX_DEFAULT="resume=/dev/sda3 quiet"')]),s._v("\n其中 "),t("code",[s._v("/dev/sda3")]),s._v(" 改为你的 "),t("code",[s._v("swap")]),s._v(" 分区对应的标志即可（推荐使用 "),t("code",[s._v("gparted")]),s._v(" 查看）\n然后再执行 "),t("code",[s._v("sudo update-grub")])])]),s._v(" "),t("h2",{attrs:{id:"情况二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#情况二"}},[s._v("#")]),s._v(" 情况二")]),s._v(" "),t("p",[s._v("如果你没办法从硬盘划分一个swap分区，你可以通过使用swap文件来进行休眠。\n"),t("a",{attrs:{href:"https://wiki.debian.org/Hibernation/Hibernate_Without_Swap_Partition",target:"_blank",rel:"noopener noreferrer"}},[s._v("本教程参考了Debian的wiki"),t("OutboundLink")],1),s._v("\n大体思路：创建swap文件--\x3e配置swap文件--\x3e安装uswsusp--\x3e配置uswsusp")]),s._v(" "),t("h3",{attrs:{id:"_1-创建一个swap文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建一个swap文件"}},[s._v("#")]),s._v(" 1. 创建一个swap文件")]),s._v(" "),t("div",{staticClass:"language-copy-to-clipboard line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("fallocate -l 256m /swap\nmkswap /swap\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("“256”是指以MB为单位的大小（其后的'm'）。将其设置为RAM的至少一半大小(这个是debian wiki给定的数据，我建议设置为至少设置为内存相同大小)。“/swap”是交换文件的路径。它可以位于任何分区（例如root或home）。")]),s._v(" "),t("h3",{attrs:{id:"_2-进行swap文件相关设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-进行swap文件相关设置"}},[s._v("#")]),s._v(" 2. 进行swap文件相关设置")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("挂载swap文件\n将此行添加到/etc/fstab文件中：\n"),t("code",[s._v("/swap swap swap defaults 0 0")])])]),s._v(" "),t("li",[t("p",[s._v("减少使用swap文件\n终端执行 "),t("code",[s._v("sudo sysctl -w vm.swappiness = 1")]),s._v("\n并在/etc/sysctl.d中创建一个名为local.conf的文件，为了使vm.swappiness保持不变，文件内容如下:")])])]),s._v(" "),t("div",{staticClass:"language-copy-to-clipboard line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("vm.swappiness = 1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[t("a",{attrs:{href:"http://blog.sina.com.cn/s/blog_13cc013b50102wskd.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("vm.swappiness扩展知识"),t("OutboundLink")],1),s._v("\n减少内核对 "),t("code",[s._v("swap")]),s._v(" 的使用这一步主要是针对使用机械硬盘的同学，因为在机械硬盘中大量对 "),t("code",[s._v("swap")]),s._v(" 进行读写会拖慢系统的速度， Debian wiki 里面写的是停止内核使用 "),t("code",[s._v("swap")]),s._v(" 文件，可能是原作者笔误，也可能是他瞎说的🤗")])]),s._v(" "),t("ul",[t("li",[s._v("激活swap文件：\n终端执行 "),t("code",[s._v("sudo swapon /swap")])])]),s._v(" "),t("h3",{attrs:{id:"_3-安装和配置相关软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装和配置相关软件"}},[s._v("#")]),s._v(" 3. 安装和配置相关软件")]),s._v(" "),t("p",[s._v("使用uswsusp这个软件，这是linux内核使用swap文件代替swap分区来进行挂起（休眠）的方法，并且还支持压缩和加密等功能。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("安装uswsusp：\n终端执行 "),t("code",[s._v("aptitude install uswsusp")])])]),s._v(" "),t("li",[t("p",[s._v("配置uswsusp：\n终端执行 "),t("code",[s._v("sudo dpkg-reconfigure -pmedium uswsusp")]),s._v("，然后会出现如下提示框\n"),t("img",{attrs:{src:a(362),alt:"深度截图_选择区域_20180605160224.png"}}),s._v("\n从这个问题开始全部选择确定，直到出现：")])])]),s._v(" "),t("p",[t("img",{attrs:{src:a(363),alt:"选择swap文件"}}),s._v("\n此处选择你要使用的swap文件，注：我这里是/var/swapfile这个文件")]),s._v(" "),t("p",[t("img",{attrs:{src:a(364),alt:"选择是否对休眠写入swap的数据加密"}}),s._v("\n根据需要选择就好（需要知晓的是，开启加密功能之后休眠的启动所消耗的时间会增加）。如果选择加密的话，它会提示你设定一个密码")]),s._v(" "),t("ul",[t("li",[s._v("对uswsusp进行进一步配置")])]),s._v(" "),t("p",[s._v("一般配置文件/etc/uswsusp.conf内容如下所示：")]),s._v(" "),t("div",{staticClass:"language-copy-to-clipboard line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("＃/etc/uswsusp.conf（8） -- Configuration file for s2disk / s2both\n\nresume device= /swap\n\ncompress = y\n\nearly writeout= y\n\nimage size= 238941634\n\nRSA key file = /etc/uswsusp.key\n\nshutdown method = platform\n\nresume offset = 8288\n\n# encrypt = y 如果你选择了对数据加密，则会有这一行\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[t("code",[s._v("resume offset = 8288")]),s._v(" 是交换文件实际存放的地方（应该是硬盘的物理地址）。你可以终端执行 "),t("code",[s._v("swap-offset /swap")]),s._v(" 获得这个值。\n"),t("code",[s._v("resume device")]),s._v(" 必须是分区而不是交换文件。一般这行的值会在上一步完成后变成你的 "),t("code",[s._v("swap")]),s._v(" 文件的路径，需要改成你的 "),t("code",[s._v("swap")]),s._v(" 文件所在的分区，如 "),t("code",[s._v("/dev/sda1")])]),s._v(" "),t("p",[s._v("编辑 "),t("code",[s._v("/etc/uswsusp.conf")]),s._v(" 文件后：\n终端执行 "),t("code",[s._v("sudo update-initramfs -u")])]),s._v(" "),t("ol",[t("li",[s._v("默认启动的配置\n为了让系统启动时，默认从swap文件加载数据。将 "),t("code",[s._v("/etc/default/grub")]),s._v(" 文件中的相关设置进行修改：\n"),t("code",[s._v('GRUB_CMDLINE_LINUX_DEFAULT ="resume = /dev/sda1 quiet"')]),s._v("\n其中 "),t("code",[s._v("/dev/sda1")]),s._v(" 是交换文件所在的分区。\n终端执行 "),t("code",[s._v("sudo update-grub")])])]),s._v(" "),t("h2",{attrs:{id:"测试休眠"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试休眠"}},[s._v("#")]),s._v(" 测试休眠")]),s._v(" "),t("p",[s._v("终端执行："),t("code",[s._v("sudo s2disk")])]),s._v(" "),t("p",[t("strong",[s._v("注")]),s._v("：配置成功之后，如果再次修改了 "),t("code",[s._v("uswsusp")]),s._v(" 的设置需要执行")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" update-initramfs -u\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("update-grub")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"附录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附录"}},[s._v("#")]),s._v(" 附录")]),s._v(" "),t("p",[s._v("如果你的磁盘分区结构变了，比如 "),t("code",[s._v("sda3")]),s._v(" 变成了 "),t("code",[s._v("sda4")]),s._v("，按照上面步骤再来一遍就好啦（因为需要更新 "),t("code",[s._v("grub")]),s._v(" 和 "),t("code",[s._v("uswsusp.conf")]),s._v("）。")]),s._v(" "),t("comment-comment")],1)}),[],!1,null,null,null);e.default=n.exports}}]);