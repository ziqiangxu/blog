import{_ as n,o as s,c as e,e as a}from"./app-31f47b37.js";const i={},l=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 \`pipenv\` 命令</span>
pip3 <span class="token function">install</span> pipenv
pipenv <span class="token parameter variable">--version</span> <span class="token comment"># 请保证 ~/.local/bin 被添加到 PATH 环境变量中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建虚拟环境" tabindex="-1"><a class="header-anchor" href="#创建虚拟环境" aria-hidden="true">#</a> 创建虚拟环境</h2><p>在项目根目录执行 <code>pipenv shell --python path/to/specified/python</code></p><p>使用指定版本的 <code>python</code> 解释器来创建虚拟环境，在执行成功后，项目根目录会自动生成一个<code>Pipfile</code>。</p><div class="language-toml line-numbers-mode" data-ext="toml"><pre class="language-toml"><code><span class="token comment"># Pipfile文件的内容</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token table class-name">source</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token comment"># 软件源相关设置</span>
<span class="token key property">url</span> <span class="token punctuation">=</span> <span class="token string">&quot;https://pypi.org/simple&quot;</span>
<span class="token key property">verify_ssl</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token key property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;pypi&quot;</span>

<span class="token punctuation">[</span><span class="token table class-name">packages</span><span class="token punctuation">]</span>
<span class="token comment"># 项目运行时需要的依赖包</span>

<span class="token punctuation">[</span><span class="token table class-name">dev-packages</span><span class="token punctuation">]</span>
<span class="token comment"># 项目开发时需要的依赖包</span>

<span class="token punctuation">[</span><span class="token table class-name">requires</span><span class="token punctuation">]</span>
<span class="token key property">python_version</span> <span class="token punctuation">=</span> <span class="token string">&quot;3.6&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>python</code> 的多版本管理推荐使用 <code>miniconda</code></p></blockquote><h2 id="使用虚拟环境" tabindex="-1"><a class="header-anchor" href="#使用虚拟环境" aria-hidden="true">#</a> 使用虚拟环境</h2><blockquote><p>特别注意：以下命令均需要在项目根目录执行</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 激活项目的虚拟环境</span>
pipenv shell

<span class="token comment"># 安装运行时依赖包，执行成功后软件包将被添加到 Pipfile 的 packages 下</span>
pipenv <span class="token function">install</span> <span class="token assign-left variable">xxx</span><span class="token operator">==</span><span class="token number">0.0</span>.1

<span class="token comment"># 安装开发依赖包，执行成功后软件包将被添加到 Pipfile 的 dev-packages 下</span>
pipenv <span class="token function">install</span> <span class="token parameter variable">--dev</span> <span class="token assign-left variable">xxx</span><span class="token operator">==</span><span class="token number">0.0</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述命令执行结束之后，会有一个 <code>Pipfile.lock</code> 文件生成，这个 <code>Pipfile.lock</code> 记录了「依赖包」和「依赖包的依赖」的信息，这些信息包含名字、具体版本、<code>markers</code>、<code>hash</code>和安装源。</p><blockquote><p>特别注意：<code>Pipfile</code> 和 <code>Pipfile.lock</code> 这两个文件务必纳入版本管理。 直接使用 <code>pip</code> 命令安装软件包不会更新 <code>Pipfile</code> 和 <code>Pipfile.lock</code></p></blockquote><h2 id="利用pipfile和pipfile-lock快速恢复虚拟环境" tabindex="-1"><a class="header-anchor" href="#利用pipfile和pipfile-lock快速恢复虚拟环境" aria-hidden="true">#</a> 利用Pipfile和Pipfile.lock快速恢复虚拟环境</h2><p>得益于 <code>Pipfile.lock</code> 强大的表达能力，它可以很准确地描述一个虚拟环境。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 假设某项目结构如下所示</span>
pipenv-test/
├── appname
│   └── test.py
├── Pipfile
└── Pipfile.lock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们使用以下命令就可以快速创建一个尽可能一致的环境</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> pipenv-test
pipenv shell <span class="token parameter variable">--python</span> path/to/specified/python  <span class="token comment"># 创建虚拟环境</span>
pipenv <span class="token function">install</span>  <span class="token comment"># 安装运行时依赖包</span>
pipenv <span class="token function">install</span> <span class="token parameter variable">--dev</span>  <span class="token comment"># 安装包括开发时需要的依赖包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),p=[l];function c(o,t){return s(),e("div",null,p)}const r=n(i,[["render",c],["__file","pipenv-simple-tutorial.html.vue"]]);export{r as default};
