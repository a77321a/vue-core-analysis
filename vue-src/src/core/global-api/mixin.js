/*
 * @Descripttion: mixin代码
 * @Author: 辛顺宁
 * @Date: 2019-09-23 09:43:39
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-25 15:18:40
 */
/* @flow */

import { mergeOptions } from '../util/index'

/**
 * @descripttion: 在Vue.options上面扩展一些东西
 * @param {type} 
 * @return: 
 */
export function initMixin (Vue: GlobalAPI) {
  Vue.mixin = function (mixin: Object) {
    this.options = mergeOptions(this.options, mixin)
    return this
  }
}
