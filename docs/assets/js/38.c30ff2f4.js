(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{212:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"在-django-项目中使用-mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-django-项目中使用-mysql","aria-hidden":"true"}},[t._v("#")]),t._v(" 在 "),s("code",[t._v("Django")]),t._v(" 项目中使用 "),s("code",[t._v("MySql")])]),t._v(" "),s("p",[s("code",[t._v("pip")]),t._v(" 安装数据库驱动 "),s("code",[t._v("mysqlclient")]),t._v(" 的时候出现 "),s("code",[t._v("mysql_config not found")]),t._v(" 错误\n在终端运行"),s("code",[t._v("sudo apt install libmysqld-dev")]),t._v(" "),s("code",[t._v("Python3")]),t._v(" 连接 "),s("code",[t._v("MySQL")]),t._v("，使用扩展库 "),s("code",[t._v("pymysql")]),t._v("。若使用 "),s("code",[t._v("Django")]),t._v(" 的数据库模型，需要在项目或 "),s("code",[t._v("APP")]),t._v(" 的 "),s("code",[t._v("__init__.py")]),t._v(" 添加如下代码:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pymysql\npymysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("install_as_MySQLdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("不然可能出现 "),s("code",[t._v("No module named MySQLdb")]),t._v(" 的错误")])])}],!1,null,null,null);e.default=a.exports}}]);