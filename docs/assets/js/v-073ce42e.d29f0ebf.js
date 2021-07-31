"use strict";(self.webpackChunkziqiangxu_github_io=self.webpackChunkziqiangxu_github_io||[]).push([[3314],{4496:(e,c,a)=>{a.r(c),a.d(c,{data:()=>o});const o={key:"v-073ce42e",path:"/ECMAScript/npm%E8%B8%A9%E5%9D%91%E6%97%A5%E8%AE%B0.html",title:"npm 踩坑日记",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"意外中断",slug:"意外中断",children:[]},{level:2,title:"加速",slug:"加速",children:[]}],filePathRelative:"ECMAScript/npm踩坑日记.md",git:{updatedTime:1619257649e3,contributors:[{name:"daryl",email:"ziqiang_xu@qq.com",commits:3},{name:"Daryl Xu",email:"ziqiang_xu@qq.com",commits:1},{name:"Daryl.Xu",email:"ziqiang_xu@yeah.net",commits:1}]}}},2429:(e,c,a)=>{a.r(c),a.d(c,{default:()=>t});const o=(0,a(6252).uE)('<h1 id="npm-踩坑日记" tabindex="-1"><a class="header-anchor" href="#npm-踩坑日记" aria-hidden="true">#</a> <code>npm</code> 踩坑日记</h1><h2 id="意外中断" tabindex="-1"><a class="header-anchor" href="#意外中断" aria-hidden="true">#</a> 意外中断</h2><p><code>verbose stack ZlibError: zlib: unexpected end of file</code> 这个很有可能是在下载包的时候<code>npm</code> 被意外中断（比如说你按了 <code>Ctrl + C</code> ）导致的。</p><blockquote><p>解决方案：清除 <code>npm</code> 缓存，<code>npm cache clear --force</code></p></blockquote><h2 id="加速" tabindex="-1"><a class="header-anchor" href="#加速" aria-hidden="true">#</a> 加速</h2><p>默认镜像地址是 <code>npm</code> 官方的的地址 <code>https://registry.npmjs.org</code> 国内访问比较慢、容易出现下载失败的情况。所以我们可以改为国内的镜像：<code>npm config set registry https://registry.npm.taobao.org</code></p><blockquote><p>尽量使用<code>npm</code> 或者 <code>yarn</code>， 建议别用 <code>cnpm</code> 了。反正我在用的时候老是出现一些奇奇怪怪的问题</p></blockquote>',7),t={render:function(e,c){return o}}}}]);