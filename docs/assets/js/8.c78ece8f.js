(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{239:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("本文中的 “实例” 和 “容器” 具有相同含义")]),t._v(" "),t._m(1),t._v(" "),r("p",[r("a",{attrs:{href:"https://yeasy.gitbooks.io/docker_practice/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考链接"),r("OutboundLink")],1)]),t._v(" "),t._m(2),t._m(3),t._m(4),t._v(" "),r("comment-comment")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"docker-创建-mariadb-实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-创建-mariadb-实例","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("Docker")]),this._v(" 创建 "),e("code",[this._v("MariaDB")]),this._v(" 实例")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"安装docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装docker","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装docker")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker run -p 0.0.0.0:3307:3306 \\\n--name [数据库名字]\n-v [宿主机的路径]:[docker容器的路径] \\\n-e MYSQL_ROOT_PASSWORD=[数据库root用户密码] \\\n-dit mariadb\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("-p 端口映射：宿主机 3307 端口映射到 docker 实例的 3306 端口\n--name 指定实例名称\n-v 将宿主机的文件路径挂载到容器的路径\n-e 配置环境变量，这里是配置了数据库的密码\n-dit其它的选项，d：让容器在后台运行； i：保持标准输出打开； t：分配一个tty\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("小提示，命令行参数，一般来说，宿主机的信息在前，"),e("code",[this._v("docker")]),this._v(" 容器信息在后。如进行端口映射： "),e("code",[this._v("0.0.0.0:3307:3306")])])])}],!1,null,null,null);e.default=s.exports}}]);