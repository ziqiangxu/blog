(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{360:function(v,e,a){v.exports=a.p+"assets/img/xmind-ini-file.b23273cf.png"},361:function(v,e,a){v.exports=a.p+"assets/img/xmind-ini-file2.e4b48579.png"},433:function(v,e,a){"use strict";a.r(e);var _=a(42),s=Object(_.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"指定-xmind-和-dbeaver-的-jdk-版本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#指定-xmind-和-dbeaver-的-jdk-版本"}},[v._v("#")]),v._v(" 指定 "),_("code",[v._v("XMind")]),v._v(" 和 "),_("code",[v._v("DBeaver")]),v._v(" 的 "),_("code",[v._v("JDK")]),v._v(" 版本")]),v._v(" "),_("p",[v._v("因为 "),_("code",[v._v("Linux")]),v._v(" （我的是 "),_("code",[v._v("Deepin")]),v._v("）系统安装了新版本的 "),_("code",[v._v("JDK")]),v._v("，导致 "),_("code",[v._v("XMind")]),v._v(" 和 "),_("code",[v._v("DBeaver")]),v._v(" 无法启动（截止2017.12.19他们依赖于 "),_("code",[v._v("JDK 1.8")]),v._v("，就是 "),_("code",[v._v("Java 8")]),v._v(" 的 "),_("code",[v._v("JDK")]),v._v("）。当然你的电脑安装了新版的 "),_("code",[v._v("JDK")]),v._v("，肯定是有原因的，总不能把它给卸载了吧。所以我们就需要给这两个软件指定一个匹配的 "),_("code",[v._v("JDK")]),v._v(" 版本。\n下面以 "),_("code",[v._v("XMind")]),v._v(" 为例，"),_("code",[v._v("DBeaver")]),v._v(" 进行类似的操作即可")]),v._v(" "),_("h2",{attrs:{id:"第一步-找到需要的-jdk-版本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第一步-找到需要的-jdk-版本"}},[v._v("#")]),v._v(" 第一步： 找到需要的 "),_("code",[v._v("JDK")]),v._v(" 版本")]),v._v(" "),_("p",[v._v("找到 "),_("code",[v._v("JDK")]),v._v(" 的安装路径，我的是在这里64位的哦： "),_("code",[v._v("/usr/lib/jvm/java-8-openjdk-amd64/bin")]),v._v("\n你也可以直接在文件管理器搜索 "),_("code",[v._v("JDK")])]),v._v(" "),_("h2",{attrs:{id:"第二步-修改配置文件-使用指定的-jdk"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第二步-修改配置文件-使用指定的-jdk"}},[v._v("#")]),v._v(" 第二步： 修改配置文件，使用指定的 "),_("code",[v._v("JDK")])]),v._v(" "),_("p",[v._v("用 "),_("code",[v._v("root")]),v._v(" 用户编辑 "),_("code",[v._v("XMind")]),v._v(" 的 "),_("code",[v._v("XMind.ini")]),v._v(" 文件\n我的是在这里哦： "),_("code",[v._v("/usr/share/xmind/XMind_amd64/XMind.ini")]),v._v("\n加入两行(指定 "),_("code",[v._v("Java")]),v._v(" 虚拟机)")]),v._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[v._v("-vm\n/usr/lib/jvm/java-8-openjdk-amd64/bin\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br")])]),_("p",[_("img",{attrs:{src:a(360),alt:"深度截图_选择区域_20171219192153.png"}})]),v._v(" "),_("h2",{attrs:{id:"tips"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[v._v("#")]),v._v(" Tips")]),v._v(" "),_("p",[v._v("注意这两行要加在 "),_("code",[v._v("-vmargs")]),v._v(" 之前（"),_("code",[v._v("-vmargs")]),v._v(" 用于指定虚拟机参数）")]),v._v(" "),_("p",[_("img",{attrs:{src:a(361),alt:"image.png"}})]),v._v(" "),_("p",[v._v("重新打开软件，愉快的使用吧！")]),v._v(" "),_("h2",{attrs:{id:"macos"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[v._v("#")]),v._v(" "),_("code",[v._v("macOS")])]),v._v(" "),_("p",[_("code",[v._v("macOS")]),v._v(" 下也是一样的解决办法，相关的配置文件在\n"),_("code",[v._v("/Applications/DBeaver.app/Contents/Eclipse/dbeaver.ini")])]),v._v(" "),_("comment-comment")],1)}),[],!1,null,null,null);e.default=s.exports}}]);