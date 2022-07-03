import store from "@/store"
import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../views/layout/index.vue"),
    redirect: "/home",
    children: [
      {
        path: "home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/home/index.vue")
      },
      {
        path: "user-info",
        component: () =>
          import(
            /* webpackChunkName: "userInfo" */ "../views/user/userInfo.vue"
          )
      },
      {
        path: "user-avatar",
        component: () =>
          import(
            /* webpackChunkName: "userAvatar" */ "../views/user/userAvatar.vue"
          )
      },
      {
        path: "user-pwd",
        component: () =>
          import(/* webpackChunkName: "userPwd" */ "../views/user/userPwd.vue")
      }
    ]
  },
  {
    path: "/reg",
    name: "reg",
    component: () =>
      import(/* webpackChunkName: "reg" */ "../views/register/index.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/index.vue")
  }
]

const router = new VueRouter({
  routes
})
const whiteList = ["/login", "/reg"]
router.beforeEach((to, from, next) => {
  const token = store.state.token
  if (token) {
    if (!store.state.userInfo.username) {
      store.dispatch("initUserInfo")
    }
    next()
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next("/login")
    }
  }
})
export default router
