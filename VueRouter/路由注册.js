/*
 * @Descripttion:
 * @Author:
 * @Date: 2020-06-17 15:15:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-17 17:05:48
 */

function install (Vue) {
  if (install.installed && _Vue === Vue) return
  install.installed = true;

  _Vue = Vue;

  const isDef = v => v !== undefined;

  const registerInstance = (vm, callVal) => {
    let i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        // 给route对象双向绑定
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed () {
      registerInstance(this);
    }
  });
  // 给$router对象双向绑定
  Object.defineProperty(Vue.prototype, '$router', {
    get () { return this._routerRoot._router }
  });
  // 给$route对象双向绑定
  Object.defineProperty(Vue.prototype, '$route', {
    get () { return this._routerRoot._route }
  });
  // 注册组件
  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  const strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}