(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{402:function(n,e,t){"use strict";t.r(e);var i=t(42),s=Object(i.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"通过读取设备文件监听键盘事件-linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过读取设备文件监听键盘事件-linux"}},[n._v("#")]),n._v(" 通过读取设备文件监听键盘事件 "),t("code",[n._v("Linux")])]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('#include <stdio.h>\n#include <linux/input.h>\n#include <fcntl.h>\n#include <unistd.h>\n\n#define DEV_PATH "/dev/input/event5"   //根据需要修改为你的键盘对应的设备文件，可以直接sudo cat /dev/input/event5并按键盘，看是否有输出，见附图\n\nint main()\n{\n    int keys_fd;  //文件标志\n    char ret[2];\n    struct input_event t;  //读取到的input设备数据是一个结构体\n\n    keys_fd = open(DEV_PATH, O_RDONLY);  //权限不通过的时候一般会返回-1\n    if(keys_fd <= 0)\n{\n    printf("open /dev/input/event2 device error!\\n");\n    return -1;\n}\nwhile(1)\n{\n    if(\n        read(keys_fd, &t, sizeof(t)) == sizeof(t)\n        )  /*keys_fd指向打开的设备文件，read将从设备文件传送sizeof(t)个字节的数据到&t这个内存地址。函数执行顺利的话返回值是实际读取的字节数*/\n    {\n        if(t.type == EV_KEY)\n        {\n            if(t.value==0 || t.value==1)\n            {\n                printf("key %d %s\\n", t.code, (t.value) ? "Pressed" : "Released");  //t.code值所对应的按键在/usr/include/linux/input-event-codes.h可以查到\n\t\t\t\t}\n\t\t}\n\t}\n}\nclose(keys_fd);\n\nreturn 0;\n}\n')])])]),t("p",[t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/6434906-f9c35524dc87577e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"附图"}}),n._v("\n操作其他的设备类似，不过要提前了解相关的数据结构\n但是这种监听是需要有设备文件的读取权限的（默认 "),t("code",[n._v("root")]),n._v(" 用户才有）， "),t("code",[n._v("read")]),n._v(" 函数是系统函数，阻塞地读取设备文件，当设备文件中的缓存为空时挂起等待。")]),n._v(" "),t("h2",{attrs:{id:"扩展阅读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读"}},[n._v("#")]),n._v(" 扩展阅读")]),n._v(" "),t("p",[n._v("事件监听方案，推荐"),t("a",{attrs:{href:"https://www.jianshu.com/p/80cf81413d31",target:"_blank",rel:"noopener noreferrer"}},[n._v("Linux全局事件监听技术"),t("OutboundLink")],1)]),n._v(" "),t("comment-comment")],1)}),[],!1,null,null,null);e.default=s.exports}}]);