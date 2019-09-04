(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{199:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[this._m(0),this._v(" "),this._m(1),this._v(" "),this._m(2),this._m(3),this._v(" "),e("comment-comment")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"django-开发微信公众号出现-csrf-cookie-not-set-错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#django-开发微信公众号出现-csrf-cookie-not-set-错误","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("Django")]),this._v(" 开发微信公众号出现 "),e("code",[this._v("CSRF cookie not set")]),this._v(" 错误")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("当用户向公众号发送消息的时候，使用\n"),s("code",[t._v("python3 manage.py runserver 0.0.0.0:80")]),t._v("\n出现错误 "),s("code",[t._v("Forbidden (CSRF cookie not set.): /wx")]),t._v("\n这是 "),s("code",[t._v("Django")]),t._v(" 默认开启的一种防止跨域攻击的选项，要求用 "),s("code",[t._v("POST")]),t._v(" 访问网站的时候提供 "),s("code",[t._v("CSRF cookie")]),t._v("（这个一般会在用户使用 "),s("code",[t._v("GET")]),t._v(" 请求 "),s("code",[t._v("Django")]),t._v(" 网站时颁发）\n截图\n"),s("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/6434906-b0273ed1b982f173.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"DeepinScreenshot_select-area_20171017210442.png"}}),t._v("\n此时，只要把项目中 "),s("code",[t._v("setting.py")]),t._v(" 文件中")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("MIDDLEWARE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.middleware.security.SecurityMiddleware'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.contrib.sessions.middleware.SessionMiddleware'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.middleware.common.CommonMiddleware'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 'django.middleware.csrf.CsrfViewMiddleware',")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.contrib.auth.middleware.AuthenticationMiddleware'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.contrib.messages.middleware.MessageMiddleware'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.middleware.clickjacking.XFrameOptionsMiddleware'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("第四行注释掉即可，关闭整个项目的 "),s("code",[t._v("CSRF")]),t._v("，这种方法可以快速解决这个问题\n但是只关闭对应的 "),s("code",[t._v("url")]),t._v(" 的处理函数更加优雅（请搜索 "),s("em",[t._v("局部关闭 "),s("code",[t._v("crsf")])]),t._v("）")])}],!1,null,null,null);e.default=a.exports}}]);