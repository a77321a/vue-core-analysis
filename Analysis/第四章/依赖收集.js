/*
 * @Descripttion: vue 依赖收集
 * @Author: 辛顺宁
 * @Date: 2019-10-23 16:01:14
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-23 18:26:58
 */
/**
 * @descripttion: 什么是依赖收集
 * @param {type}
 * @return:
 */
// 依赖收集就是订阅数据变化的watcher的收集

// 依赖收集的流程 和目的
// 目的是为了当这些响应式数据发送变化，触发它们的setter的时候，能知道
// 应该通知那些订阅者去做想应的逻辑处理