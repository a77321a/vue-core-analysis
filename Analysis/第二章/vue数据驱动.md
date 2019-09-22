<!--
 * @Description: 
 * @Author: 辛顺宁
 * @Date: 2019-09-22 14:43:01
 * @LastEditTime: 2019-09-22 16:05:01
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

 mountComponent 核心就是先调用 vm._render 方法先生成虚拟 Node，再实例化一个渲染Watcher，在它的回调函数中会调用 updateComponent 方法，最终调用 vm._update 更新 DOM。
Watcher 在这里起到两个作用，一个是初始化的时候会执行回调函数，另一个是当 vm 实例中的监测的数据发生变化的时候执行回调函数，这块儿我们会在之后的章节中介绍。
函数最后判断为根节点的时候设置 vm._isMounted 为 true， 表示这个实例已经挂载了，同时执行 mounted 钩子函数。 这里注意 vm.$vnode 表示 Vue 实例的父虚拟 Node，所以它为 Null 则表示当前是根 Vue 的实例。