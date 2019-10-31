/*
 * @Descripttion:nextTick实现原理
 * @Author: 辛顺宁
 * @Date: 2019-10-24 16:47:47
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-24 17:03:45
 */
// nextTick是把要执行的任务推入到一个队列中，再下一个tick同步执行
// 数据改变后出发渲染watcher的update但是watchers的flush是在nextTick后，所以重新渲染是异步的
