(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{257:function(t,e,_){"use strict";_.r(e);var r=_(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[t._m(0),t._v(" "),_("p",[t._v("阮一峰老师的文章非常清楚地介绍了如何生成"),_("code",[t._v("jwt")]),t._v("这个"),_("code",[t._v("token")]),t._v(" "),_("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html"),_("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),_("p",[_("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/04/oauth_design.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("OAuth2简单解释"),_("OutboundLink")],1),t._v(" "),_("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("OAuth2的四种授权方式"),_("OutboundLink")],1)]),t._v(" "),_("comment-comment")],1)},[function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[_("code",[t._v("JWT")]),t._v(" 是"),_("code",[t._v("JSON Web Token")]),t._v("的缩写。我们用大写的"),_("code",[t._v("JWT")]),t._v("表示这种认证机制，我们用小写的"),_("code",[t._v("jwt")]),t._v("来表示"),_("code",[t._v("JWT")]),t._v("机制中的生成的"),_("code",[t._v("token")]),t._v("，"),_("code",[t._v("jwt")]),t._v("是一个字符串")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("拜读了阮一峰老师的文章，我知道了"),e("code",[this._v("jwt")]),this._v("不仅是一个"),e("code",[this._v("token")]),this._v("，它还是一个包含了其他信息的"),e("code",[this._v("token")]),this._v("\n看了文章底下的评论，甚是精彩！我觉得该文还需要一些补充")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"认证流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#认证流程","aria-hidden":"true"}},[this._v("#")]),this._v(" 认证流程")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"一：申请凭证jwt："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一：申请凭证jwt：","aria-hidden":"true"}},[this._v("#")]),this._v(" 一：申请凭证"),e("code",[this._v("jwt")]),this._v("：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("客户端发送账号和密码给服务器")]),this._v(" "),e("li",[this._v("服务器查询数据库，认证成功后服务器返回凭证"),e("code",[this._v("jwt")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("为了防止伪造，需要确保"),e("code",[this._v("jwt")]),this._v("只能由服务端生成，实现方法阮一峰老师的文章有讲")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"二：拿着凭证jwt访问服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二：拿着凭证jwt访问服务器","aria-hidden":"true"}},[this._v("#")]),this._v(" 二：拿着凭证"),e("code",[this._v("jwt")]),this._v("访问服务器")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ol",[_("li",[t._v("把"),_("code",[t._v("jwt")]),t._v("放到"),_("code",[t._v("HTTP")]),t._v("请求头的"),_("code",[t._v("Authorization")]),t._v("字段里【当然可以放在其他位置，只要确保服务器可以拿到】")]),t._v(" "),_("li",[t._v("服务器拿到客户端提交的"),_("code",[t._v("jwt")]),t._v("之后，通过对"),_("code",[t._v("jwt")]),t._v("里的字段进行签名运算来验证这个"),_("code",[t._v("jwt")]),t._v("是否有效")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("签名运算只需要用到服务器的"),e("code",[this._v("secret")]),this._v("和"),e("code",[this._v("jwt")]),this._v("里的其它信息【这样就不需要去查询数据库了】")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[t._v("使用"),_("code",[t._v("JWT")]),t._v("认证，服务器变成无状态了，从而比较容易实现扩展。\n"),_("code",[t._v("JWT")]),t._v("的最大缺点，由于服务器不保存"),_("code",[t._v("session")]),t._v("状态，因此无法在使用过程中废止某个"),_("code",[t._v("token")]),t._v("，或者更改 "),_("code",[t._v("token")]),t._v("的权限。也就是说，一旦"),_("code",[t._v("JWT")]),t._v("签发了，在到期之前就会始终有效，除非服务器部署额外的逻辑。\n说一句套话但绝对不是空话：还是需要根据实际应用场景选用认证方式的")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"使用案例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用案例","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用案例")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("公司有一个对外提供的服务，用"),e("code",[this._v("gRPC")]),this._v("实现，用户身份验证的时候使用了"),e("code",[this._v("JWT")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"扩展阅读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读","aria-hidden":"true"}},[this._v("#")]),this._v(" 扩展阅读")])}],!1,null,null,null);e.default=s.exports}}]);