import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import Admin from '@/layouts/Admin.vue'
import Full from '@/layouts/Full.vue'

const routes = [
  {
    path: '/admin',
    redirect: '/admin',
    component: Admin,
    children: [
      { path: '/admin', name: 'Home', component: HomeView },
      { path: '/admin/about', name: 'About', component: AboutView },
    ],
  },
  
  {
    path: '/',
    component: Full,
    redirect: '/login',
    children: [
      { path: '/login', name: 'Login', component: LoginView },
      { path: '/404', name: 'NotFound', component: NotFoundView },
    ]
  },
  { path: '/:pathMatch(.*)', component: NotFoundView }
]

const router = createRouter({
  base: import.meta.env.BASE_URL,
  history: createWebHistory(),
  routes,
})

export default router
