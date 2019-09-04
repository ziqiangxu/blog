(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{218:function(t,e,n){"use strict";n.r(e);var i=n(0),s=Object(i.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("事件监听方案，推荐"),n("a",{attrs:{href:"https://www.jianshu.com/p/80cf81413d31",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux全局事件监听技术"),n("OutboundLink")],1)]),t._v(" "),n("comment-comment")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"通过读取设备文件监听键盘事件-linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过读取设备文件监听键盘事件-linux","aria-hidden":"true"}},[this._v("#")]),this._v(" 通过读取设备文件监听键盘事件 "),e("code",[this._v("Linux")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('#include <stdio.h>\n#include <linux/input.h>\n#include <fcntl.h>\n#include <unistd.h>\n\n#define DEV_PATH "/dev/input/event5"   //根据需要修改为你的键盘对应的设备文件，可以直接sudo cat /dev/input/event5并按键盘，看是否有输出，见附图\n\nint main()\n{\n    int keys_fd;  //文件标志\n    char ret[2];\n    struct input_event t;  //读取到的input设备数据是一个结构体\n\n    keys_fd = open(DEV_PATH, O_RDONLY);  //权限不通过的时候一般会返回-1\n    if(keys_fd <= 0)\n{\n    printf("open /dev/input/event2 device error!\\n");\n    return -1;\n}\nwhile(1)\n{\n    if(\n        read(keys_fd, &t, sizeof(t)) == sizeof(t)\n        )  /*keys_fd指向打开的设备文件，read将从设备文件传送sizeof(t)个字节的数据到&t这个内存地址。函数执行顺利的话返回值是实际读取的字节数*/\n    {\n        if(t.type == EV_KEY)\n        {\n            if(t.value==0 || t.value==1)\n            {\n                printf("key %d %s\\n", t.code, (t.value) ? "Pressed" : "Released");  //t.code值所对应的按键在/usr/include/linux/input-event-codes.h可以查到\n\t\t\t\t}\n\t\t}\n\t}\n}\nclose(keys_fd);\n\nreturn 0;\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/6434906-f9c35524dc87577e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"附图"}}),this._v("\n操作其他的设备类似，不过要提前了解相关的数据结构\n但是这种监听是需要有设备文件的读取权限的（默认 "),e("code",[this._v("root")]),this._v(" 用户才有）， "),e("code",[this._v("read")]),this._v(" 函数是系统函数，阻塞地读取设备文件，当设备文件中的缓存为空时挂起等待。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"扩展阅读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读","aria-hidden":"true"}},[this._v("#")]),this._v(" 扩展阅读")])}],!1,null,null,null);e.default=s.exports}}]);