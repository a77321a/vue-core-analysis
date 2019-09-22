/*
 * @Description: 
 * @Author: 辛顺宁
 * @Date: 2019-09-22 15:09:58
 * @LastEditTime: 2019-09-22 15:21:23
 * @LastEditors: Do not edit
 */
// 缓存下vue原型上的$mount方法
const mount = Vue.prototype.$mount
/**
 * @description: 重新定义$mount方法
 * @param : el dom节点。第二个参数是和服务端渲染相关，在浏览器环境下我们不需要传第二个参数。
 * @return: 
 */
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && query(el)

  /**
   * @description: el无法定义为body元素或者html元素
   * @param : 
   * @return: 
   */
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn(
      `Do not mount Vue to <html> or <body> - mount to normal elements instead.`
    )
    return this
  }

  const options = this.$options
  // resolve template/el and convert to render function
  if (!options.render) {
    let template = options.template
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template)
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !template) {
            warn(
              `Template element not found or is empty: ${options.template}`,
              this
            )
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML
      } else {
        if (process.env.NODE_ENV !== 'production') {
          warn('invalid template option:' + template, this)
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el)
    }
    /**
     * @description: 在 Vue 2.0 版本中，所有 Vue 
     * 的组件的渲染最终都需要 render 方法，
     * 无论我们是用单文件 .vue 方式开发组件，
     * 还是写了 el 或者 template 属性，最终都会转换成 render 方法，
     * 那么这个过程是 Vue 的一个“在线编译”的过程，
     * 它是调用 compileToFunctions 方法实现的，编译过程我们之后会介绍。
     * 最后，调用原先原型上的 $mount 方法挂载。
     * @param : 
     * @return: 
     */
    if (template) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile')
      }

      const { render, staticRenderFns } = compileToFunctions(template, {
        shouldDecodeNewlines,
        shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this)
      options.render = render
      options.staticRenderFns = staticRenderFns

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile end')
        measure(`vue ${this._name} compile`, 'compile', 'compile end')
      }
    }
  }
  return mount.call(this, el, hydrating)
}