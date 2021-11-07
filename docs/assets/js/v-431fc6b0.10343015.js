"use strict";(self.webpackChunkziqiangxu_github_io=self.webpackChunkziqiangxu_github_io||[]).push([[5658],{2685:(e,d,c)=>{c.r(d),c.d(d,{data:()=>o});const o={key:"v-431fc6b0",path:"/accumulation/Deepin%E6%90%AD%E5%BB%BA%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0%E7%8E%AF%E5%A2%83%EF%BC%88%E5%AE%89%E8%A3%85%E6%98%BE%E5%8D%A1%E9%A9%B1%E5%8A%A8%E3%80%81cuda%E3%80%81cuDNN%EF%BC%89.html",title:"Deepin 搭建深度学习环境（安装显卡驱动、cuda、cuDNN）",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"写在最前面",slug:"写在最前面",children:[]},{level:2,title:"需要知晓的知识点",slug:"需要知晓的知识点",children:[]},{level:2,title:"一 用深度的显卡驱动器切换到使用闭源驱动",slug:"一-用深度的显卡驱动器切换到使用闭源驱动",children:[]},{level:2,title:"二 安装CUDA",slug:"二-安装cuda",children:[]},{level:2,title:"三 安装CUDNN",slug:"三-安装cudnn",children:[{level:3,title:"参考链接",slug:"参考链接",children:[]}]}],filePathRelative:"accumulation/Deepin搭建深度学习环境（安装显卡驱动、cuda、cuDNN）.md",git:{updatedTime:1619257649e3}}},7402:(e,d,c)=>{c.r(d),c.d(d,{default:()=>a});const o=(0,c(6252).uE)('<h1 id="deepin-搭建深度学习环境-安装显卡驱动、cuda、cudnn" tabindex="-1"><a class="header-anchor" href="#deepin-搭建深度学习环境-安装显卡驱动、cuda、cudnn" aria-hidden="true">#</a> <code>Deepin</code> 搭建深度学习环境（安装显卡驱动、<code>cuda</code>、<code>cuDNN</code>）</h1><h2 id="写在最前面" tabindex="-1"><a class="header-anchor" href="#写在最前面" aria-hidden="true">#</a> 写在最前面</h2><p>本文不是针对超级新手的教程，本文默认读者有阅读 <code>NVIDIA</code> 官方指南的能力。由于 <code>NVIDIA</code> 官方指南的手册只提到了很少的发行版。连 <code>Debian</code> 都没有提到，让我等 <code>Deepin</code> 铁杆用户感觉到有些犹豫，想着是不是应该换个发行版了？还好有一个 <code>Debian</code> 系的发行版—— <code>Ubuntu</code> ，所以我依照 <code>NVIDIA</code> 针对 <code>Ubuntu</code> 给出的指南进行了安装。基本顺利，主要就是安装的选择上需要注意一下。下面就是我多次踩坑总结出来的。显卡型号 <code>NVIDIA Corporation GP102 [TITAN X] (rev a1)</code> ，有可能是我运气好，没有把系统搞崩。</p><p>不同版本操作可能略有差别，请各位操作前备份</p><ul><li>驱动版本： 410</li><li>cuda版本： 10</li></ul><h2 id="需要知晓的知识点" tabindex="-1"><a class="header-anchor" href="#需要知晓的知识点" aria-hidden="true">#</a> 需要知晓的知识点</h2><p><code>nouveau</code>： 单词本意是“新”， 开源驱动。</p><h2 id="一-用深度的显卡驱动器切换到使用闭源驱动" tabindex="-1"><a class="header-anchor" href="#一-用深度的显卡驱动器切换到使用闭源驱动" aria-hidden="true">#</a> 一 用深度的显卡驱动器切换到使用闭源驱动</h2><blockquote><p>注意了，这一步很重要。因为如果你的电脑使用了 <code>nouveau</code> 开源驱动（如果电脑有 <code>NVIDIA</code> 显卡的话， <code>Deepin 15.9</code> 是默认使用它的）的话，是没办法安装 <code>NVIDIA</code> 的闭源驱动的</p></blockquote><h2 id="二-安装cuda" tabindex="-1"><a class="header-anchor" href="#二-安装cuda" aria-hidden="true">#</a> 二 安装CUDA</h2><blockquote><p>这一步是比较凶险的，所以请在操作前用 <code>深度备份还原工具</code> 备份一下你的系统（一般只用备份 <code>/</code> 分区），我是备份了 <code>home</code> 以外的和系统相关的所有分区。中途被搞坏了一次，还好我机智，这是我第一次使用 <code>深度备份还原工具</code> ，还是很给力的。</p></blockquote><p>依照官方指南进行操作https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html 下载 <code>Ubuntu</code> 的 <code>runfile(local)</code>，别选 <code>deb</code> 或者 <code>cluster</code>，装不上的。</p><p>安装过程是需要关闭显示服务器的</p><ol><li>注销当前登录用户</li><li>按 <code>Ctrl + Alt + F3</code> 进入 <code>tty3</code> ，登录后执行 <code>sudo systemctl stop lightdm # 关闭显示服务器</code></li><li>执行<code>sudo sh &lt;*.run文件&gt;</code></li></ol><p>安装的中途它会提示： a. 移除比较老的驱动（深度的显卡驱动管理器安装的软件源里的驱动，奈何 <code>cuda</code> 需要配合指定版本的驱动） <code>sudo apt autoremove nvidia*</code> b. 是否安装比较新的驱动，要选 <code>yes</code> 哈，否则没办法开机了。</p><h2 id="三-安装cudnn" tabindex="-1"><a class="header-anchor" href="#三-安装cudnn" aria-hidden="true">#</a> 三 安装CUDNN</h2><p>依照官方指南进行操作https://docs.nvidia.com/deeplearning/sdk/cudnn-install/index.html#installlinux 下载<code>cuDNN Library for Linux</code></p><h3 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h3><p>https://wiki.deepin.org/wiki/%E6%98%BE%E5%8D%A1#.E5.AE.89.E8.A3.85.E9.97.AD.E6.BA.90.E9.A9.B1.E5.8A.A8</p>',19),a={render:function(e,d){return o}}}}]);