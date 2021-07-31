"use strict";(self.webpackChunkziqiangxu_github_io=self.webpackChunkziqiangxu_github_io||[]).push([[3654],{5856:(e,o,t)=>{t.r(o),t.d(o,{data:()=>d});const d={key:"v-2d08a0c9",path:"/network-secure/JWT%EF%BC%88JSON-Web-Token%EF%BC%89%E8%AE%A4%E8%AF%81%E6%9C%BA%E5%88%B6.html",title:"JWT(JSON-Web-Token)认证机制",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"认证流程",slug:"认证流程",children:[{level:3,title:"一：申请凭证jwt：",slug:"一-申请凭证jwt",children:[]},{level:3,title:"二：拿着凭证jwt访问服务器",slug:"二-拿着凭证jwt访问服务器",children:[]}]},{level:2,title:"总结",slug:"总结",children:[]},{level:2,title:"使用案例",slug:"使用案例",children:[]},{level:2,title:"扩展阅读",slug:"扩展阅读",children:[]}],filePathRelative:"network-secure/JWT（JSON-Web-Token）认证机制.md",git:{updatedTime:1595018101e3,contributors:[{name:"daryl",email:"ziqiang_xu@qq.com",commits:3},{name:"Daryl.Xu",email:"ziqiang_xu@yeah.net",commits:1}]}}},4986:(e,o,t)=>{t.r(o),t.d(o,{default:()=>m});var d=t(6252);const c=(0,d.uE)('<h1 id="jwt-json-web-token-认证机制" tabindex="-1"><a class="header-anchor" href="#jwt-json-web-token-认证机制" aria-hidden="true">#</a> JWT(JSON-Web-Token)认证机制</h1><p><code>JWT</code> 是<code>JSON Web Token</code>的缩写。我们用大写的<code>JWT</code>表示这种认证机制，我们用小写的<code>jwt</code>来表示<code>JWT</code>机制中的生成的<code>token</code>，<code>jwt</code>是一个字符串</p>',2),a=(0,d.Uk)("阮一峰老师的文章非常清楚地介绍了如何生成"),n=(0,d.Wm)("code",null,"jwt",-1),r=(0,d.Uk)("这个"),l=(0,d.Wm)("code",null,"token",-1),i={href:"http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html",target:"_blank",rel:"noopener noreferrer"},h=(0,d.Uk)("http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html"),u=(0,d.uE)('<p>拜读了阮一峰老师的文章，我知道了<code>jwt</code>不仅是一个<code>token</code>，它还是一个包含了其他信息的<code>token</code> 看了文章底下的评论，甚是精彩！我觉得该文还需要一些补充</p><h2 id="认证流程" tabindex="-1"><a class="header-anchor" href="#认证流程" aria-hidden="true">#</a> 认证流程</h2><h3 id="一-申请凭证jwt" tabindex="-1"><a class="header-anchor" href="#一-申请凭证jwt" aria-hidden="true">#</a> 一：申请凭证<code>jwt</code>：</h3><ol><li>客户端发送账号和密码给服务器</li><li>服务器查询数据库，认证成功后服务器返回凭证<code>jwt</code></li></ol><blockquote><p>为了防止伪造，需要确保<code>jwt</code>只能由服务端生成，实现方法阮一峰老师的文章有讲</p></blockquote><h3 id="二-拿着凭证jwt访问服务器" tabindex="-1"><a class="header-anchor" href="#二-拿着凭证jwt访问服务器" aria-hidden="true">#</a> 二：拿着凭证<code>jwt</code>访问服务器</h3><ol><li>把<code>jwt</code>放到<code>HTTP</code>请求头的<code>Authorization</code>字段里【当然可以放在其他位置，只要确保服务器可以拿到】</li><li>服务器拿到客户端提交的<code>jwt</code>之后，通过对<code>jwt</code>里的字段进行签名运算来验证这个<code>jwt</code>是否有效</li></ol><blockquote><p>签名运算只需要用到服务器的<code>secret</code>和<code>jwt</code>里的其它信息【这样就不需要去查询数据库了】</p></blockquote><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>使用<code>JWT</code>认证，服务器变成无状态了，从而比较容易实现扩展。 <code>JWT</code>的最大缺点，由于服务器不保存<code>session</code>状态，因此无法在使用过程中废止某个<code>token</code>，或者更改 <code>token</code>的权限。也就是说，一旦<code>JWT</code>签发了，在到期之前就会始终有效，除非服务器部署额外的逻辑。 说一句套话但绝对不是空话：还是需要根据实际应用场景选用认证方式的</p><h2 id="使用案例" tabindex="-1"><a class="header-anchor" href="#使用案例" aria-hidden="true">#</a> 使用案例</h2><p>公司有一个对外提供的服务，用<code>gRPC</code>实现，用户身份验证的时候使用了<code>JWT</code></p><h2 id="扩展阅读" tabindex="-1"><a class="header-anchor" href="#扩展阅读" aria-hidden="true">#</a> 扩展阅读</h2>',13),s={href:"http://www.ruanyifeng.com/blog/2019/04/oauth_design.html",target:"_blank",rel:"noopener noreferrer"},w=(0,d.Uk)("OAuth2简单解释"),k={href:"http://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html",target:"_blank",rel:"noopener noreferrer"},b=(0,d.Uk)("OAuth2的四种授权方式"),m={render:function(e,o){const t=(0,d.up)("OutboundLink");return(0,d.wg)(),(0,d.j4)(d.HY,null,[c,(0,d.Wm)("p",null,[a,n,r,l,(0,d.Wm)("a",i,[h,(0,d.Wm)(t)])]),u,(0,d.Wm)("p",null,[(0,d.Wm)("a",s,[w,(0,d.Wm)(t)]),(0,d.Wm)("a",k,[b,(0,d.Wm)(t)])])],64)}}}}]);