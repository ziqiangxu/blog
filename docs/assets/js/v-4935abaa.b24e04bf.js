"use strict";(self.webpackChunkziqiangxu_github_io=self.webpackChunkziqiangxu_github_io||[]).push([[7851],{3951:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-4935abaa",path:"/accumulation/%E7%94%A8chroot%E4%BF%AE%E5%A4%8DLinux%E7%B3%BB%E7%BB%9F.html",title:"用 chroot 修复 Linux 系统",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"步骤概览",slug:"步骤概览",children:[{level:3,title:"第一步：挂载要修复系统的分区",slug:"第一步-挂载要修复系统的分区",children:[]},{level:3,title:"第二步： chroot到mnt目录下",slug:"第二步-chroot到mnt目录下",children:[]},{level:3,title:"第三步：安装我不小心删掉的软件",slug:"第三步-安装我不小心删掉的软件",children:[]}]},{level:2,title:"题外话",slug:"题外话",children:[]}],filePathRelative:"accumulation/用chroot修复Linux系统.md",git:{updatedTime:1595061131e3,contributors:[{name:"daryl",email:"ziqiang_xu@qq.com",commits:2},{name:"Daryl.Xu",email:"ziqiang_xu@yeah.net",commits:1},{name:"daryl",email:"ziqiang_xu@yeah.net",commits:1}]}}},9988:(e,n,a)=>{a.r(n),a.d(n,{default:()=>o});const s=(0,a(6252).uE)('<h1 id="用-chroot-修复-linux-系统" tabindex="-1"><a class="header-anchor" href="#用-chroot-修复-linux-系统" aria-hidden="true">#</a> 用 <code>chroot</code> 修复 <code>Linux</code> 系统</h1><p>我用的操作系统是 <code>Deepin</code> 自己手残，卸载了某个软件，导致无法进入桌面环境，且没有办法进入其他tty。</p><blockquote><p>既然我清晰地记得是因为卸载某个软件导致的这个问题，那么就有解决办法了。我只要把这个软件装回去就好啦！所以我需要能够使用apt工具</p></blockquote><p>还好一直保留者 <code>Deepin</code> 的 <code>live</code> 系统 进入 <code>live</code> 系统后我进行了如下操作：</p><h2 id="步骤概览" tabindex="-1"><a class="header-anchor" href="#步骤概览" aria-hidden="true">#</a> 步骤概览</h2><ol><li>将要修复系统的根分区挂载到<code>/mnt</code>目录下，如果还有其它分区都统一以<code>/mnt</code>为根目录进行挂载</li><li><code>chroot</code>到<code>mnt</code>目录下</li><li>安装我不小心删掉的软件</li></ol><h3 id="第一步-挂载要修复系统的分区" tabindex="-1"><a class="header-anchor" href="#第一步-挂载要修复系统的分区" aria-hidden="true">#</a> 第一步：挂载要修复系统的分区</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 备注，sda5是我的根分区，sda6是我的home分区。请根据实际情况执行指令</span>\n<span class="token function">sudo</span> <span class="token function">mount</span> /dev/sda5 /mnt\n<span class="token function">sudo</span> <span class="token function">mount</span> /dev/sda6 /mnt/home \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>系统运行的时候还需要其它的一些虚拟分区【一些和设备有关的分区，这句话对不对各位看官自行斟酌】</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 这条命令依次将live系统的 /dev /dev/pts /proc /sys /run 分区挂载到要修复的</span>\n<span class="token comment"># 系统的根目录，这些分区在系统运行的时候是需要的</span>\n<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> /dev /dev/pts /proc /sys /run<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">sudo</span> <span class="token function">mount</span> -B <span class="token variable">$i</span> /mnt<span class="token variable">$i</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="第二步-chroot到mnt目录下" tabindex="-1"><a class="header-anchor" href="#第二步-chroot到mnt目录下" aria-hidden="true">#</a> 第二步： <code>chroot</code>到<code>mnt</code>目录下</h3><p><code>sudo chroot /mnt</code> 这步执行完了之后，就登录到了要修复的系统的 <code>root</code> 账户</p><h3 id="第三步-安装我不小心删掉的软件" tabindex="-1"><a class="header-anchor" href="#第三步-安装我不小心删掉的软件" aria-hidden="true">#</a> 第三步：安装我不小心删掉的软件</h3><p>在这一步，遇到了困难，<code>apt</code> 没办法解析软件源的地址<code>packages.deepin.com</code>。ping了一下<code>packages.deepin.com</code>对应的 <code>ip</code> 地址，是通的，估计是 <code>dns</code> 的服务没启动吧，然后改了一下 <code>/etc/hosts</code>，搞定</p><h2 id="题外话" tabindex="-1"><a class="header-anchor" href="#题外话" aria-hidden="true">#</a> 题外话</h2><p><code>Deepin</code> 是我用得最久的 <code>Linux</code> 桌面发行版。现在用的电脑已经一年多没有重装系统了</p>',16),o={render:function(e,n){return s}}}}]);