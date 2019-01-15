import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path:'/index',
      name:'icon-music',
      component(){return System.import('../views/index/index.vue')}
    },
    {
      path: '/radioMUsic',
      name: 'icon-wangyiyunyinlezizhi-copy',
      component() { return System.import('../views/radio-station/index.vue') }
    },
    {
      path: '/find',
      name: 'icon-diantai',
      component() { return System.import('../views/find/index.vue') },
    },
    {
      path:"/login",
      name:"登陆",
      component(){
        return System.import("../views/login/index.vue")
      },
    },
    {
      path:"/register",
      name:"注册",
      component(){
        return System.import("../views/register/index.vue")
      }
    },
    {
      path: "/findPassword",
      name: "找回密码",
      component() {
        return System.import("../views/findPassword/index.vue")
      }
    },
    { path: '*', redirect: '/index' },
    // 捕获所有路由
  ]
})
