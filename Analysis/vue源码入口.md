#从入口开始
入口 	`src/platforms/web/entry-runtime-with-compiler.js`

Vue定义在 `/src/core/instance/index.js`

#Vue源码目录设计
> `complier`
> 虚拟dom的renderFunction、 编译相关

>`core`
>内置组件、globalApi、渲染函数、事件、生命周期、响应式数据相关

>`platforms`
>跨端应用打包(mpvue就是改写目录下的编译)

>`server`
>服务端渲染
>
>`sfc`
>解释器、把.vue文件解释成js对象
>
>`shard`
>辅助方法