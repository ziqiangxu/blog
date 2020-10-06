(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{383:function(s,a,t){"use strict";t.r(a);var n=t(42),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker-创建-mariadb-实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-创建-mariadb-实例"}},[s._v("#")]),s._v(" "),t("code",[s._v("Docker")]),s._v(" 创建 "),t("code",[s._v("MariaDB")]),s._v(" 实例")]),s._v(" "),t("p",[s._v("本文中的 “实例” 和 “容器” 具有相同含义")]),s._v(" "),t("h2",{attrs:{id:"安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[s._v("#")]),s._v(" 安装docker")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://yeasy.gitbooks.io/docker_practice/install/",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考链接"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:3307:3306 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("数据库名字"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n-v "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("宿主机的路径"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("docker容器的路径"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("数据库root用户密码"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-dit mariadb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("-p 端口映射：宿主机 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3307")]),s._v(" 端口映射到 docker 实例的 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(" 端口\n--name 指定实例名称\n-v 将宿主机的文件路径挂载到容器的路径\n-e 配置环境变量，这里是配置了数据库的密码\n-dit其它的选项，d：让容器在后台运行； i：保持标准输出打开； t：分配一个tty\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("blockquote",[t("p",[s._v("小提示，命令行参数，一般来说，宿主机的信息在前，"),t("code",[s._v("docker")]),s._v(" 容器信息在后。如进行端口映射： "),t("code",[s._v("0.0.0.0:3307:3306")])])]),s._v(" "),t("comment-comment")],1)}),[],!1,null,null,null);a.default=e.exports}}]);