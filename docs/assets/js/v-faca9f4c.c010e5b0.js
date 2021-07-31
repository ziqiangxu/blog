"use strict";(self.webpackChunkziqiangxu_github_io=self.webpackChunkziqiangxu_github_io||[]).push([[4739],{5927:(s,e,n)=>{n.r(e),n.d(e,{data:()=>l});const l={key:"v-faca9f4c",path:"/accumulation/%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%85%8D%E5%AF%86%E7%99%BB%E5%BD%95-ssh%E5%85%AC%E9%92%A5%E9%85%8D%E7%BD%AE.html",title:"服务器免密登录：ssh 公钥配置",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"步骤概览：",slug:"步骤概览",children:[{level:3,title:"1. 生成公钥",slug:"_1-生成公钥",children:[]},{level:3,title:"2. 将公钥存储到远程主机",slug:"_2-将公钥存储到远程主机",children:[]},{level:3,title:"3. 开启远程主机ssh的公钥登录",slug:"_3-开启远程主机ssh的公钥登录",children:[]}]}],filePathRelative:"accumulation/服务器免密登录-ssh公钥配置.md",git:{updatedTime:1595072993e3}}},711:(s,e,n)=>{n.r(e),n.d(e,{default:()=>f});var l=n(6252);const a=n.p+"assets/img/ssh-key-saved-path.3410903a.png",m=(0,l.Wm)("h1",{id:"服务器免密登录-ssh-公钥配置",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#服务器免密登录-ssh-公钥配置","aria-hidden":"true"},"#"),(0,l.Uk)(" 服务器免密登录："),(0,l.Wm)("code",null,"ssh"),(0,l.Uk)(" 公钥配置")],-1),t=(0,l.Wm)("p",null,[(0,l.Uk)("我们知道，用 "),(0,l.Wm)("code",null,"ssh <用户名>@<ip地址>"),(0,l.Uk)(" 登录远程服务器的时候，是需要输入登录密码的，有时候就很烦，比如以下情况：")],-1),i=(0,l.Wm)("ol",null,[(0,l.Wm)("li",null,"在密码比较复杂的时候，你要花费很长时间来输入密码；"),(0,l.Wm)("li",null,"你在使用git的时候进行频繁提交：使用代码托管平台以及自建的git服务器。")],-1),c=(0,l.Wm)("blockquote",null,[(0,l.Wm)("p",null,"实际上有一种解决方法——ssh免密验证。")],-1),u=(0,l.Wm)("h2",{id:"步骤概览",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#步骤概览","aria-hidden":"true"},"#"),(0,l.Uk)(" 步骤概览：")],-1),h=(0,l.Wm)("ol",null,[(0,l.Wm)("li",null,"在本地生成公钥"),(0,l.Wm)("li",null,"将本地公钥存储在远程主机上"),(0,l.Wm)("li",null,"开启远程主机上的ssh公钥认证登录功能")],-1),r=(0,l.Wm)("h3",{id:"_1-生成公钥",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#_1-生成公钥","aria-hidden":"true"},"#"),(0,l.Uk)(" 1. 生成公钥")],-1),W=(0,l.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,l.Wm)("pre",{class:"language-bash"},[(0,l.Wm)("code",null,[(0,l.Wm)("span",{class:"token comment"},"# -t 指定加密算法；"),(0,l.Uk)("\n"),(0,l.Wm)("span",{class:"token comment"},"# -b 指定生成的密钥长度；"),(0,l.Uk)("\n"),(0,l.Wm)("span",{class:"token comment"},"# -C 一段字符，一般都填邮箱地址。"),(0,l.Uk)("\n"),(0,l.Wm)("span",{class:"token comment"},"# 更多参数说明可以在终端输入：ssh-keygen --help 查看"),(0,l.Uk)("\nssh-keygen -t rsa -b "),(0,l.Wm)("span",{class:"token number"},"4096"),(0,l.Uk)(" -C "),(0,l.Wm)("span",{class:"token string"},'"你的邮箱地址"'),(0,l.Uk)("\n")])]),(0,l.Wm)("div",{class:"line-numbers"},[(0,l.Wm)("span",{class:"line-number"},"1"),(0,l.Wm)("br"),(0,l.Wm)("span",{class:"line-number"},"2"),(0,l.Wm)("br"),(0,l.Wm)("span",{class:"line-number"},"3"),(0,l.Wm)("br"),(0,l.Wm)("span",{class:"line-number"},"4"),(0,l.Wm)("br"),(0,l.Wm)("span",{class:"line-number"},"5"),(0,l.Wm)("br")])],-1),o=(0,l.Wm)("p",null,[(0,l.Uk)("这条命令执行完之后，会提示你指定公钥和私钥的存储位置。 "),(0,l.Wm)("img",{src:a,alt:"深度截图_选择区域_20180803235726.png"}),(0,l.Uk)(" 截图中指定的是 "),(0,l.Wm)("code",null,"/home/xu/test"),(0,l.Uk)(" 这个位置，届时私钥就存储在 "),(0,l.Wm)("code",null,"/home/xu/test"),(0,l.Uk)("，公钥存储在 "),(0,l.Wm)("code",null,"/home/xu/test.pub"),(0,l.Uk)("。公钥和私钥是成对的")],-1),d=(0,l.Wm)("h3",{id:"_2-将公钥存储到远程主机",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#_2-将公钥存储到远程主机","aria-hidden":"true"},"#"),(0,l.Uk)(" 2. 将公钥存储到远程主机")],-1),k=(0,l.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,l.Wm)("pre",{class:"language-bash"},[(0,l.Wm)("code",null,[(0,l.Wm)("span",{class:"token comment"},"# i后面接的参数是保存你公钥的文件(我们这里是.ssh/id_rsa.pub)；"),(0,l.Uk)("\n"),(0,l.Wm)("span",{class:"token comment"},"# git是远程主机的用户，这条指令会往git这个用户的主目录下的"),(0,l.Uk)("\n"),(0,l.Wm)("span",{class:"token comment"},"# .ssh/authorized_keys文件写入id_rsa.pub保存的公钥"),(0,l.Uk)("\nssh-copy-id -i .ssh/id_rsa.pub git@12.56.224.61  \n")])]),(0,l.Wm)("div",{class:"line-numbers"},[(0,l.Wm)("span",{class:"line-number"},"1"),(0,l.Wm)("br"),(0,l.Wm)("span",{class:"line-number"},"2"),(0,l.Wm)("br"),(0,l.Wm)("span",{class:"line-number"},"3"),(0,l.Wm)("br"),(0,l.Wm)("span",{class:"line-number"},"4"),(0,l.Wm)("br")])],-1),b=(0,l.Wm)("blockquote",null,[(0,l.Wm)("p",null,[(0,l.Uk)("网上好多教程说直接将公钥内容写到 "),(0,l.Wm)("code",null,".ssh/authorized_keys"),(0,l.Uk)(" 就可以了，我是没成功，最后还是用这条命令写入才成功的。（后续添加公钥倒是可以直接添加文本内容到.ssh/authorized_keys，一个公钥一行。也许ssh-copy-id命令还做了其他事情吧。你可以执行 "),(0,l.Wm)("code",null,"cat /usr/bin/ssh-copy-id"),(0,l.Uk)(" 看一下它的内容）")])],-1),p=(0,l.Wm)("h3",{id:"_3-开启远程主机ssh的公钥登录",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#_3-开启远程主机ssh的公钥登录","aria-hidden":"true"},"#"),(0,l.Uk)(" 3. 开启远程主机ssh的公钥登录")],-1),g=(0,l.Wm)("p",null,[(0,l.Uk)("检查 "),(0,l.Wm)("code",null,"ssh"),(0,l.Uk)(" 服务的配置文件—— "),(0,l.Wm)("code",null,"/etc/ssh/sshd_config")],-1),U=(0,l.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,l.Wm)("pre",{class:"language-bash"},[(0,l.Wm)("code",null,[(0,l.Uk)("RSAAuthentication "),(0,l.Wm)("span",{class:"token function"},"yes"),(0,l.Uk)("    "),(0,l.Wm)("span",{class:"token comment"},"# 这行一定要取消注释的（删掉#号）"),(0,l.Uk)("\nPubkeyAuthentication "),(0,l.Wm)("span",{class:"token function"},"yes"),(0,l.Uk)("    "),(0,l.Wm)("span",{class:"token comment"},"# 我的服务器没这行，不添加似乎也能用"),(0,l.Uk)("\nAuthorizedKeysFile .ssh/authorized_keys    "),(0,l.Wm)("span",{class:"token comment"},"# 我的服务器没这行，不添加似乎也能用"),(0,l.Uk)("\n")])]),(0,l.Wm)("div",{class:"line-numbers"},[(0,l.Wm)("span",{class:"line-number"},"1"),(0,l.Wm)("br"),(0,l.Wm)("span",{class:"line-number"},"2"),(0,l.Wm)("br"),(0,l.Wm)("span",{class:"line-number"},"3"),(0,l.Wm)("br")])],-1),_=(0,l.Wm)("p",null,[(0,l.Uk)("重启 "),(0,l.Wm)("code",null,"ssh"),(0,l.Uk)(" 服务: "),(0,l.Wm)("code",null,"systemctl restart sshd")],-1),f={render:function(s,e){return(0,l.wg)(),(0,l.j4)(l.HY,null,[m,t,i,c,u,h,r,W,o,d,k,b,p,g,U,_],64)}}}}]);