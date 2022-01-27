import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import PatientIndex from '../views/Patients/PatientIndex.vue'
import PatientCreate from '../views/Patients/PatientCreate.vue'
import PatientShow from '../views/Patients/PatientShow'
import PatientEdit from '../views/Patients/PatientEdit'

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
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
