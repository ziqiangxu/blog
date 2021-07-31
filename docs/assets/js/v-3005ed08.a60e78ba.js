"use strict";(self.webpackChunkziqiangxu_github_io=self.webpackChunkziqiangxu_github_io||[]).push([[5280],{7728:(e,l,n)=>{n.r(l),n.d(l,{data:()=>i});const i={key:"v-3005ed08",path:"/Git/%E4%BD%BF%E7%94%A8Git%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BF%9E%E6%8E%A5%E4%BD%A0%E7%9A%84GitHub.html",title:"使用 Git 客户端连接你的 GitHub",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"先安装git客户端",slug:"先安装git客户端",children:[]},{level:2,title:"一 使用ssh方式连接",slug:"一-使用ssh方式连接",children:[{level:3,title:"配置本机的git",slug:"配置本机的git",children:[]},{level:3,title:"生成密钥",slug:"生成密钥",children:[]},{level:3,title:"提交密钥",slug:"提交密钥",children:[]}]},{level:2,title:"二 使用https方式连接",slug:"二-使用https方式连接",children:[{level:3,title:"方法一",slug:"方法一",children:[]},{level:3,title:"方法二",slug:"方法二",children:[]}]}],filePathRelative:"Git/使用Git客户端连接你的GitHub.md",git:{updatedTime:1595072993e3}}},430:(e,l,n)=>{n.r(l),n.d(l,{default:()=>C});var i=n(6252);const a=(0,i.Wm)("h1",{id:"使用-git-客户端连接你的-github",tabindex:"-1"},[(0,i.Wm)("a",{class:"header-anchor",href:"#使用-git-客户端连接你的-github","aria-hidden":"true"},"#"),(0,i.Uk)(" 使用 "),(0,i.Wm)("code",null,"Git"),(0,i.Uk)(" 客户端连接你的 "),(0,i.Wm)("code",null,"GitHub")],-1),s=(0,i.Wm)("p",null,[(0,i.Uk)("本教程同样适用于其他的 "),(0,i.Wm)("code",null,"git"),(0,i.Uk)(" 托管平台，比如 "),(0,i.Wm)("code",null,"coding"),(0,i.Uk)("，"),(0,i.Wm)("code",null,"gitlab"),(0,i.Uk)("等。（假设你知道 "),(0,i.Wm)("code",null,"git"),(0,i.Uk)(" 和 "),(0,i.Wm)("code",null,"github"),(0,i.Uk)(" 的区别）")],-1),t=(0,i.Wm)("h2",{id:"先安装git客户端",tabindex:"-1"},[(0,i.Wm)("a",{class:"header-anchor",href:"#先安装git客户端","aria-hidden":"true"},"#"),(0,i.Uk)(" 先安装git客户端")],-1),r=(0,i.Uk)("我的是"),d={href:"https://deepin.org",target:"_blank",rel:"noopener noreferrer"},c=(0,i.Uk)("Deepin操作系统"),u=(0,i.Uk)("，使用命令"),A=(0,i.Wm)("code",null,"sudo apt install git",-1),h=(0,i.Uk)(" 安装"),m=(0,i.Wm)("blockquote",null,[(0,i.Wm)("p",null,"这里不用apt-get而使用get是因为get是友好版的apt-get，可以看进度条哦。还可以少打几个字，何乐而不为呢。")],-1),W=(0,i.Wm)("h2",{id:"一-使用ssh方式连接",tabindex:"-1"},[(0,i.Wm)("a",{class:"header-anchor",href:"#一-使用ssh方式连接","aria-hidden":"true"},"#"),(0,i.Uk)(" 一 使用ssh方式连接")],-1),p=(0,i.Wm)("h3",{id:"配置本机的git",tabindex:"-1"},[(0,i.Wm)("a",{class:"header-anchor",href:"#配置本机的git","aria-hidden":"true"},"#"),(0,i.Uk)(" 配置本机的git")],-1),o=(0,i.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,i.Wm)("pre",{class:"language-bash"},[(0,i.Wm)("code",null,[(0,i.Wm)("span",{class:"token function"},"git"),(0,i.Uk)(" config --global user.name "),(0,i.Wm)("span",{class:"token string"},'"填用户名"'),(0,i.Uk)("\n"),(0,i.Wm)("span",{class:"token function"},"git"),(0,i.Uk)(" config --global user.email "),(0,i.Wm)("span",{class:"token string"},'"填邮箱"'),(0,i.Uk)("\n"),(0,i.Wm)("span",{class:"token comment"},"# user.name是github用户名"),(0,i.Uk)("\n"),(0,i.Wm)("span",{class:"token comment"},"# user.email是github绑定的邮箱"),(0,i.Uk)("\n")])]),(0,i.Wm)("div",{class:"line-numbers"},[(0,i.Wm)("span",{class:"line-number"},"1"),(0,i.Wm)("br"),(0,i.Wm)("span",{class:"line-number"},"2"),(0,i.Wm)("br"),(0,i.Wm)("span",{class:"line-number"},"3"),(0,i.Wm)("br"),(0,i.Wm)("span",{class:"line-number"},"4"),(0,i.Wm)("br")])],-1),g=(0,i.Wm)("h3",{id:"生成密钥",tabindex:"-1"},[(0,i.Wm)("a",{class:"header-anchor",href:"#生成密钥","aria-hidden":"true"},"#"),(0,i.Uk)(" 生成密钥")],-1),k=(0,i.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,i.Wm)("pre",{class:"language-bash"},[(0,i.Wm)("code",null,[(0,i.Uk)(" ssh-keygen -t rsa -C "),(0,i.Wm)("span",{class:"token string"},'"邮箱同上"'),(0,i.Uk)("\n")])]),(0,i.Wm)("div",{class:"line-numbers"},[(0,i.Wm)("span",{class:"line-number"},"1"),(0,i.Wm)("br")])],-1),b=(0,i.Wm)("p",null,[(0,i.Wm)("img",{src:"data:image/png;base64,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",alt:"图一"}),(0,i.Uk)(" 然后会出现上面的提示，按回车使用它的默认设置就好。")],-1),U=(0,i.Wm)("h3",{id:"提交密钥",tabindex:"-1"},[(0,i.Wm)("a",{class:"header-anchor",href:"#提交密钥","aria-hidden":"true"},"#"),(0,i.Uk)(" 提交密钥")],-1),I=(0,i.Wm)("p",null,"从图一可以得知秘钥是存放地址。在c:\\User\\用户名\\.ssh\\文件夹下。复制id_rsa.pub里面的文本，在github添加这个ssh key就好啦。",-1),y=(0,i.Wm)("h2",{id:"二-使用https方式连接",tabindex:"-1"},[(0,i.Wm)("a",{class:"header-anchor",href:"#二-使用https方式连接","aria-hidden":"true"},"#"),(0,i.Uk)(" 二 使用https方式连接")],-1),f=(0,i.Wm)("h3",{id:"方法一",tabindex:"-1"},[(0,i.Wm)("a",{class:"header-anchor",href:"#方法一","aria-hidden":"true"},"#"),(0,i.Uk)(" 方法一")],-1),Q=(0,i.Wm)("p",null,[(0,i.Uk)("执行"),(0,i.Wm)("code",null,"git config --global credential.helper store"),(0,i.Uk)(" 开启记住密码。以后push就不用每次输入账号了。")],-1),Z=(0,i.Wm)("p",null,[(0,i.Uk)("以上的操作实际是操作"),(0,i.Wm)("code",null,"~/.gitconfig"),(0,i.Uk)("文件，你还可以在"),(0,i.Wm)("code",null,"~/.git-credentials"),(0,i.Uk)("找到你的账号和密码哦")],-1),E=(0,i.Wm)("h3",{id:"方法二",tabindex:"-1"},[(0,i.Wm)("a",{class:"header-anchor",href:"#方法二","aria-hidden":"true"},"#"),(0,i.Uk)(" 方法二")],-1),B=(0,i.Wm)("p",null,[(0,i.Uk)("将"),(0,i.Wm)("code",null,".git/config"),(0,i.Uk)("中的url改成 "),(0,i.Wm)("code",null,"https://{name}:{password}@github.com/name/project.git"),(0,i.Uk)(" 的格式。其中 "),(0,i.Wm)("code",null,"{name}"),(0,i.Uk)(" 表示账号，"),(0,i.Wm)("code",null,"{password}"),(0,i.Uk)("表示密码。"),(0,i.Wm)("code",null,"push"),(0,i.Uk)("的时候会自动提交你的密码。此法适用于大部分git托管网站。 享受高速的 "),(0,i.Wm)("code",null,"http"),(0,i.Uk)(" 传输吧")],-1),C={render:function(e,l){const n=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.j4)(i.HY,null,[a,s,t,(0,i.Wm)("p",null,[r,(0,i.Wm)("a",d,[c,(0,i.Wm)(n)]),u,A,h]),m,W,p,o,g,k,b,U,I,y,f,Q,Z,E,B],64)}}}}]);