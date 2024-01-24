import{_ as e,o,c as n,e as d}from"./app-f7b43009.js";const c={},a=d(`<h1 id="在-django-项目中使用-mysql" tabindex="-1"><a class="header-anchor" href="#在-django-项目中使用-mysql" aria-hidden="true">#</a> 在 <code>Django</code> 项目中使用 <code>MySql</code></h1><p><code>pip</code> 安装数据库驱动 <code>mysqlclient</code> 的时候出现 <code>mysql_config not found</code> 错误 在终端运行<code>sudo apt install libmysqld-dev</code><code>Python3</code> 连接 <code>MySQL</code>，使用扩展库 <code>pymysql</code>。若使用 <code>Django</code> 的数据库模型，需要在项目或 <code>APP</code> 的 <code>__init__.py</code> 添加如下代码:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pymysql
pymysql<span class="token punctuation">.</span>install_as_MySQLdb<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>不然可能出现 <code>No module named MySQLdb</code> 的错误</p>`,4),s=[a];function t(l,i){return o(),n("div",null,s)}const _=e(c,[["render",t],["__file","在Django项目中使用MySQL.html.vue"]]);export{_ as default};
