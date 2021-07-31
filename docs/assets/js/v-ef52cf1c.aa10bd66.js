"use strict";(self.webpackChunkziqiangxu_github_io=self.webpackChunkziqiangxu_github_io||[]).push([[7586],{1041:(e,n,a)=>{a.r(n),a.d(n,{data:()=>i});const i={key:"v-ef52cf1c",path:"/Python/%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BD%BF%E7%94%A8pipenv.html",title:"Python 依赖包管理",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"为什么说 pipenv 是可靠的",slug:"为什么说-pipenv-是可靠的",children:[]},{level:2,title:"为什么 freeze 不可靠和举例",slug:"为什么-freeze-不可靠和举例",children:[]},{level:2,title:"以下内容已过时，今后不在项目中使用，但是对于非正式部署的项目仍然有价值",slug:"以下内容已过时-今后不在项目中使用-但是对于非正式部署的项目仍然有价值",children:[]},{level:2,title:"导出开发环境需要的所有依赖包清单",slug:"导出开发环境需要的所有依赖包清单",children:[]},{level:2,title:"导出项目所需要的依赖包清单",slug:"导出项目所需要的依赖包清单",children:[]},{level:2,title:"安装依赖包",slug:"安装依赖包",children:[]},{level:2,title:"注意",slug:"注意",children:[]}],filePathRelative:"Python/为什么使用pipenv.md",git:{updatedTime:1619257649e3,contributors:[{name:"Daryl.Xu",email:"ziqiang_xu@yeah.net",commits:2},{name:"daryl",email:"ziqiang_xu@qq.com",commits:2},{name:"Daryl Xu",email:"ziqiang_xu@qq.com",commits:1},{name:"daryl",email:"ziqiang_xu@yeah.net",commits:1}]}}},1514:(e,n,a)=>{a.r(n),a.d(n,{default:()=>z});var i=a(6252);const o=(0,i.uE)('<h1 id="python-依赖包管理" tabindex="-1"><a class="header-anchor" href="#python-依赖包管理" aria-hidden="true">#</a> <code>Python</code> 依赖包管理</h1><p>转了一圈，又回到了 <code>pipenv</code>, 它确实是更加现代的包管理工具，它是 <code>pip</code> 和 <code>virtualenv</code> 的结合体 它主要的改进在 <code>Pipfile.lock</code> 文件，它比一个纯文本的 <code>requirements.txt</code> 文件表达力要强得多。 更重要的是用 <code>pipreqs</code> 或 <code>freeze</code> 导出的包名、版本（生成一个 <code>requirements.txt</code> 文件）并不完全正确，它们是不可靠的，而 <code>pipenv</code> 是可靠的。</p><h2 id="为什么说-pipenv-是可靠的" tabindex="-1"><a class="header-anchor" href="#为什么说-pipenv-是可靠的" aria-hidden="true">#</a> 为什么说 <code>pipenv</code> 是可靠的</h2>',3),c=(0,i.uE)("<li>而 <code>pipenv</code> 是在你安装依赖的时候就进行记录，理论上这是完全可靠的，这可以保证准确地记录你所安装的包，实际上也是可靠的。</li><li><code>pipenv</code> 使用 <code>Pipenv.lock</code> 文件记录了 <code>Python</code> 版本、软件包 <code>hash</code> 值、软件包版本、<code>pip</code> 仓库地址等重要信息。</li>",2),l=(0,i.Wm)("code",null,"Pipfile",-1),d=(0,i.Uk)(" 拥有独立的解析步骤，且不需要先将套件实际安装至环境中，当你将一个会破坏依赖结构的包加入 "),r=(0,i.Wm)("code",null,"Pipfile",-1),p=(0,i.Uk)(" 时，locking就会直接告知你这个依赖无法被解析。【这个特性在进行软件包更新的时候尤其有用，"),t={href:"https://lax.v2ex.com/t/461581",target:"_blank",rel:"noopener noreferrer"},s=(0,i.Uk)("更多细节"),h=(0,i.Uk)("】"),u=(0,i.uE)('<h2 id="为什么-freeze-不可靠和举例" tabindex="-1"><a class="header-anchor" href="#为什么-freeze-不可靠和举例" aria-hidden="true">#</a> 为什么 <code>freeze</code> 不可靠和举例</h2><ol><li><code>pipreqs</code> 和 <code>freeze</code> 这种工具是根据代码中的导入语句来进行分析，很有可能会出错，理论上是可靠的，但是实际上有副作用，因为这个过程比想象中的复杂。</li><li>比如说你有一个自定义的包叫 <code>config</code> ，然而<code>pip</code> 软件源里有<code>config</code> 这个包，它们就会多导出一个config依赖，而实际上你不需要这个包，只是你的包和源里的包重名了而已。</li><li>比如你的项目进行了 <code>yaml</code> 文件的读写， 用它们导出 <code>yaml</code> 相关的软件包试试？</li></ol>',2),m={href:"https://lax.v2ex.com/t/461581",target:"_blank",rel:"noopener noreferrer"},f=(0,i.Uk)("看 "),v=(0,i.Wm)("code",null,"pipenv",-1),g=(0,i.Uk)(" 项目的维护者说，它到底解决了什么？"),b=(0,i.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip3 <span class="token function">install</span> pipenv  <span class="token comment"># 安装pipenv工具</span>\npipenv <span class="token function">install</span>  <span class="token comment"># 从Pipfile.lock安装需要的依赖</span>\npipenv <span class="token function">bash</span>  <span class="token comment"># 启动虚拟环境，需在有Pipfile的目录下执行此命令</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',1),k=(0,i.Uk)("更加详细的"),x={href:"https://pipenv.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"},q=(0,i.Uk)("指南"),y=(0,i.uE)('<hr><h2 id="以下内容已过时-今后不在项目中使用-但是对于非正式部署的项目仍然有价值" tabindex="-1"><a class="header-anchor" href="#以下内容已过时-今后不在项目中使用-但是对于非正式部署的项目仍然有价值" aria-hidden="true">#</a> <strong>以下内容已过时，今后不在项目中使用，但是对于非正式部署的项目仍然有价值</strong></h2><h2 id="导出开发环境需要的所有依赖包清单" tabindex="-1"><a class="header-anchor" href="#导出开发环境需要的所有依赖包清单" aria-hidden="true">#</a> 导出开发环境需要的所有依赖包清单</h2><p>使用pip freeze <code>pip freeze &gt; requirements.txt</code></p><h2 id="导出项目所需要的依赖包清单" tabindex="-1"><a class="header-anchor" href="#导出项目所需要的依赖包清单" aria-hidden="true">#</a> 导出项目所需要的依赖包清单</h2><p>使用<code>pipreqs</code>命令 安装pipreqs：<code>pip install pipreqs</code> 导出指定项目需要的依赖包：<code>pipreqs --savepath=[导出文件的路径] [项目目录]</code></p><h2 id="安装依赖包" tabindex="-1"><a class="header-anchor" href="#安装依赖包" aria-hidden="true">#</a> 安装依赖包</h2><p><code>pip install -r [依赖文件清单]</code></p><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2><p>用<code>pipreqs</code>或<code>freeze</code>导出的包名、版本并不完全正确，比如<code>yaml</code>相关的。</p>',10),z={render:function(e,n){const a=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.j4)(i.HY,null,[o,(0,i.Wm)("ol",null,[c,(0,i.Wm)("li",null,[l,d,r,p,(0,i.Wm)("a",t,[s,(0,i.Wm)(a)]),h])]),u,(0,i.Wm)("p",null,[(0,i.Wm)("a",m,[f,v,g,(0,i.Wm)(a)])]),b,(0,i.Wm)("p",null,[k,(0,i.Wm)("a",x,[q,(0,i.Wm)(a)])]),y],64)}}}}]);