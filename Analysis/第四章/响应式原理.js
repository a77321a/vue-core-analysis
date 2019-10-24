/*
 * @Descripttion: 响应式原理
 * @Author: 辛顺宁
 * @Date: 2019-10-10 17:31:55
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-10 18:16:26
 */
//核心是Object.defineProperty  get ,set
// Vue会把data，props转换成响应式对象，如果子属性也是对象，也会变成响应式对象