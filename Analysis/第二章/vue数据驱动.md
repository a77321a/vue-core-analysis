<!--
 * @Description: 
 * @Author: 辛顺宁
 * @Date: 2019-09-22 14:43:01
 * @LastEditTime: 2019-09-22 14:43:01
 * @LastEditors: Do not edit
 -->
# Vue数据驱动

> Vue的核心思想是数据驱动dom 

> src/core/instance/index.js 中。
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

 #### 可以看到 Vue 只能通过 new 关键字初始化

## Vue 中我们是通过 $mount 实例方法去挂载 vm 的，$mount 方法在多个文件中都有定义，如 src/platform/web/entry-runtime-with-compiler.js、src/platform/web/runtime/index.js、src/platform/weex/runtime/index.js。因为 $mount 这个方法的实现是和平台、构建方式都相关的。接下来我们重点分析带 compiler 版本的 $monut 实现，因为抛开 webpack 的 vue-loader，我们在纯前端浏览器环境分析 Vue 的工作原理，有助于我们对原理理解的深入。
compiler 版本的 $monut 实现非常有意思，先来看一下 src/platform/web/entry-runtime-with-compiler.js 文件中定义：


 为什么在生命周期可以访问 this.data  -> initState()