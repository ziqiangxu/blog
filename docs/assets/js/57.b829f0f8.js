(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{424:function(t,a,n){"use strict";n.r(a);var i=n(42),s=Object(i.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"php-与-nginx的结合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#php-与-nginx的结合"}},[t._v("#")]),t._v(" "),n("code",[t._v("PHP")]),t._v(" 与 "),n("code",[t._v("Nginx")]),t._v("的结合")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("nginx")]),t._v("：web服务器，反向代理软件")]),t._v(" "),n("li",[n("code",[t._v("PHP")]),t._v("：脚本语言")]),t._v(" "),n("li",[n("code",[t._v("php-fpm")]),t._v("：默认监听9000端口，处理来自nginx转发的任务。\n用户发起网络请求时，对请求进行判断，PHP文件的时候，nginx会把请求转交给php-fpm监听的端口（在nginx的配置文件里面设置）。")])]),t._v(" "),n("p",[t._v("整个流程：\n浏览器发起请求\nnginx处理进行转发（这就是所谓的负载均衡），转发到php-fpm监听的端口\nphp-fpm应该是php的一个进程管理工具，它把nginx的请求用CGI的形式告诉给PHP\nPHP返回执行结果，再由php-fpm告诉nginx\nnginx把结果返回给浏览器")]),t._v(" "),n("h3",{attrs:{id:"fastcgi-split-path-info"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fastcgi-split-path-info"}},[t._v("#")]),t._v(" fastcgi_split_path_info")]),t._v(" "),n("p",[t._v("把uri分解成fastcgi_script_name和fastcgi_path")]),t._v(" "),n("h3",{attrs:{id:"try-files"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#try-files"}},[t._v("#")]),t._v(" try_files")]),t._v(" "),n("h3",{attrs:{id:"fastcgi-param"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fastcgi-param"}},[t._v("#")]),t._v(" fastcgi_param")]),t._v(" "),n("comment-comment")],1)}),[],!1,null,null,null);a.default=s.exports}}]);