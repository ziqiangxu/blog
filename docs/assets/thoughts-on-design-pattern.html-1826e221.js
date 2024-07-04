import{_ as e,o as a,c as r,e as t}from"./app-be4ed936.js";const i={},h=t('<p>最近在读 《Head First 设计模式》，从书中摘取了一些设计原则</p><p>我们总是需要花许多时间在第一版软件开发之后，系统的维护和变化，比原先开发的时间多得多，所以我们要致力于提高可维护性和可扩展性。</p><p>使用设计模式，就能达到上述的目的。因为设计模式是历经验证的 <code>OO（Object Oriented）</code> 设计经验</p><h2 id="设计原则" tabindex="-1"><a class="header-anchor" href="#设计原则" aria-hidden="true">#</a> 设计原则</h2><ul><li>利用其他开发人员的经验与智慧</li><li>找出应用中可能需要变化之处，把它们独立出来，不要和那些不需要变化的代码混在一起</li><li>针对接口编程而不是针对实现编程</li><li>多用组合，少用继承</li><li>交互对象之间的松耦合设计</li><li>开放-关闭原则：类应该对扩展开放，对修改关闭</li></ul><h2 id="有哪些设计模式" tabindex="-1"><a class="header-anchor" href="#有哪些设计模式" aria-hidden="true">#</a> 有哪些设计模式？</h2><h3 id="策略模式-strategy-pattern" tabindex="-1"><a class="header-anchor" href="#策略模式-strategy-pattern" aria-hidden="true">#</a> 策略模式 (Strategy Pattern)</h3><p>定义了算法族，分别封装，让他们之间可以相互替换，此模式让算法的变化独立于使用算法的客户。</p><h3 id="观察者模式-observer-pattern" tabindex="-1"><a class="header-anchor" href="#观察者模式-observer-pattern" aria-hidden="true">#</a> 观察者模式（Observer Pattern）</h3><p>在对象之间定义一对多的依赖关系，（observer 依赖 observable），observable 对象一旦发生变化，可以通知到所有已注册的 observer 对象。</p><p>体现的设计原则：</p><ol><li>针对接口编程</li><li>交互对象之间的松耦合设计</li></ol><h3 id="装饰者模式" tabindex="-1"><a class="header-anchor" href="#装饰者模式" aria-hidden="true">#</a> 装饰者模式</h3><h2 id="我的体会" tabindex="-1"><a class="header-anchor" href="#我的体会" aria-hidden="true">#</a> 我的体会</h2><ul><li>易于扩展的内涵是不修改或者少修改现有代码的情况下，通过新增代码就可以实现新的功能。不变更原有的代码，bug 会少很多。</li></ul>',15),n=[h];function d(l,s){return a(),r("div",null,n)}const c=e(i,[["render",d],["__file","thoughts-on-design-pattern.html.vue"]]);export{c as default};