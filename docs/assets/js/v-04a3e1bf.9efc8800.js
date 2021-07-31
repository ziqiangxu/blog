"use strict";(self.webpackChunkziqiangxu_github_io=self.webpackChunkziqiangxu_github_io||[]).push([[6169],{522:(e,d,o)=>{o.r(d),o.d(d,{data:()=>c});const c={key:"v-04a3e1bf",path:"/accumulation/Deepin%E6%90%AD%E5%BB%BA8086%E6%B1%87%E7%BC%96%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83.html",title:"Deepin 搭建 8086 汇编开发环境",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装模拟软件",slug:"安装模拟软件",children:[]},{level:2,title:"复制汇编需要用到的工具到dos的C盘",slug:"复制汇编需要用到的工具到dos的c盘",children:[]},{level:2,title:"参考链接",slug:"参考链接",children:[]}],filePathRelative:"accumulation/Deepin搭建8086汇编开发环境.md",git:{updatedTime:1621614861e3}}},3905:(e,d,o)=>{o.r(d),o.d(d,{default:()=>B});var c=o(6252);const n=(0,c.uE)('<h1 id="deepin-搭建-8086-汇编开发环境" tabindex="-1"><a class="header-anchor" href="#deepin-搭建-8086-汇编开发环境" aria-hidden="true">#</a> <code>Deepin</code> 搭建 8086 汇编开发环境</h1><p>最近通过王爽编写的《汇编语言（第3版）》在学习8086汇编，王爽被誉为著名的计算机科学教育家、 <strong>哲学家</strong> 果然是名不虚传啊，他编写的教材真是循序渐进，对新手非常友好，个人十分推荐使用本书进行初步学习。之前一直都是在 <code>Windows</code> 下用<code>masm32</code> 进行模拟。然而我作为一个以 <code>deepin</code> 为主力系统的人，自然需要研究一下如何在 <code>Linux</code> 下搭建 <code>8086</code> 汇编开发环境，目前在 <code>Linux</code> 上的使用体验要优于 <code>Windows</code>，主要是软件在对光标的处理上。网上找了找资料，下面进行整理总结。</p><blockquote><p>注：本文讲到的 <code>dos</code> 特指 <code>dosemu</code> 软件模拟的 <code>dos</code> 版本(应该是 <code>freedos</code>)</p></blockquote><h2 id="安装模拟软件" tabindex="-1"><a class="header-anchor" href="#安装模拟软件" aria-hidden="true">#</a> 安装模拟软件</h2><p><code>sudo apt install dosemu</code></p><p>然后终端执行 <code>dosemu</code> 即可启动 <code>dos</code> （PS:在 <code>Linux</code> 看到这样风格的窗口还是头一遭,不算在虚拟机虚拟 <code>Windows</code>）</p><blockquote><p>简短的介绍 进入 <code>dos</code> 后，执行 <code>？</code> 可以输出帮助信息 执行 <code>ver</code> 可以看到 <code>dos</code> 系统的信息 系统自带了 <code>debug</code> 程序和 <code>edit</code> 程序</p></blockquote><h2 id="复制汇编需要用到的工具到dos的c盘" tabindex="-1"><a class="header-anchor" href="#复制汇编需要用到的工具到dos的c盘" aria-hidden="true">#</a> 复制汇编需要用到的工具到dos的C盘</h2>',8),l=(0,c.Uk)("系统的 "),a=(0,c.Wm)("code",null,"C",-1),t=(0,c.Uk)(" 盘对应在 "),i=(0,c.Wm)("code",null,"~/.dosemu/drive_c",-1),r=(0,c.Uk)(" 目录 然后下载"),s={href:"https://github.com/ziqiangxu/sources1/raw/master/assume/dosbox.zip",target:"_blank",rel:"noopener noreferrer"},u=(0,c.Uk)("工具包"),h=(0,c.Uk)("（包含 "),m=(0,c.Wm)("code",null,"link.exe",-1),p=(0,c.Uk)(" 和 "),k=(0,c.Wm)("code",null,"masm.exe",-1),b=(0,c.Uk)(" ），将其解压到drive_c这个目录之后，只需要在dos里边键入程序的路径就可以使用他们了 （另： "),W=(0,c.Wm)("code",null,"sudo apt install dosbox",-1),f=(0,c.Uk)(" 可以安装 "),g=(0,c.Wm)("code",null,"dosbox",-1),x=(0,c.Uk)(" 这个软件，也可以模拟 "),U=(0,c.Wm)("code",null,"dos",-1),w=(0,c.Uk)("。）"),E=(0,c.Wm)("h2",{id:"参考链接",tabindex:"-1"},[(0,c.Wm)("a",{class:"header-anchor",href:"#参考链接","aria-hidden":"true"},"#"),(0,c.Uk)(" 参考链接")],-1),v={href:"https://www.jianshu.com/p/29114c96c36f",target:"_blank",rel:"noopener noreferrer"},_=(0,c.Uk)("https://www.jianshu.com/p/29114c96c36f"),q={href:"https://blog.csdn.net/doniexun/article/details/45438457",target:"_blank",rel:"noopener noreferrer"},C=(0,c.Uk)("https://blog.csdn.net/doniexun/article/details/45438457"),B={render:function(e,d){const o=(0,c.up)("OutboundLink");return(0,c.wg)(),(0,c.j4)(c.HY,null,[n,(0,c.Wm)("p",null,[l,a,t,i,r,(0,c.Wm)("a",s,[u,(0,c.Wm)(o)]),h,m,p,k,b,W,f,g,x,U,w]),E,(0,c.Wm)("ol",null,[(0,c.Wm)("li",null,[(0,c.Wm)("a",v,[_,(0,c.Wm)(o)])]),(0,c.Wm)("li",null,[(0,c.Wm)("a",q,[C,(0,c.Wm)(o)])])])],64)}}}}]);