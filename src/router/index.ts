import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WorkoutsView from '@/views/WorkoutsView.vue'
import LoginView from '@/views/LoginView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import Admin from '@/layouts/Admin.vue'
import Full from '@/layouts/Full.vue'
import { useAuthStore } from '../stores/AuthStore'

const routes: RouteRecordRaw[]  = [
  {
    path: '/dashboard',
    redirect: '/dashboard',
    component: Admin,
    children: [
      { path: '/dashboard', name: 'Home', component: HomeView },
      { path: '/workouts', name: 'Workouts', component: WorkoutsView },
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
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  if (authRequired && !auth.user) {
      auth.returnUrl = to.fullPath;
      return '/login';
  }
});

export default router
