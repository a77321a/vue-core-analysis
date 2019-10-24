/*
 * @Descripttion: 异步组件实现
 * @Author: 辛顺宁
 * @Date: 2019-10-09 16:57:17
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-10 17:28:57
 */
// 实现原理：本质是2次渲染，先渲染出一个注释节点，当组件加载成功后，再通过forceRender重新渲染
// 有loading 是3次渲染


// 3中方式，factory工厂模式，promise模式，高级异步组件
// 配合webpack  import
// loading,resolve,reject,timeout 4种状态