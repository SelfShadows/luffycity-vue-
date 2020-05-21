import Vue from 'vue'
import Router from 'vue-router'
import Course from '@/components/Course'
import CourseDetail from '@/components/CourseDetail'
import Index from '@/components/Index'
import Micro from '@/components/Micro'
import News from '@/components/News'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/course',
      name: 'course',
      component: Course
    },
    {
      path: "/courseDetail/:id",
      name: "courseDetail",
      component: CourseDetail
    },
    {
      path: "/",
      name: "index",
      component: Index
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/micro",
      name: "micro",
      component: Micro,
      meta:{
        requireAuth:true  // 加一个必须登录的标识 和 拦截器 相关
      }
    },
    {
      path: "/news",
      name: "news",
      component: News,
      meta:{
        requireAuth:true
      }
    }
  ]
})
