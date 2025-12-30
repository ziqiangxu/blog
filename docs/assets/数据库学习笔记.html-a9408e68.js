import{_ as s,o as n,c as a,e}from"./app-c2f5da75.js";const t={},p=e(`<h1 id="数据库学习笔记" tabindex="-1"><a class="header-anchor" href="#数据库学习笔记" aria-hidden="true">#</a> 数据库学习笔记</h1><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--创建数据库test --</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> test
<span class="token comment">--切换到数据库test --</span>
<span class="token keyword">USE</span> test<span class="token punctuation">;</span>

<span class="token comment">--创建数据表test_table,包含字段user_id,tel,并将tel设置为不重复的: --</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> test_table <span class="token punctuation">(</span>
	user_id <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
	tel <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
	<span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>tel<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">--显示数据表的字段（列） --</span>
<span class="token keyword">SHOW</span> <span class="token keyword">COLUMNS</span> <span class="token keyword">FROM</span> test_table；
<span class="token comment">--插入数据 ---</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> test_table <span class="token punctuation">(</span>user_id<span class="token punctuation">,</span>tel<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">&quot;测试0&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> test_table <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">&quot;测试1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">&quot;测试2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">--选择test_table的所有数据项插入test_table --</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> test_table <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> test_table<span class="token punctuation">;</span>

<span class="token comment">--从test_table表中删除user_id等于&#39;测试0&#39;的数据 --</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> test_table <span class="token keyword">WHERE</span> user_id<span class="token operator">=</span><span class="token string">&#39;测试0&#39;</span><span class="token punctuation">;</span>

<span class="token comment">--显示用户的权限 --</span>
<span class="token keyword">SHOW</span> GRANTS <span class="token keyword">FOR</span> test<span class="token variable">@localhost</span><span class="token punctuation">;</span>
<span class="token comment">--创建用户test并设置密码为123 --</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> test<span class="token variable">@localhost</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">;</span>

<span class="token comment">--授予用户test在localhost端口对test数据库test_table表所有权限：(有待考察) --</span>
<span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">ON</span> test<span class="token punctuation">.</span>test_table <span class="token keyword">TO</span> test<span class="token variable">@localhost</span><span class="token punctuation">;</span>

<span class="token comment">--授予用户test在localhost端口对test数据库的所有权限：(需要先切换到test数据库) --</span>
<span class="token keyword">USE</span> test<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">ON</span> test <span class="token keyword">TO</span> <span class="token string">&#39;test&#39;</span><span class="token variable">@&#39;localhost&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function l(c,i){return n(),a("div",null,o)}const d=s(t,[["render",l],["__file","数据库学习笔记.html.vue"]]);export{d as default};
