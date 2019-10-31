/*
 * @Descripttion:派发更新
 * @Author: 辛顺宁
 * @Date: 2019-10-24 11:31:20
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-24 11:32:29
 */
// 派发更新就是当数据发送改变后，通知所有订阅了这个数据变化的watcher执行update

// 派发更新的过程会把所有要执行update的watcher推入队列中，在nextTick 后执行 flush