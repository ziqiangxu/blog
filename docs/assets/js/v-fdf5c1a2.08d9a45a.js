"use strict";(self.webpackChunkziqiangxu_github_io=self.webpackChunkziqiangxu_github_io||[]).push([[7029],{8282:(e,l,n)=>{n.r(l),n.d(l,{data:()=>d});const d={key:"v-fdf5c1a2",path:"/accumulation/%E6%8C%87%E5%AE%9AXMind%E5%92%8CDBeaver%E7%9A%84jdk%E7%89%88%E6%9C%AC.html",title:"指定 XMind 和 DBeaver 的 JDK 版本",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"第一步： 找到需要的 JDK 版本",slug:"第一步-找到需要的-jdk-版本",children:[]},{level:2,title:"第二步： 修改配置文件，使用指定的 JDK",slug:"第二步-修改配置文件-使用指定的-jdk",children:[]},{level:2,title:"Tips",slug:"tips",children:[]},{level:2,title:"macOS",slug:"macos",children:[]}],filePathRelative:"accumulation/指定XMind和DBeaver的jdk版本.md",git:{updatedTime:1595072993e3}}},852:(e,l,n)=>{n.r(l),n.d(l,{default:()=>b});var d=n(6252);const a=n.p+"assets/img/xmind-ini-file.5c00d6b9.png",i=n.p+"assets/img/xmind-ini-file2.3812d667.png",m=(0,d.Wm)("h1",{id:"指定-xmind-和-dbeaver-的-jdk-版本",tabindex:"-1"},[(0,d.Wm)("a",{class:"header-anchor",href:"#指定-xmind-和-dbeaver-的-jdk-版本","aria-hidden":"true"},"#"),(0,d.Uk)(" 指定 "),(0,d.Wm)("code",null,"XMind"),(0,d.Uk)(" 和 "),(0,d.Wm)("code",null,"DBeaver"),(0,d.Uk)(" 的 "),(0,d.Wm)("code",null,"JDK"),(0,d.Uk)(" 版本")],-1),u=(0,d.Wm)("p",null,[(0,d.Uk)("因为 "),(0,d.Wm)("code",null,"Linux"),(0,d.Uk)(" （我的是 "),(0,d.Wm)("code",null,"Deepin"),(0,d.Uk)("）系统安装了新版本的 "),(0,d.Wm)("code",null,"JDK"),(0,d.Uk)("，导致 "),(0,d.Wm)("code",null,"XMind"),(0,d.Uk)(" 和 "),(0,d.Wm)("code",null,"DBeaver"),(0,d.Uk)(" 无法启动（截止2017.12.19他们依赖于 "),(0,d.Wm)("code",null,"JDK 1.8"),(0,d.Uk)("，就是 "),(0,d.Wm)("code",null,"Java 8"),(0,d.Uk)(" 的 "),(0,d.Wm)("code",null,"JDK"),(0,d.Uk)("）。当然你的电脑安装了新版的 "),(0,d.Wm)("code",null,"JDK"),(0,d.Uk)("，肯定是有原因的，总不能把它给卸载了吧。所以我们就需要给这两个软件指定一个匹配的 "),(0,d.Wm)("code",null,"JDK"),(0,d.Uk)(" 版本。 下面以 "),(0,d.Wm)("code",null,"XMind"),(0,d.Uk)(" 为例，"),(0,d.Wm)("code",null,"DBeaver"),(0,d.Uk)(" 进行类似的操作即可")],-1),c=(0,d.Wm)("h2",{id:"第一步-找到需要的-jdk-版本",tabindex:"-1"},[(0,d.Wm)("a",{class:"header-anchor",href:"#第一步-找到需要的-jdk-版本","aria-hidden":"true"},"#"),(0,d.Uk)(" 第一步： 找到需要的 "),(0,d.Wm)("code",null,"JDK"),(0,d.Uk)(" 版本")],-1),r=(0,d.Wm)("p",null,[(0,d.Uk)("找到 "),(0,d.Wm)("code",null,"JDK"),(0,d.Uk)(" 的安装路径，我的是在这里64位的哦： "),(0,d.Wm)("code",null,"/usr/lib/jvm/java-8-openjdk-amd64/bin"),(0,d.Uk)(" 你也可以直接在文件管理器搜索 "),(0,d.Wm)("code",null,"JDK")],-1),s=(0,d.Wm)("h2",{id:"第二步-修改配置文件-使用指定的-jdk",tabindex:"-1"},[(0,d.Wm)("a",{class:"header-anchor",href:"#第二步-修改配置文件-使用指定的-jdk","aria-hidden":"true"},"#"),(0,d.Uk)(" 第二步： 修改配置文件，使用指定的 "),(0,d.Wm)("code",null,"JDK")],-1),W=(0,d.Wm)("p",null,[(0,d.Uk)("用 "),(0,d.Wm)("code",null,"root"),(0,d.Uk)(" 用户编辑 "),(0,d.Wm)("code",null,"XMind"),(0,d.Uk)(" 的 "),(0,d.Wm)("code",null,"XMind.ini"),(0,d.Uk)(" 文件 我的是在这里哦： "),(0,d.Wm)("code",null,"/usr/share/xmind/XMind_amd64/XMind.ini"),(0,d.Uk)(" 加入两行(指定 "),(0,d.Wm)("code",null,"Java"),(0,d.Uk)(" 虚拟机)")],-1),o=(0,d.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,d.Wm)("pre",{class:"language-bash"},[(0,d.Wm)("code",null,"-vm\n/usr/lib/jvm/java-8-openjdk-amd64/bin\n")]),(0,d.Wm)("div",{class:"line-numbers"},[(0,d.Wm)("span",{class:"line-number"},"1"),(0,d.Wm)("br"),(0,d.Wm)("span",{class:"line-number"},"2"),(0,d.Wm)("br")])],-1),t=(0,d.Wm)("p",null,[(0,d.Wm)("img",{src:a,alt:"深度截图_选择区域_20171219192153.png"})],-1),k=(0,d.Wm)("h2",{id:"tips",tabindex:"-1"},[(0,d.Wm)("a",{class:"header-anchor",href:"#tips","aria-hidden":"true"},"#"),(0,d.Uk)(" Tips")],-1),h=(0,d.Wm)("p",null,[(0,d.Uk)("注意这两行要加在 "),(0,d.Wm)("code",null,"-vmargs"),(0,d.Uk)(" 之前（"),(0,d.Wm)("code",null,"-vmargs"),(0,d.Uk)(" 用于指定虚拟机参数）")],-1),p=(0,d.Wm)("p",null,[(0,d.Wm)("img",{src:i,alt:"image.png"})],-1),U=(0,d.Wm)("p",null,"重新打开软件，愉快的使用吧！",-1),v=(0,d.Wm)("h2",{id:"macos",tabindex:"-1"},[(0,d.Wm)("a",{class:"header-anchor",href:"#macos","aria-hidden":"true"},"#"),(0,d.Uk)(),(0,d.Wm)("code",null,"macOS")],-1),g=(0,d.Wm)("p",null,[(0,d.Wm)("code",null,"macOS"),(0,d.Uk)(" 下也是一样的解决办法，相关的配置文件在 "),(0,d.Wm)("code",null,"/Applications/DBeaver.app/Contents/Eclipse/dbeaver.ini")],-1),b={render:function(e,l){return(0,d.wg)(),(0,d.j4)(d.HY,null,[m,u,c,r,s,W,o,t,k,h,p,U,v,g],64)}}}}]);