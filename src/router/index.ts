import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '../views/LoginPage.vue'
import CreateAccountPage from '../views/CreateAccountPage.vue'
import Home from '../views/HomePage.vue'

const routes: any = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'loginPage',
    component: LoginPage,
  },
  {
    path: '/create-account',
    name: 'createAccountPage',
    component: CreateAccountPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
