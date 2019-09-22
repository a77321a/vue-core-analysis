/*
 * @Description: 
 * @Author: 辛顺宁
 * @Date: 2019-09-22 15:03:57
 * @LastEditTime: 2019-09-22 15:03:57
 * @LastEditors: Do not edit
 */
/* @flow */

import { warn } from 'core/util/index'

export * from './attrs'
export * from './class'
export * from './element'

/**
 * Query an element selector if it's not an element already.
 */
/**
 * @description: 查找字符串或者dom对象
 * @param : 
 * @return: 
 */
export function query (el: string | Element): Element {
  if (typeof el === 'string') {
    const selected = document.querySelector(el)
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      )
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}
