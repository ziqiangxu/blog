"use strict";(self.webpackChunkziqiangxu_github_io=self.webpackChunkziqiangxu_github_io||[]).push([[4004],{5102:(e,l,n)=>{n.r(l),n.d(l,{data:()=>s});const s={key:"v-a3ebe2f4",path:"/accumulation/Deepin%E4%BC%91%E7%9C%A0.html",title:"Deepin 如何休眠",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"情况一",slug:"情况一",children:[]},{level:2,title:"情况二",slug:"情况二",children:[{level:3,title:"1. 创建一个swap文件",slug:"_1-创建一个swap文件",children:[]},{level:3,title:"2. 进行swap文件相关设置",slug:"_2-进行swap文件相关设置",children:[]},{level:3,title:"3. 安装和配置相关软件",slug:"_3-安装和配置相关软件",children:[]}]},{level:2,title:"测试休眠",slug:"测试休眠",children:[]},{level:2,title:"附录",slug:"附录",children:[]}],filePathRelative:"accumulation/Deepin休眠.md",git:{updatedTime:1595072993e3}}},954:(e,l,n)=>{n.r(l),n.d(l,{default:()=>ae});var s=n(6252);const a=n.p+"assets/img/deepin-hibernate-msg-box.1a23d7f9.png",m=n.p+"assets/img/deepin-hibernate-select-swap-file.c6c9db55.png",u=n.p+"assets/img/deepin-hibernate-is-encrypt-data.ea7be053.png",i=(0,s.Wm)("h1",{id:"deepin-如何休眠",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#deepin-如何休眠","aria-hidden":"true"},"#"),(0,s.Uk)(),(0,s.Wm)("code",null,"Deepin"),(0,s.Uk)(" 如何休眠")],-1),r={href:"https://www.deepin.org",target:"_blank",rel:"noopener noreferrer"},p=(0,s.Uk)("deepin官网"),W=(0,s.Uk)(" 休眠这个功能还是很酷很实用的，对于 "),d=(0,s.Wm)("code",null,"Linux",-1),c=(0,s.Uk)(" 系统，休眠一般就是把内存中的数据写入硬盘（"),t=(0,s.Wm)("code",null,"swap",-1),o=(0,s.Uk)("文件），然后关机。在下一次开机的时候将数据重新载入内存，让你快速回到上一次的工作状态，这在你开启了大量的程序但需要暂停工作的时候尤其好用。"),b=(0,s.Wm)("h2",{id:"情况一",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#情况一","aria-hidden":"true"},"#"),(0,s.Uk)(" 情况一")],-1),k=(0,s.Wm)("p",null,[(0,s.Uk)("如果你的电脑有 "),(0,s.Wm)("code",null,"swap"),(0,s.Uk)(" 分区， "),(0,s.Wm)("code",null,"deepin"),(0,s.Uk)(" 会探测到，关机的时候会有休眠选项了，这个功能终于加到关机菜单里了，给 "),(0,s.Wm)("code",null,"deepin"),(0,s.Uk)(" 点赞。")],-1),w=(0,s.Wm)("p",null,[(0,s.Wm)("s",null,"一般来说，如果你有一个可以正常使用的swap分区，只需要在终端执行"),(0,s.Wm)("s",null,[(0,s.Wm)("code",null,"systemctl hibernate")]),(0,s.Wm)("s",null,"就可以休眠了。")],-1),h=(0,s.Wm)("p",null,[(0,s.Wm)("strong",null,"当然，也有例外"),(0,s.Uk)(", 如果你休眠之后开机发现你的电脑并没有恢复现场，则需要指定一下启动的磁盘（从swap分区启动），操作方法如下：")],-1),U=(0,s.Wm)("blockquote",null,[(0,s.Wm)("p",null,[(0,s.Uk)("修改/etc/default/grub这个文件中的相关内容 "),(0,s.Wm)("code",null,'GRUB_CMDLINE_LINUX_DEFAULT="resume=/dev/sda3 quiet"'),(0,s.Uk)(" 其中 "),(0,s.Wm)("code",null,"/dev/sda3"),(0,s.Uk)(" 改为你的 "),(0,s.Wm)("code",null,"swap"),(0,s.Uk)(" 分区对应的标志即可（推荐使用 "),(0,s.Wm)("code",null,"gparted"),(0,s.Uk)(" 查看） 然后再执行 "),(0,s.Wm)("code",null,"sudo update-grub")])],-1),g=(0,s.Wm)("h2",{id:"情况二",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#情况二","aria-hidden":"true"},"#"),(0,s.Uk)(" 情况二")],-1),f=(0,s.Uk)("如果你没办法从硬盘划分一个swap分区，你可以通过使用swap文件来进行休眠。 "),v={href:"https://wiki.debian.org/Hibernation/Hibernate_Without_Swap_Partition",target:"_blank",rel:"noopener noreferrer"},_=(0,s.Uk)("本教程参考了Debian的wiki"),x=(0,s.Uk)(" 大体思路：创建swap文件--\x3e配置swap文件--\x3e安装uswsusp--\x3e配置uswsusp"),y=(0,s.Wm)("h3",{id:"_1-创建一个swap文件",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#_1-创建一个swap文件","aria-hidden":"true"},"#"),(0,s.Uk)(" 1. 创建一个swap文件")],-1),D=(0,s.Wm)("div",{class:"language-copy ext-copy line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-copy"},[(0,s.Wm)("code",null,"fallocate -l 256m /swap\nmkswap /swap\n")]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"2"),(0,s.Wm)("br")])],-1),L=(0,s.Wm)("p",null,"“256”是指以MB为单位的大小（其后的'm'）。将其设置为RAM的至少一半大小(这个是debian wiki给定的数据，我建议设置为至少设置为内存相同大小)。“/swap”是交换文件的路径。它可以位于任何分区（例如root或home）。",-1),C=(0,s.Wm)("h3",{id:"_2-进行swap文件相关设置",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#_2-进行swap文件相关设置","aria-hidden":"true"},"#"),(0,s.Uk)(" 2. 进行swap文件相关设置")],-1),q=(0,s.Wm)("ul",null,[(0,s.Wm)("li",null,[(0,s.Wm)("p",null,[(0,s.Uk)("挂载swap文件 将此行添加到/etc/fstab文件中： "),(0,s.Wm)("code",null,"/swap swap swap defaults 0 0")])]),(0,s.Wm)("li",null,[(0,s.Wm)("p",null,[(0,s.Uk)("减少使用swap文件 终端执行 "),(0,s.Wm)("code",null,"sudo sysctl -w vm.swappiness = 1"),(0,s.Uk)(" 并在/etc/sysctl.d中创建一个名为local.conf的文件，为了使vm.swappiness保持不变，文件内容如下:")])])],-1),E=(0,s.Wm)("div",{class:"language-copy ext-copy line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-copy"},[(0,s.Wm)("code",null,"vm.swappiness = 1\n")]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),A={href:"http://blog.sina.com.cn/s/blog_13cc013b50102wskd.html",target:"_blank",rel:"noopener noreferrer"},R=(0,s.Uk)("vm.swappiness扩展知识"),B=(0,s.Uk)(" 减少内核对 "),I=(0,s.Wm)("code",null,"swap",-1),M=(0,s.Uk)(" 的使用这一步主要是针对使用机械硬盘的同学，因为在机械硬盘中大量对 "),N=(0,s.Wm)("code",null,"swap",-1),z=(0,s.Uk)(" 进行读写会拖慢系统的速度， Debian wiki 里面写的是停止内核使用 "),H=(0,s.Wm)("code",null,"swap",-1),S=(0,s.Uk)(" 文件，可能是原作者笔误，也可能是他瞎说的🤗"),T=(0,s.Wm)("ul",null,[(0,s.Wm)("li",null,[(0,s.Uk)("激活swap文件： 终端执行 "),(0,s.Wm)("code",null,"sudo swapon /swap")])],-1),F=(0,s.Wm)("h3",{id:"_3-安装和配置相关软件",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#_3-安装和配置相关软件","aria-hidden":"true"},"#"),(0,s.Uk)(" 3. 安装和配置相关软件")],-1),G=(0,s.Wm)("p",null,"使用uswsusp这个软件，这是linux内核使用swap文件代替swap分区来进行挂起（休眠）的方法，并且还支持压缩和加密等功能。",-1),P=(0,s.Wm)("ul",null,[(0,s.Wm)("li",null,[(0,s.Wm)("p",null,[(0,s.Uk)("安装uswsusp： 终端执行 "),(0,s.Wm)("code",null,"aptitude install uswsusp")])]),(0,s.Wm)("li",null,[(0,s.Wm)("p",null,[(0,s.Uk)("配置uswsusp： 终端执行 "),(0,s.Wm)("code",null,"sudo dpkg-reconfigure -pmedium uswsusp"),(0,s.Uk)("，然后会出现如下提示框 "),(0,s.Wm)("img",{src:a,alt:"深度截图_选择区域_20180605160224.png"}),(0,s.Uk)(" 从这个问题开始全部选择确定，直到出现：")])])],-1),X=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:m,alt:"选择swap文件"}),(0,s.Uk)(" 此处选择你要使用的swap文件，注：我这里是/var/swapfile这个文件")],-1),j=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:u,alt:"选择是否对休眠写入swap的数据加密"}),(0,s.Uk)(" 根据需要选择就好（需要知晓的是，开启加密功能之后休眠的启动所消耗的时间会增加）。如果选择加密的话，它会提示你设定一个密码")],-1),O=(0,s.Wm)("ul",null,[(0,s.Wm)("li",null,"对uswsusp进行进一步配置")],-1),Y=(0,s.Wm)("p",null,"一般配置文件/etc/uswsusp.conf内容如下所示：",-1),J=(0,s.Wm)("div",{class:"language-copy ext-copy line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-copy"},[(0,s.Wm)("code",null,"＃/etc/uswsusp.conf（8） -- Configuration file for s2disk / s2both\n\nresume device= /swap\n\ncompress = y\n\nearly writeout= y\n\nimage size= 238941634\n\nRSA key file = /etc/uswsusp.key\n\nshutdown method = platform\n\nresume offset = 8288\n\n# encrypt = y 如果你选择了对数据加密，则会有这一行\n")]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"2"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"3"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"4"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"5"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"6"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"7"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"8"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"9"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"10"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"11"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"12"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"13"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"14"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"15"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"16"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"17"),(0,s.Wm)("br")])],-1),K=(0,s.Wm)("p",null,[(0,s.Wm)("code",null,"resume offset = 8288"),(0,s.Uk)(" 是交换文件实际存放的地方（应该是硬盘的物理地址）。你可以终端执行 "),(0,s.Wm)("code",null,"swap-offset /swap"),(0,s.Uk)(" 获得这个值。 "),(0,s.Wm)("code",null,"resume device"),(0,s.Uk)(" 必须是分区而不是交换文件。一般这行的值会在上一步完成后变成你的 "),(0,s.Wm)("code",null,"swap"),(0,s.Uk)(" 文件的路径，需要改成你的 "),(0,s.Wm)("code",null,"swap"),(0,s.Uk)(" 文件所在的分区，如 "),(0,s.Wm)("code",null,"/dev/sda1")],-1),Q=(0,s.Wm)("p",null,[(0,s.Uk)("编辑 "),(0,s.Wm)("code",null,"/etc/uswsusp.conf"),(0,s.Uk)(" 文件后： 终端执行 "),(0,s.Wm)("code",null,"sudo update-initramfs -u")],-1),V=(0,s.Wm)("ol",null,[(0,s.Wm)("li",null,[(0,s.Uk)("默认启动的配置 为了让系统启动时，默认从swap文件加载数据。将 "),(0,s.Wm)("code",null,"/etc/default/grub"),(0,s.Uk)(" 文件中的相关设置进行修改： "),(0,s.Wm)("code",null,'GRUB_CMDLINE_LINUX_DEFAULT ="resume = /dev/sda1 quiet"'),(0,s.Uk)(" 其中 "),(0,s.Wm)("code",null,"/dev/sda1"),(0,s.Uk)(" 是交换文件所在的分区。 终端执行 "),(0,s.Wm)("code",null,"sudo update-grub")])],-1),Z=(0,s.Wm)("h2",{id:"测试休眠",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#测试休眠","aria-hidden":"true"},"#"),(0,s.Uk)(" 测试休眠")],-1),$=(0,s.Wm)("p",null,[(0,s.Uk)("终端执行："),(0,s.Wm)("code",null,"sudo s2disk")],-1),ee=(0,s.Wm)("p",null,[(0,s.Wm)("strong",null,"注"),(0,s.Uk)("：配置成功之后，如果再次修改了 "),(0,s.Wm)("code",null,"uswsusp"),(0,s.Uk)(" 的设置需要执行")],-1),le=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" update-initramfs -u\n"),(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(),(0,s.Wm)("span",{class:"token function"},"update-grub"),(0,s.Uk)("\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"2"),(0,s.Wm)("br")])],-1),ne=(0,s.Wm)("h2",{id:"附录",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#附录","aria-hidden":"true"},"#"),(0,s.Uk)(" 附录")],-1),se=(0,s.Wm)("p",null,[(0,s.Uk)("如果你的磁盘分区结构变了，比如 "),(0,s.Wm)("code",null,"sda3"),(0,s.Uk)(" 变成了 "),(0,s.Wm)("code",null,"sda4"),(0,s.Uk)("，按照上面步骤再来一遍就好啦（因为需要更新 "),(0,s.Wm)("code",null,"grub"),(0,s.Uk)(" 和 "),(0,s.Wm)("code",null,"uswsusp.conf"),(0,s.Uk)("）。")],-1),ae={render:function(e,l){const n=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.j4)(s.HY,null,[i,(0,s.Wm)("p",null,[(0,s.Wm)("a",r,[p,(0,s.Wm)(n)]),W,d,c,t,o]),b,k,w,h,U,g,(0,s.Wm)("p",null,[f,(0,s.Wm)("a",v,[_,(0,s.Wm)(n)]),x]),y,D,L,C,q,E,(0,s.Wm)("blockquote",null,[(0,s.Wm)("p",null,[(0,s.Wm)("a",A,[R,(0,s.Wm)(n)]),B,I,M,N,z,H,S])]),T,F,G,P,X,j,O,Y,J,K,Q,V,Z,$,ee,le,ne,se],64)}}}}]);