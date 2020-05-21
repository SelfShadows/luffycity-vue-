// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/store'
Vue.config.productionTip = false

// 在vue的全局变量中设置了 $axios=axios
// 以后每个组件使用时: this.$axios
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach(function(to, from, next){  // 拦截器
    // from 从哪来, to 你要去哪, next 到底去哪

    // 要去的url只有登录成功后才能访问
    if(to.meta.requireAuth){  // 路由中 meta.requireAuth 是否为True
      if(store.state.token){
        // 如果有token, 就不管了
        next()
      }else{
        // 如果没有 token 就返回登录页面
        next({
          path: '/login',
          query: {backUrl: to.fullPath}
        })
      }
    }else{
      next()
    }
})