(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{270:function(e,t,r){"use strict";r.r(t);var s=r(0),i=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),r("ol",[e._m(3),e._v(" "),e._m(4),e._v(" "),r("li",[r("code",[e._v("Pipfile")]),e._v(" 拥有独立的解析步骤，且不需要先将套件实际安装至环境中，当你将一个会破坏依赖结构的包加入 "),r("code",[e._v("Pipfile")]),e._v(" 时，locking就会直接告知你这个依赖无法被解析。【这个特性在进行软件包更新的时候尤其有用，"),r("a",{attrs:{href:"https://lax.v2ex.com/t/461581",target:"_blank",rel:"noopener noreferrer"}},[e._v("更多细节"),r("OutboundLink")],1),e._v("】")])]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),r("p",[r("a",{attrs:{href:"https://lax.v2ex.com/t/461581",target:"_blank",rel:"noopener noreferrer"}},[e._v("看 "),r("code",[e._v("pipenv")]),e._v(" 项目的维护者说，它到底解决了什么？"),r("OutboundLink")],1)]),e._v(" "),e._m(7),r("p",[e._v("更加详细的"),r("a",{attrs:{href:"https://pipenv.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("指南"),r("OutboundLink")],1)]),e._v(" "),r("hr"),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),r("comment-comment")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"python-依赖包管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#python-依赖包管理","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("Python")]),this._v(" 依赖包管理")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("转了一圈，又回到了 "),r("code",[e._v("pipenv")]),e._v(", 它确实是更加现代的包管理工具，它是 "),r("code",[e._v("pip")]),e._v(" 和 "),r("code",[e._v("virtualenv")]),e._v(" 的结合体\n它主要的改进在 "),r("code",[e._v("Pipfile.lock")]),e._v(" 文件，它比一个纯文本的 "),r("code",[e._v("requirements.txt")]),e._v(" 文件表达力要强得多。\n更重要的是用 "),r("code",[e._v("pipreqs")]),e._v(" 或 "),r("code",[e._v("freeze")]),e._v(" 导出的包名、版本（生成一个 "),r("code",[e._v("requirements.txt")]),e._v(" 文件）并不完全正确，它们是不可靠的，而 "),r("code",[e._v("pipenv")]),e._v(" 是可靠的。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"为什么说-pipenv-是可靠的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么说-pipenv-是可靠的","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么说 "),t("code",[this._v("pipenv")]),this._v(" 是可靠的")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("而 "),t("code",[this._v("pipenv")]),this._v(" 是在你安装依赖的时候就进行记录，理论上这是完全可靠的，这可以保证准确地记录你所安装的包，实际上也是可靠的。")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("code",[e._v("pipenv")]),e._v(" 使用 "),r("code",[e._v("Pipenv.lock")]),e._v(" 文件记录了 "),r("code",[e._v("Python")]),e._v(" 版本、软件包 "),r("code",[e._v("hash")]),e._v(" 值、软件包版本、"),r("code",[e._v("pip")]),e._v(" 仓库地址等重要信息。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"为什么-freeze-不可靠和举例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么-freeze-不可靠和举例","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么 "),t("code",[this._v("freeze")]),this._v(" 不可靠和举例")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ol",[r("li",[r("code",[e._v("pipreqs")]),e._v(" 和 "),r("code",[e._v("freeze")]),e._v(" 这种工具是根据代码中的导入语句来进行分析，很有可能会出错，理论上是可靠的，但是实际上有副作用，因为这个过程比想象中的复杂。")]),e._v(" "),r("li",[e._v("比如说你有一个自定义的包叫 "),r("code",[e._v("config")]),e._v(" ，然而"),r("code",[e._v("pip")]),e._v(" 软件源里有"),r("code",[e._v("config")]),e._v(" 这个包，它们就会多导出一个config依赖，而实际上你不需要这个包，只是你的包和源里的包重名了而已。")]),e._v(" "),r("li",[e._v("比如你的项目进行了 "),r("code",[e._v("yaml")]),e._v(" 文件的读写， 用它们导出 "),r("code",[e._v("yaml")]),e._v(" 相关的软件包试试？")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("pip3 "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" pipenv  "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 安装pipenv工具")]),e._v("\npipenv "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("  "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 从Pipfile.lock安装需要的依赖")]),e._v("\npipenv "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("  "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 启动虚拟环境，需在有Pipfile的目录下执行此命令")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"以下内容已过时，今后不在项目中使用，但是对于非正式部署的项目仍然有价值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#以下内容已过时，今后不在项目中使用，但是对于非正式部署的项目仍然有价值","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("strong",[this._v("以下内容已过时，今后不在项目中使用，但是对于非正式部署的项目仍然有价值")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"导出开发环境需要的所有依赖包清单："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出开发环境需要的所有依赖包清单：","aria-hidden":"true"}},[this._v("#")]),this._v(" 导出开发环境需要的所有依赖包清单：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("使用pip freeze\n"),t("code",[this._v("pip freeze > requirements.txt")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"导出项目所需要的依赖包清单："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出项目所需要的依赖包清单：","aria-hidden":"true"}},[this._v("#")]),this._v(" 导出项目所需要的依赖包清单：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("使用"),t("code",[this._v("pipreqs")]),this._v("命令\n安装pipreqs："),t("code",[this._v("pip install pipreqs")]),this._v("\n导出指定项目需要的依赖包："),t("code",[this._v("pipreqs --savepath=[导出文件的路径] [项目目录]")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"安装依赖包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖包","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装依赖包")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("pip install -r [依赖文件清单]")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"注意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意","aria-hidden":"true"}},[this._v("#")]),this._v(" 注意")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("用"),t("code",[this._v("pipreqs")]),this._v("或"),t("code",[this._v("freeze")]),this._v("导出的包名、版本并不完全正确，比如"),t("code",[this._v("yaml")]),this._v("相关的。")])}],!1,null,null,null);t.default=i.exports}}]);