import { createRouter, createWebHistory } from 'vue-router'

export const RouteNames = {
  HOME: 'home',
  ABOUT: 'about',
  LOGIN: 'login',
  CRYPTOS: 'cryptos',
  CHECK_API: 'check-api',
  NOT_FOUND: 'not-found',
}

export const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    path: '/about',
    name: RouteNames.ABOUT,
    component: () => import('@/pages/AboutPage.vue'),
  },
  {
    path: '/login',
    name: RouteNames.LOGIN,
    component: () => import('@/pages/LoginPage.vue'),
  },
  {
    path: '/cryptos',
    name: RouteNames.CRYPTOS,
    component: () => import('@/pages/CryptosPage.vue'),
  },
  {
    path: '/check-api',
    name: RouteNames.CHECK_API,
    component: () => import('@/pages/CheckApiPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: RouteNames.NOT_FOUND,
    component: () => import('@/pages/NotFoundPage.vue'),
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
