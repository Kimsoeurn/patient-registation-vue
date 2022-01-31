import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import PatientIndex from '../views/patients/PatientIndex.vue'
import PatientCreate from '../views/patients/PatientCreate.vue'
import PatientShow from '../views/patients/PatientShow'
import PatientEdit from '../views/patients/PatientEdit'
import store from '../store'

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
    path: '/patients',
    name: 'PatientIndex',
    component: PatientIndex,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/patients/create',
    name: 'PatientCreate',
    component: PatientCreate,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/patients/show/:id',
    name: 'PatientShow',
    component: PatientShow,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/patients/edit/:id',
    name: 'PatientEdit',
    component: PatientEdit,
    meta: {
      requiresAuth: true,
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters['auth/isAuthenticated']) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})
export default router
