import{_ as n,o as s,c as a,e}from"./app-02ce3a1e.js";const o={},t=e(`<h1 id="将-gradle-镜像源改为阿里源" tabindex="-1"><a class="header-anchor" href="#将-gradle-镜像源改为阿里源" aria-hidden="true">#</a> 将 <code>Gradle</code> 镜像源改为阿里源</h1><p>加速 <code>Gradle</code> 下载依赖包的速度</p><h2 id="全局修改" tabindex="-1"><a class="header-anchor" href="#全局修改" aria-hidden="true">#</a> 全局修改</h2><p>文件<code>~/.gradle/init.gradle</code></p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>allprojects <span class="token punctuation">{</span>
    repositories <span class="token punctuation">{</span>
        maven <span class="token punctuation">{</span>
            url <span class="token interpolation-string"><span class="token string">&quot;http://maven.aliyun.com/nexus/content/groups/public&quot;</span></span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="根据项目修改" tabindex="-1"><a class="header-anchor" href="#根据项目修改" aria-hidden="true">#</a> 根据项目修改</h2><p>文件：项目根目录的文件<code>build.gradle</code>中 往 <code>repositories</code> 节点添加 <code>maven{ url &#39;https://maven.aliyun.com/repository/public&#39;}</code></p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>buildscript <span class="token punctuation">{</span>
    repositories <span class="token punctuation">{</span>
        maven<span class="token punctuation">{</span> url <span class="token string">&#39;https://maven.aliyun.com/repository/public&#39;</span><span class="token punctuation">}</span>  <span class="token comment">// 修改1</span>
        <span class="token function">mavenCentral</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// maven官方的吧？</span>
        <span class="token function">mavenLocal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 本地仓库</span>
        <span class="token operator">**</span><span class="token operator">**</span><span class="token operator">**</span><span class="token operator">**</span><span class="token operator">**</span><span class="token operator">**</span><span class="token operator">**</span>  <span class="token comment">// 其他镜像源，优先级较低</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

repositories <span class="token punctuation">{</span>
    maven<span class="token punctuation">{</span> url <span class="token string">&#39;https://maven.aliyun.com/repository/public&#39;</span><span class="token punctuation">}</span>  <span class="token comment">// 修改2</span>
    <span class="token operator">**</span><span class="token operator">**</span><span class="token operator">**</span><span class="token operator">**</span><span class="token operator">**</span><span class="token operator">**</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=[t];function c(i,l){return s(),a("div",null,p)}const d=n(o,[["render",c],["__file","将Gradle镜像源改为阿里源.html.vue"]]);export{d as default};
