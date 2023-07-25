import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/services',
     name: 'services', component: () => import (/* webpackChunkName: "services" */ '../views/ServicesView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts', component: () => import(/* webpackChunkName: "contacts" */ '../views/ContactsView.vue')
  },
  {
    path: '/signup',
    name: 'signup', component: () => import(/* webpackChunkName: "signup" */ '../views/SignupView.vue')
  },
  {
    path: '/login',
    name: 'login', component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/verify',
    name: 'verify', component: () => import(/* webpackChunkName: "login" */ '../views/VerifyView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard', component: () => import(/* webpackChunkName: "login" */ '../views/DashboardView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
