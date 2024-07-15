import{_ as s,o as a,c as p,f as t,e as n}from"./app-047d46b8.js";const e="/blog/assets/case1-2768280e.png",o="/blog/assets/case2-d4b2c246.png",c={},l=n("<p>时间荏苒，没想到快乐的研一生活这么快就过去了，我的高压研二上半年也过去了。学校也开始了研究生第二阶段奖学金的评定，作为班委团队的一员，当然是要给同学们整理和审核评奖材料的。</p><p>3月5号 星期六 下午五点半，班委们在卓越楼的1104开始审核各种材料，由于我对各种奖项的记分规则并不了解，所以分配了绩点计算的工作，就是通过“成绩总表”分别算出150个同学的绩点，然后填入到一个“在线表格”中，大约花了两个小时。四个人弄到了晚上十点多，呼～，还是有点累。当晚就出具了一份粗略的排名表，恭喜大家一年的辛勤努力得到了一些肯定！！！</p><blockquote><p>奖学金积分 = 绩点积分 + 六级积分 + 论文、专利和竞赛积分 + 思想政治</p></blockquote><p>3月6号对奖学金积分计算结果通过“在线表格”进行了公示，3月7号 星期一 我在公司搬砖。当天下午四点多的时候，看到班委群里说有同学发现绩点算错了。于是重新去“成绩总表”查了一下，确实是算错了。</p><blockquote><p>由于这个同学有一门课叫“肌骨生物力学建模”，因为课程成绩给的是等级，所以成绩总表里无法通过姓名直接查到成绩。需要手动将 excel 表格里的等级转化为分值，当时已经想不出来是什么原因导致的计算错误了，我就觉得是自己手滑，复制错位置了。吓得我去检查了一下有“肌骨生物力学建模”课程的同学的绩点，检查了其中两个同学的分数没有问题。我竟然天真地以为肯定是自己手滑，就只算错了这一个同学，当时在公司手头上也有一些事情，就妄想不用重新核算了。在班委群里发出了“不用重新算了”、“我不想😂，我觉得没问题” 文字，且看后面怎么打脸。</p></blockquote><p>其他班委同学感到不放心，提议还是再算一次（我内心是拒绝的，但是想想稳妥起见，大家再重新核算一下也好），我就录了两段算绩点的视频。自从发现了第一个同学的绩点算错了，我就不敢再改“在线表格”了，就看着其他班委来核对。</p><p>最后核对下来，绩点算错了的有5个，其中4个有“肌骨生物力学模型”，哎呀，真是啪啪打脸！！！当时真的是羞愧至极。。。想找个缝钻进去</p><p>到了晚上六点多的时候，大家都核对完了。我痛定思痛，决定再核算一遍，由于先前的操作经验，对成绩总表的结构还是比较熟悉了，不过还是不会弄那个数据透视表。这次吸取了教训，没有再使用手工的方式来计算，而是先将 excel 另存为 csv 格式，然后写了个简单的程序（其实最开始就有这个想法，但是看着大家都在焦急地审核材料，我在旁边开始写代码，着实有点不合适，所以就没有实施）。最后算出来的结果和大家核对出来的结果误差控制在 0.001 分（有挂科记录的同学除外）。呼～，绩点这一块终于放心了！！！</p><p>为了弥补我的过错和减轻后期更正积分的工作量，我决定对在“在线表格”做一个自动计算工具。吐槽一下，这个“在线表格”真的设计得太难用了。。。更可恶的是还不敢改</p>",9),i=n('<p><img src="'+e+'" alt="case1"><img src="'+o+`" alt="case2"> 你说在 excel 中 <code>3.5(3+3.5)</code> 这种字符串怎么转化为数值 3.5， <s>你可别讲正则匹配了</s>。这样形式的表格给成绩汇总带来了很大的不便。</p><h2 id="反思" tabindex="-1"><a class="header-anchor" href="#反思" aria-hidden="true">#</a> 反思</h2><p>TODO 人在做重复的事情时不如计算机可靠 还是要本着对他人负责的态度做事 感谢同学们的包容 敢于提意见</p><h2 id="计算绩点的代码" tabindex="-1"><a class="header-anchor" href="#计算绩点的代码" aria-hidden="true">#</a> 计算绩点的代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Record</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> record_str<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        column <span class="token operator">=</span> record_str<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>student_id <span class="token operator">=</span> column<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
        self<span class="token punctuation">.</span>student_name <span class="token operator">=</span> column<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> column<span class="token punctuation">[</span><span class="token number">21</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;缺考&#39;</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>score <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
           self<span class="token punctuation">.</span>score <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span>column<span class="token punctuation">[</span><span class="token number">21</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>weight <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span>column<span class="token punctuation">[</span><span class="token number">38</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>student_id<span class="token punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>student_name<span class="token punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>score<span class="token punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>weight<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span>

records <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;2020电子信息成绩表.csv&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    f<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span>
    line_num <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        line <span class="token operator">=</span> f<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> line<span class="token punctuation">:</span>
            <span class="token keyword">break</span>
        record <span class="token operator">=</span> Record<span class="token punctuation">(</span>line<span class="token punctuation">)</span>
        records<span class="token punctuation">.</span>append<span class="token punctuation">(</span>record<span class="token punctuation">)</span>
        <span class="token comment"># print(record)</span>
        line_num <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token comment"># print(line_num)</span>

<span class="token comment"># students = [&#39;203592604&#39;]</span>
students <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;电子信息2020级学生名单.csv&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    f<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        line <span class="token operator">=</span> f<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> line<span class="token punctuation">:</span>
            <span class="token keyword">break</span>
        columns <span class="token operator">=</span> line<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
        <span class="token comment"># print(columns)</span>
        students<span class="token punctuation">.</span>append<span class="token punctuation">(</span>columns<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> student <span class="token keyword">in</span> students<span class="token punctuation">:</span>
    total_weight <span class="token operator">=</span> <span class="token number">0</span>
    sum_score <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> record <span class="token keyword">in</span> records<span class="token punctuation">:</span>
        record<span class="token punctuation">:</span> Record
        <span class="token keyword">if</span> record<span class="token punctuation">.</span>student_id <span class="token operator">==</span> student<span class="token punctuation">:</span>
            sum_score <span class="token operator">+=</span> record<span class="token punctuation">.</span>score <span class="token operator">*</span> record<span class="token punctuation">.</span>weight
            total_weight <span class="token operator">+=</span> record<span class="token punctuation">.</span>weight
            student_record <span class="token operator">=</span> record
    gpa <span class="token operator">=</span> sum_score <span class="token operator">/</span> total_weight <span class="token operator">*</span> <span class="token number">0.4</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>student_record<span class="token punctuation">.</span>student_id<span class="token punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token punctuation">{</span>student_record<span class="token punctuation">.</span>student_name<span class="token punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token punctuation">{</span>gpa<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function u(r,k){return a(),p("div",null,[l,t(" 因为班长不让，毕竟这表是辅导员设计的，emmm "),i])}const m=s(c,[["render",u],["__file","a-mistake-when-computing-gpa.html.vue"]]);export{m as default};