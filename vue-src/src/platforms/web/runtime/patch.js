/*
 * @Descripttion: 
 * @Author: 辛顺宁
 * @Date: 2019-09-23 09:43:39
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-23 09:43:39
 */
/* @flow */

import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)
/**
 * @descripttion: 
 * @param {nodeOps: dom操作，modules：dom属性} 
 * @return: 
 */
export const patch: Function = createPatchFunction({ nodeOps, modules })
