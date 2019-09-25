/*
 * @Descripttion: 组件化分析
 * @Author: 辛顺宁
 * @Date: 2019-09-24 10:47:22
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-25 14:09:05
 */

// patch整体流程 =》createElement => 子组件初始化 => 子组件render => 子组件patch

// activeINstance 为当前激活的vm实例（当前组件vm）；
// vm.$vnode 为自组件的占位vnode；vm._vnode为组件的渲染vnode
// 嵌套组件插入顺序 先子后父
