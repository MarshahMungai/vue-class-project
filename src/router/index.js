import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import store from '../store/index';

const routes = [
{
path: '/',
name: 'home',
component: HomeView,
},
{
path: '/about',
name: 'about',
component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
},
{
path: '/services',
name: 'services',
component: () => import('../views/ServicesView.vue'),
},
{
path: '/signup',
name: 'signup',
component: () => import('../views/SignupView.vue'),
},
{
path: '/login',
name: 'login',
component: () => import('../views/LoginView.vue'),
},
{
path: '/verify',
name: 'verify',
component: () => import('../views/VerifyView.vue'),
},
{
path: '/dashboard',
name: 'dashboard',
component: () => import('../views/DashboardView.vue'),
meta: { isLoggedIn: true },
},
{
path: '/profile',
name: 'profile',
component: () => import('../views/ProfileView.vue'),
meta: { isLoggedIn: true },
},
{
path: '/statements',
name: 'statements',
component: () => import('../views/StatementsView.vue'),
meta: { isLoggedIn: true },
},
{
path: '/404',
name: 'NotFound',
component: () => import('../views/NotFoundView.vue'),
},
{
  path: '/:catchAll(.*)', // Match all unmatched routes
  redirect: '/404', // Redirect to the 404 page
},
];

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes,
});

router.beforeEach((to, from, next) => {
  store.dispatch('setIsLoggedInFromLocalStorage');

  const isLoggedIn = store.state.isLoggedIn;
  const requiresAuth = to.matched.some((record) => record.meta.isLoggedIn);

  if (requiresAuth && !isLoggedIn) {
    next('/login');
  } else if (requiresAuth && isLoggedIn) {
    next();
  } else {
    next();
  }
});


export default router;