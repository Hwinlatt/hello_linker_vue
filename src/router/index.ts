import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  //Category
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/Category/CategoryList.vue'),
  },
  {
    path: '/category/:name',
    name: 'FilterByCategory',
    component: () => import('../views/Category/CategoryMovieList.vue'),
  },
  //Movies
  {
    path: '/movies',
    name: 'movieList',
    component: () => import('../views/Movie/MovieView.vue'),
  },
  {
    path: '/movies/:id',
    name: 'movieInfo',
    component: () => import('../views/Movie/MovieInfo.vue'),
  },
  {
    path: '/movies/show',
    name: 'showMovie',
    component: () => import('../views/Movie/MovieShow.vue'),
  },
  //Ads Routes
  {
    path: '/four-ads',
    name: 'fourAds',
    component: () => import('../views/Ads/FourAds.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('../views/errors/404View.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
