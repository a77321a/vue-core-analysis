# Vue源码分析
##### > 1.[].slice.call(this) 伪数组转换为真数据
` let list = document.getElementByTag('li')`
`list instanceof Array == false`
伪数组有部分数组特性，本质还是对象
ES6  Array.from(list)
##### >2.node.nodeType 得到节点类型

