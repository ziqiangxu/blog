"use strict";(self.webpackChunkziqiangxu_github_io=self.webpackChunkziqiangxu_github_io||[]).push([[5978],{2977:(n,a,e)=>{e.r(a),e.d(a,{data:()=>s});const s={key:"v-542be033",path:"/Docker/Docker%E5%88%9B%E5%BB%BAMariaDB%E5%AE%9E%E4%BE%8B.html",title:"Docker 创建 MariaDB 实例",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装docker",slug:"安装docker",children:[]}],filePathRelative:"Docker/Docker创建MariaDB实例.md",git:{updatedTime:1619257649e3}}},2184:(n,a,e)=>{e.r(a),e.d(a,{default:()=>i});var s=e(6252);const r=(0,s.Wm)("h1",{id:"docker-创建-mariadb-实例",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#docker-创建-mariadb-实例","aria-hidden":"true"},"#"),(0,s.Uk)(),(0,s.Wm)("code",null,"Docker"),(0,s.Uk)(" 创建 "),(0,s.Wm)("code",null,"MariaDB"),(0,s.Uk)(" 实例")],-1),c=(0,s.Wm)("p",null,"本文中的 “实例” 和 “容器” 具有相同含义",-1),t=(0,s.Wm)("h2",{id:"安装docker",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#安装docker","aria-hidden":"true"},"#"),(0,s.Uk)(" 安装docker")],-1),p={href:"https://yeasy.gitbooks.io/docker_practice/install/",target:"_blank",rel:"noopener noreferrer"},l=(0,s.Uk)("参考链接"),o=(0,s.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker run -p <span class="token number">0.0</span>.0.0:3307:3306 <span class="token punctuation">\\</span>\n--name <span class="token punctuation">[</span>数据库名字<span class="token punctuation">]</span>\n-v <span class="token punctuation">[</span>宿主机的路径<span class="token punctuation">]</span>:<span class="token punctuation">[</span>docker容器的路径<span class="token punctuation">]</span> <span class="token punctuation">\\</span>\n-e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token punctuation">[</span>数据库root用户密码<span class="token punctuation">]</span> <span class="token punctuation">\\</span>\n-dit mariadb\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-p 端口映射：宿主机 <span class="token number">3307</span> 端口映射到 docker 实例的 <span class="token number">3306</span> 端口\n--name 指定实例名称\n-v 将宿主机的文件路径挂载到容器的路径\n-e 配置环境变量，这里是配置了数据库的密码\n-dit其它的选项，d：让容器在后台运行； i：保持标准输出打开； t：分配一个tty\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>小提示，命令行参数，一般来说，宿主机的信息在前，<code>docker</code> 容器信息在后。如进行端口映射： <code>0.0.0.0:3307:3306</code></p></blockquote>',3),i={render:function(n,a){const e=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.j4)(s.HY,null,[r,c,t,(0,s.Wm)("p",null,[(0,s.Wm)("a",p,[l,(0,s.Wm)(e)])]),o],64)}}}}]);