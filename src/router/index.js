import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import PatientIndex from '../views/patients/PatientIndex.vue'
import PatientCreate from '../views/patients/PatientCreate.vue'
import PatientShow from '../views/patients/PatientShow'
import PatientEdit from '../views/patients/PatientEdit'
import Logout from '../views/auth/Logout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
  },
  {
    path: '/patients',
    name: 'PatientIndex',
    component: PatientIndex,
  },
  {
    path: '/patients/create',
    name: 'PatientCreate',
    component: PatientCreate,
  },
  {
    path: '/patients/show/:id',
    name: 'PatientShow',
    component: PatientShow,
  },
  {
    path: '/patients/edit/:id',
    name: 'PatientEdit',
    component: PatientEdit,
  },
  { path: '*', redirect: '/' },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('access_token')

  if (authRequired && !loggedIn) {
    return next('/login')
  }

  if (loggedIn && to.matched.some((record) => record.meta.requiresVisitor)) {
    return next('/')
  }

  next()
})

export default router
