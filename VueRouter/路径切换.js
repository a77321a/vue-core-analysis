/*
 * @Descripttion: 路径切换
 * @Author:
 * @Date: 2020-06-19 11:02:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-19 14:46:15
 */
transitionTo(
  location: RawLocation,
  onComplete ?: Function,
  onAbort ?: Function
) {
  const route = this.router.match(location, this.current)
  this.confirmTransition(
    route,
    () => {
      const prev = this.current
      this.updateRoute(route)
      onComplete && onComplete(route)
      this.ensureURL()
      this.router.afterHooks.forEach(hook => {
        hook && hook(route, prev)
      })

      // fire ready cbs once
      if (!this.ready) {
        this.ready = true
        this.readyCbs.forEach(cb => {
          cb(route)
        })
      }
    },
    err => {
      if (onAbort) {
        onAbort(err)
      }
      if (err && !this.ready) {
        this.ready = true
        // Initial redirection should still trigger the onReady onSuccess
        // https://github.com/vuejs/vue-router/issues/3225
        if (!isRouterError(err, NavigationFailureType.redirected)) {
          this.readyErrorCbs.forEach(cb => {
            cb(err)
          })
        } else {
          this.readyCbs.forEach(cb => {
            cb(route)
          })
        }
      }
    }
  )
}