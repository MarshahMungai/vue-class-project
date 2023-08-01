import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store/index'

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
    name: 'services', 
    component: () => import ('../views/ServicesView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts', 
    component: () => import('../views/ContactsView.vue')
  },
  {
    path: '/signup',
    name: 'signup', 
    component: () => import('../views/SignupView.vue')
  },
  {
    path: '/login',
    name: 'login', 
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/verify',
    name: 'verify', 
    component: () => import('../views/VerifyView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard', 
    component: () => import('../views/DashboardView.vue'),
    meta: { isLoggedIn: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  store.dispatch('setIsLoggedInFromLocalStorage'); // Call an action to set the isLoggedIn state from localStorage

  const isLoggedIn = store.state.isLoggedIn;

  if (to.meta.isLoggedIn && !isLoggedIn) {
    next('/login');
  } else if (!to.meta.isLoggedIn && isLoggedIn) {
    next('/dashboard');
  } else {
    next();
  }
});


export default router
