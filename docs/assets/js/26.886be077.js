(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{196:function(t,i,n){"use strict";n.r(i);var e=n(0),a=Object(e.a)({},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("整个流程：\n浏览器发起请求\nnginx处理进行转发（这就是所谓的负载均衡），转发到php-fpm监听的端口\nphp-fpm应该是php的一个进程管理工具，它把nginx的请求用CGI的形式告诉给PHP\nPHP返回执行结果，再由php-fpm告诉nginx\nnginx把结果返回给浏览器")]),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("把uri分解成fastcgi_script_name和fastcgi_path")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("comment-comment")],1)},[function(){var t=this.$createElement,i=this._self._c||t;return i("h1",{attrs:{id:"php-与-nginx的结合"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#php-与-nginx的结合","aria-hidden":"true"}},[this._v("#")]),this._v(" "),i("code",[this._v("PHP")]),this._v(" 与 "),i("code",[this._v("Nginx")]),this._v("的结合")])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("ul",[n("li",[n("code",[t._v("nginx")]),t._v("：web服务器，反向代理软件")]),t._v(" "),n("li",[n("code",[t._v("PHP")]),t._v("：脚本语言")]),t._v(" "),n("li",[n("code",[t._v("php-fpm")]),t._v("：默认监听9000端口，处理来自nginx转发的任务。\n用户发起网络请求时，对请求进行判断，PHP文件的时候，nginx会把请求转交给php-fpm监听的端口（在nginx的配置文件里面设置）。")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("h3",{attrs:{id:"fastcgi-split-path-info"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fastcgi-split-path-info","aria-hidden":"true"}},[this._v("#")]),this._v(" fastcgi_split_path_info")])},function(){var t=this.$createElement,i=this._self._c||t;return i("h3",{attrs:{id:"try-files"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#try-files","aria-hidden":"true"}},[this._v("#")]),this._v(" try_files")])},function(){var t=this.$createElement,i=this._self._c||t;return i("h3",{attrs:{id:"fastcgi-param"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fastcgi-param","aria-hidden":"true"}},[this._v("#")]),this._v(" fastcgi_param")])}],!1,null,null,null);i.default=a.exports}}]);