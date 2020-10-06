(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{362:function(s,t,a){s.exports=a.p+"assets/img/ssh-key-saved-path.716dd636.png"},435:function(s,t,a){"use strict";a.r(t);var e=a(42),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"服务器免密登录-ssh-公钥配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器免密登录-ssh-公钥配置"}},[s._v("#")]),s._v(" 服务器免密登录："),e("code",[s._v("ssh")]),s._v(" 公钥配置")]),s._v(" "),e("p",[s._v("我们知道，用\n"),e("code",[s._v("ssh <用户名>@<ip地址>")]),s._v(" 登录远程服务器的时候，是需要输入登录密码的，有时候就很烦，比如以下情况：")]),s._v(" "),e("ol",[e("li",[s._v("在密码比较复杂的时候，你要花费很长时间来输入密码；")]),s._v(" "),e("li",[s._v("你在使用git的时候进行频繁提交：使用代码托管平台以及自建的git服务器。")])]),s._v(" "),e("blockquote",[e("p",[s._v("实际上有一种解决方法——ssh免密验证。")])]),s._v(" "),e("h2",{attrs:{id:"步骤概览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤概览"}},[s._v("#")]),s._v(" 步骤概览：")]),s._v(" "),e("ol",[e("li",[s._v("在本地生成公钥")]),s._v(" "),e("li",[s._v("将本地公钥存储在远程主机上")]),s._v(" "),e("li",[s._v("开启远程主机上的ssh公钥认证登录功能")])]),s._v(" "),e("h3",{attrs:{id:"_1-生成公钥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成公钥"}},[s._v("#")]),s._v(" 1. 生成公钥")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -t 指定加密算法；")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -b 指定生成的密钥长度；")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -C 一段字符，一般都填邮箱地址。")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更多参数说明可以在终端输入：ssh-keygen --help 查看")]),s._v("\nssh-keygen -t rsa -b "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" -C "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"你的邮箱地址"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("这条命令执行完之后，会提示你指定公钥和私钥的存储位置。\n"),e("img",{attrs:{src:a(362),alt:"深度截图_选择区域_20180803235726.png"}}),s._v("\n截图中指定的是 "),e("code",[s._v("/home/xu/test")]),s._v(" 这个位置，届时私钥就存储在 "),e("code",[s._v("/home/xu/test")]),s._v("，公钥存储在 "),e("code",[s._v("/home/xu/test.pub")]),s._v("。公钥和私钥是成对的")]),s._v(" "),e("h3",{attrs:{id:"_2-将公钥存储到远程主机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-将公钥存储到远程主机"}},[s._v("#")]),s._v(" 2. 将公钥存储到远程主机")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# i后面接的参数是保存你公钥的文件(我们这里是.ssh/id_rsa.pub)；")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git是远程主机的用户，这条指令会往git这个用户的主目录下的")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .ssh/authorized_keys文件写入id_rsa.pub保存的公钥")]),s._v("\nssh-copy-id -i .ssh/id_rsa.pub git@12.56.224.61  \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("blockquote",[e("p",[s._v("网上好多教程说直接将公钥内容写到 "),e("code",[s._v(".ssh/authorized_keys")]),s._v(" 就可以了，我是没成功，最后还是用这条命令写入才成功的。（后续添加公钥倒是可以直接添加文本内容到.ssh/authorized_keys，一个公钥一行。也许ssh-copy-id命令还做了其他事情吧。你可以执行 "),e("code",[s._v("cat /usr/bin/ssh-copy-id")]),s._v(" 看一下它的内容）")])]),s._v(" "),e("h3",{attrs:{id:"_3-开启远程主机ssh的公钥登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-开启远程主机ssh的公钥登录"}},[s._v("#")]),s._v(" 3. 开启远程主机ssh的公钥登录")]),s._v(" "),e("p",[s._v("检查 "),e("code",[s._v("ssh")]),s._v(" 服务的配置文件—— "),e("code",[s._v("/etc/ssh/sshd_config")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("RSAAuthentication "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这行一定要取消注释的（删掉#号）")]),s._v("\nPubkeyAuthentication "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 我的服务器没这行，不添加似乎也能用")]),s._v("\nAuthorizedKeysFile .ssh/authorized_keys    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 我的服务器没这行，不添加似乎也能用")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("重启 "),e("code",[s._v("ssh")]),s._v(" 服务: "),e("code",[s._v("systemctl restart sshd")])]),s._v(" "),e("comment-comment")],1)}),[],!1,null,null,null);t.default=n.exports}}]);