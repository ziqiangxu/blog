(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{220:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.freedesktop.org/software/polkit/docs/latest/polkit.8.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("freedestop的polkit介绍"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://www.freedesktop.org/software/polkit/docs/latest/pkexec.1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("freedesktop的pkexec介绍"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://segmentfault.com/a/1190000008063961",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://segmentfault.com/a/1190000008063961"),s("OutboundLink")],1)]),t._v(" "),s("comment-comment")],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"linux-授权弹窗-polkit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-授权弹窗-polkit","aria-hidden":"true"}},[this._v("#")]),this._v(" "),a("code",[this._v("Linux")]),this._v(" 授权弹窗 "),a("code",[this._v("polkit")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("在开发Linux桌面软件的时候，我们有时候需要用其他用户的身份执行一些操作，通常是 "),a("code",[this._v("root")]),this._v(" 用户。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"方法一：sudo命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一：sudo命令","aria-hidden":"true"}},[this._v("#")]),this._v(" 方法一：sudo命令")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("终端执行 "),a("code",[this._v('echo "passwd" | sudo -S gedit')]),this._v(" "),a("code",[this._v("sudo")]),this._v(" 命令的 "),a("code",[this._v("-S")]),this._v(" 选项是从标准输出流读取密码，使用这种方法没有交互，可以直接提升权限。如果将这条命令写到脚本里，密码需要明文，是不安全的做法，不过简单有效。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"方法二：polkit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法二：polkit","aria-hidden":"true"}},[this._v("#")]),this._v(" 方法二：polkit")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("如图所示：\n"),a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/6434906-1abedfd0b8712af1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"深度截图_deepin-graphics-driver-manager_20180905202415.png"}}),this._v("\n这种弹窗是经常见到的吧，这个是怎么调用出来的呢？")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("常见的 "),s("code",[t._v("Linux")]),t._v(" 发行版都有 "),s("code",[t._v("polkit")]),t._v(" 模块，"),s("code",[t._v("Deepin")]),t._v(" 也开发了一套，"),s("code",[t._v("dde-polkit-agent")]),t._v(" 号称是遵守 "),s("code",[t._v("freedesktop")]),t._v(" 规范的。\n我们只要配置好规则文件然后在终端执行：\n"),s("code",[t._v("pkexec <可执行文件>")]),t._v("\n就可以看到这个授权窗口了")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"_1-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 配置文件")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("以 "),a("code",[this._v("Deepin")]),this._v(" 的 "),a("code",[this._v("/usr/share/polkit-1/actions/com.deepin.pkexec.dde-file-manager.policy")]),this._v("文件为例")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token doctype"}},[t._v('<!DOCTYPE policyconfig PUBLIC\n "-//freedesktop//DTD PolicyKit Policy Configuration 1.0//EN"\n "http://www.freedesktop.org/standards/PolicyKit/1/policyconfig.dtd">')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("policyconfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vendor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Deepin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("vendor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vendor_url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("https://www.deepin.com"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("vendor_url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 权限ID，这个必须唯一 --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("action")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.deepin.pkexec.dde-file-manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 图标 这个我不知道存在哪里，再研究研究--\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("icon_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("folder"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("icon_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 弹窗提示 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Authentication is required to run the Deepin File Manager"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("defaults")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("allow_any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("no"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("allow_any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("allow_inactive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("no"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("allow_inactive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("allow_active")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("auth_admin_keep"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("allow_active")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 这个defaults节点下的所有子节点可以有这些值no,yes,auth_self,auth_admin,auth_self_keep,auth_admin_keep　--\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("defaults")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 语言为简体中文时的弹窗提示 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("message")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xml:")]),t._v("lang")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("zh_CN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("查看文件夹需要输入密码"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 权限提升的可执行文件，需是二进制文件 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("annotate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.freedesktop.policykit.exec.path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/usr/bin/dde-file-manager"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("annotate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 这行听说是是否允许GUI，但是测试的时候好像不起作用 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("annotate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.freedesktop.policykit.exec.allow_gui"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("annotate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("policyconfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("只需要根据你的需要创建一份这样的文件（以 "),s("code",[t._v("policy")]),t._v(" 为扩展名），然后保存到 "),s("code",[t._v("/usr/share/polkit-1/action")]),t._v(" 这个目录下。\n可以执行 "),s("code",[t._v("pkaction")]),t._v(" 查看现有的 "),s("code",[t._v("policy")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"_2-调出弹窗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-调出弹窗","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 调出弹窗")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("在终端执行\n"),a("code",[this._v("pkexec [二进制可执行文件]")]),this._v("\n当然，根据上述配置文件，应该是\n"),a("code",[this._v("pkexec /usr/bin/dde-file-manager")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips","aria-hidden":"true"}},[this._v("#")]),this._v(" Tips")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("如果要给脚本提权怎么办呢，我们就需要借助一个 "),s("code",[t._v("shell")]),t._v(" 解释器——它是一个二进制的可执行文件，我们选用 "),s("code",[t._v("/bin/bash")]),t._v(" ，先给 "),s("code",[t._v("bash")]),t._v(" 创建一个 "),s("code",[t._v("policy")]),t._v(" 文件[ "),s("code",[t._v("deepin")]),t._v(" 不用创建，已经有了]，然后执行 "),s("code",[t._v("pkexec /bin/bash -x <脚本>")]),t._v("\n将脚本作为bash的参数【在deepin下执行有个副作用，因为深度显卡驱动管理器的脚本提权用到了bash，所以会显示驱动管理器的图标和提示】")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考链接")])}],!1,null,null,null);a.default=n.exports}}]);