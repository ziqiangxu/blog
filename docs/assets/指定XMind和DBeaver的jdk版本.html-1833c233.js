import{_ as e,o as d,c as a,e as c}from"./app-f7b43009.js";const o="/blog/assets/xmind-ini-file-fd6951d3.png",i="/blog/assets/xmind-ini-file2-a30bd2b9.png",n={},s=c(`<h1 id="指定-xmind-和-dbeaver-的-jdk-版本" tabindex="-1"><a class="header-anchor" href="#指定-xmind-和-dbeaver-的-jdk-版本" aria-hidden="true">#</a> 指定 <code>XMind</code> 和 <code>DBeaver</code> 的 <code>JDK</code> 版本</h1><p>因为 <code>Linux</code> （我的是 <code>Deepin</code>）系统安装了新版本的 <code>JDK</code>，导致 <code>XMind</code> 和 <code>DBeaver</code> 无法启动（截止2017.12.19他们依赖于 <code>JDK 1.8</code>，就是 <code>Java 8</code> 的 <code>JDK</code>）。当然你的电脑安装了新版的 <code>JDK</code>，肯定是有原因的，总不能把它给卸载了吧。所以我们就需要给这两个软件指定一个匹配的 <code>JDK</code> 版本。 下面以 <code>XMind</code> 为例，<code>DBeaver</code> 进行类似的操作即可</p><h2 id="第一步-找到需要的-jdk-版本" tabindex="-1"><a class="header-anchor" href="#第一步-找到需要的-jdk-版本" aria-hidden="true">#</a> 第一步： 找到需要的 <code>JDK</code> 版本</h2><p>找到 <code>JDK</code> 的安装路径，我的是在这里64位的哦： <code>/usr/lib/jvm/java-8-openjdk-amd64/bin</code> 你也可以直接在文件管理器搜索 <code>JDK</code></p><h2 id="第二步-修改配置文件-使用指定的-jdk" tabindex="-1"><a class="header-anchor" href="#第二步-修改配置文件-使用指定的-jdk" aria-hidden="true">#</a> 第二步： 修改配置文件，使用指定的 <code>JDK</code></h2><p>用 <code>root</code> 用户编辑 <code>XMind</code> 的 <code>XMind.ini</code> 文件 我的是在这里哦： <code>/usr/share/xmind/XMind_amd64/XMind.ini</code> 加入两行(指定 <code>Java</code> 虚拟机)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-vm</span>
/usr/lib/jvm/java-8-openjdk-amd64/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+'" alt="深度截图_选择区域_20171219192153.png"></p><h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> Tips</h2><p>注意这两行要加在 <code>-vmargs</code> 之前（<code>-vmargs</code> 用于指定虚拟机参数）</p><p><img src="'+i+'" alt="image.png"></p><p>重新打开软件，愉快的使用吧！</p><h2 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> <code>macOS</code></h2><p><code>macOS</code> 下也是一样的解决办法，相关的配置文件在 <code>/Applications/DBeaver.app/Contents/Eclipse/dbeaver.ini</code></p>',14),r=[s];function t(p,h){return d(),a("div",null,r)}const m=e(n,[["render",t],["__file","指定XMind和DBeaver的jdk版本.html.vue"]]);export{m as default};
