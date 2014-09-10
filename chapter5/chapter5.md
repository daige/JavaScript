#第五章 浏览器中的JavaScript

##HTML中的JavaScript

- `<script/>` 
  通常放在head标签中。  
  如果`<script/>`放在`<body/>`内时，只要脚本所属的部分被载入，脚本就会执行，不建议这样做。建议在页面主体只使用事件处理函数。    
  大量的JavaScript代码应该使用外部文件加入，好处有：安全性，代码好维护，浏览器会缓存外部JavaScript文件。

- `<noscript>`   
  支持JavaScript的浏览器会忽略，不支持或禁用的浏览器的会显示内容。
  Firefox有一款插件NoScript会让你选择运行的JavaScript代码，提高安全性。
  
- XHTML中的改变    
  在`<script/>`中不使用language，而是使用type加入mime类型。例如：`<script type="text/javascript" src="..xxx/xx.js"></script>`


##SVG中的JavaScript
这里只介绍HTML中的SVG  
可以通过三种方法把SVG文件添加到HTML页面。
- `<embed>`   
  `<embed src="chapter5.svg" width=300 heigth=200 type="image/svg+xml"/>`
- `<object>`  
  `<object data="chapter5.svg" width="300" height="100" type="image/svg+xml" />`
- `<iframe>`  
  `<iframe src="chapter5.svg" width="300" height="100"></iframe>`
  

##BOM
BOM是浏览器对象模型，它提供独立于内容而与浏览器窗口进行交互的对象。  
BOM的体系结构：

<img src="./image/5-1.png" >

- window对象
  window对象表示整个浏览器窗口。
  - window.frames[] 
    如果页面是有框架集合，那么每个框架都会有自己的window对象，放在frames中。
    访问：window.frames[0] 或者 window.frames['topFrame'] 或top.frames[0],window.topFrame再或者省略window和top,直接framse[0]

  - window.top 返回最顶层的窗口
  - window.parent 返回父窗口 
  - window.name  设置或者返回窗口的名称。
  - window.self  返回当前窗口的引用。
  
  - window.open()  打开一个新的浏览器窗口或查找一个已命名的窗口。  
  - window.alert() 
  - window.confirm()
  - window.prompt()  
  - window.status          设置窗口状态栏的文本。  
  - window.setTimeout()    在指定的毫秒数后调用函数或计算表达式。
  - window.setInterval()   按照指定的周期（以毫秒计）来调用函数或计算表达式。
  - window.clearInterval() 取消由 setInterval() 设置的 timeout。
  - window.clearTimeout()  取消由 setTimeout() 方法设置的 timeout。  
  - window.history         History 对象包含用户访问过的 URL。  
    有三个方法： back()、forward() 和 go() 

  完整列表请参考[Window 对象](http://www.w3school.com.cn/jsref/dom_obj_window.asp)  

- document对象