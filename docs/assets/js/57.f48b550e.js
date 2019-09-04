(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{231:function(_,v,e){"use strict";e.r(v);var o=e(0),t=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"关闭-chrome-的安全策略：可用于跨域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关闭-chrome-的安全策略：可用于跨域","aria-hidden":"true"}},[_._v("#")]),_._v(" 关闭 "),e("code",[_._v("chrome")]),_._v(" 的安全策略：可用于跨域")]),_._v(" "),e("p",[_._v("对于 "),e("code",[_._v("Linux")]),_._v("，终端执行:\n"),e("code",[_._v("google-chrome --disable-web-security --user-data-dir=<path to store the data>")]),_._v("。")]),_._v(" "),e("blockquote",[e("p",[_._v("如 "),e("code",[_._v("google-chrome --disable-web-security --user-data-dir=/home/xu/test-dir")])])]),_._v(" "),e("ul",[e("li",[_._v("其中 "),e("code",[_._v("--disable-web-security")]),_._v(" 选项关闭 "),e("code",[_._v("web")]),_._v(" 的一些安全策略【其中包括阻止不合法的跨域请求】。")]),_._v(" "),e("li",[_._v("在 "),e("code",[_._v("Linux")]),_._v(" 下，如果要关闭安全策略，则必须指定一个目录 "),e("code",[_._v("user-data-dir")]),_._v(" 用于保存这样运行浏览器所产生的一些数据")])]),_._v(" "),e("h2",{attrs:{id:"使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用场景","aria-hidden":"true"}},[_._v("#")]),_._v(" 使用场景")]),_._v(" "),e("p",[_._v("前后端分离开发时")]),_._v(" "),e("ul",[e("li",[_._v("前端运行在 "),e("code",[_._v("http://localhost:8080")])]),_._v(" "),e("li",[_._v("后端运行在 "),e("code",[_._v("http://localhost:8000")])])]),_._v(" "),e("p",[_._v("这时前端对后端发起请求属于跨域了（只要协议、域名、端口有任何一个的不同，就被当作是跨域——不同"),e("strong",[_._v("域")]),_._v("），正式上线网站的时候一般都会把前后端放到一个"),e("strong",[_._v("域")]),_._v("里，比如将前端打包成静态资源后使用 "),e("code",[_._v("nginx")]),_._v(" 进行部署或者直接由和后台代码放在一起。")]),_._v(" "),e("h2",{attrs:{id:"限制跨域访问是浏览器的安全策略，主要有两种："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#限制跨域访问是浏览器的安全策略，主要有两种：","aria-hidden":"true"}},[_._v("#")]),_._v(" 限制跨域访问是浏览器的安全策略，主要有两种：")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("DOM")]),_._v(" 同源策略：禁止对不同源页面 "),e("code",[_._v("DOM")]),_._v(" 进行操作。这里主要场景是 "),e("code",[_._v("iframe")]),_._v(" 跨域的情况，不同"),e("strong",[_._v("域")]),_._v("的 "),e("code",[_._v("iframe")]),_._v(" 是限制互相访问的。")]),_._v(" "),e("li",[e("code",[_._v("XMLHttpRequest")]),_._v(" 同源策略：禁止使用 "),e("code",[_._v("XHR")]),_._v(" 对象向不同"),e("strong",[_._v("域")]),_._v("发起 "),e("code",[_._v("HTTP")]),_._v(" 请求。")])]),_._v(" "),e("h2",{attrs:{id:"为什么浏览器要这样做？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么浏览器要这样做？","aria-hidden":"true"}},[_._v("#")]),_._v(" 为什么浏览器要这样做？")]),_._v(" "),e("p",[_._v("当然是为了安全啊")]),_._v(" "),e("p",[_._v("我们假设有两个"),e("strong",[_._v("域")]),_._v(":")]),_._v(" "),e("ul",[e("li",[e("strong",[_._v("域")]),_._v("1：存着你血汗钱的网站： "),e("code",[_._v("http://money.com")])]),_._v(" "),e("li",[e("strong",[_._v("域")]),_._v("：一个恶意网站： "),e("code",[_._v("http://坏人.com")])])]),_._v(" "),e("p",[_._v("为了方便在客户端存储少量信息，浏览器推出了 "),e("code",[_._v("cookie")]),_._v(" 这样的功能。")]),_._v(" "),e("blockquote",[e("p",[_._v("即浏览器每次发起 "),e("code",[_._v("http")]),_._v(" 请求，浏览器都会自动带上这个"),e("strong",[_._v("域")]),_._v("的 "),e("code",[_._v("cookie")]),_._v("， 比如访问 "),e("code",[_._v("http://money.com")]),_._v(" 的主页，浏览器则会自动帮你带上 "),e("code",[_._v("http://money.com")]),_._v(" 这个"),e("strong",[_._v("域")]),_._v("的 "),e("code",[_._v("cookie")])])]),_._v(" "),e("p",[_._v("这样可以很方便的使得 "),e("code",[_._v("http://money.com")]),_._v(" 的后台程序根据 "),e("code",[_._v("cookie")]),_._v(" 所携带的信息来改善用户的使用体验，最常用的就是以此来识别用户，使用户保持登录状态。但是这样有一个副作用：")]),_._v(" "),e("blockquote",[e("p",[_._v("即使你是在其它"),e("strong",[_._v("域")]),_._v("通过 "),e("code",[_._v("XMLHttpRequest")]),_._v(" 对象发起这个 "),e("code",[_._v("http")]),_._v(" 请求，也同样是带上 "),e("code",[_._v("money.com")]),_._v(" 这个"),e("strong",[_._v("域")]),_._v("的 "),e("code",[_._v("cookie")]),_._v("。这就给坏人带来了机会")])]),_._v(" "),e("p",[e("strong",[_._v("试想这样一个场景")]),_._v(":")]),_._v(" "),e("p",[_._v("你刚登录了 "),e("code",[_._v("http://money.com")]),_._v(" 这个网站，验证信息保存在 "),e("code",[_._v("cookie")]),_._v(" 里，而且还没有过期。然后你又进入了 "),e("code",[_._v("http://坏人.com")]),_._v(" 这个网站，坏人网站载入的时候就在后台用 "),e("code",[_._v("XMLHttpRequest")]),_._v(" 对象向 "),e("code",[_._v("http://money.com")]),_._v(" 发请求。如果浏览器不管不顾，直接就允许了，那这个请求就带着 "),e("code",[_._v("cookie")]),_._v(" 发出去了，服务端一看 "),e("code",[_._v("cookie")]),_._v(" 里的验证信息，是 "),e("code",[_._v("OK")]),_._v(" 的。坏人不就得到服务器返回的信息了么，然后他就拿着你的信息做坏事了，好可怕。")]),_._v(" "),e("p",[_._v("实际上呢，以 "),e("code",[_._v("google-chrome")]),_._v(" 为例（"),e("code",[_._v("google-chrome")]),_._v(" 默认打开了相关的安全策略）：")]),_._v(" "),e("ol",[e("li",[_._v("如果服务端允许任何其它域来请求：则允许这个请求，然后坏人就得逞了。")]),_._v(" "),e("li",[_._v("如果服务端只允许指定的域来请求：发现这个请求来自于"),e("code",[_._v("http://坏人.com")]),_._v(" 域，不在设定的许可名单里，则不会允许这个陌生的请求")])]),_._v(" "),e("blockquote",[e("p",[_._v("当我们关闭了 "),e("code",[_._v("google-chrome")]),_._v(" 的安全策略的时候，这个请求直接就发出去了，根本不管服务端允许不允许的。这是怎么实现的呢，请求里不带发送域或者是直接将发送域替换成目的域吗？")])])])}],!1,null,null,null);v.default=t.exports}}]);