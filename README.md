# 微信小程序学习
## 1. 小程序创建
1. 全局三个文件，分别是app.js, app.json, app.wxss（名称不可以更改）
2. 创建Pages目录文件（作用是用来存放各个页面）
3. 创建页面（给页面起名字，并且创建4个文件）
- ① js: 页面逻辑实现
- ② json: 负责标题栏和一些状态栏
- ③ wxml: 管理页面有什么，页面布局
- ④ wxss: 页面排布，样式表
4. 把内容封装在view内部，写法<view></view>
- class方法对view的内容进行排布
- class对其他组件的样式布局也有效，class规定在css文件的样式前加 ''.'
- image,text组件不需要加'.'（全局有效）
5. 三个组件：图片，文字，按钮
- 图片<image src = "图片路径" > </image>
- 文字<text></text>
- 按钮<button></button>


