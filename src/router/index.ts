import axios from 'axios'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'
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
    children: [{
      path: '',
      name: 'category',
      component: () => import('../views/Category/CategoryList.vue'),
    }, {
      path: ':name',
      name: 'FilterByCategory',
      component: () => import('../views/Category/CategoryMovieList.vue'),
    },]
  },

  //Movies
  {
    path: '/movies',
    children: [{
      path: '',
      name: 'movieList',
      component: () => import('../views/Movie/MovieView.vue'),
    }, {
      path: ':id',
      name: 'movieInfo',
      component: () => import('../views/Movie/MovieInfo.vue'),
    }, {
      path: 'page/download',
      name: 'showMovie',
      component: () => import('../views/Movie/MovieShow.vue'),
    },
    {
      path: 'page/search',
      name: 'searchMovie',
      component: () => import('../views/SearchView.vue'),
    },
    ]
  },

  //Actors
  {
    path: '/actors',
    children: [
      {
        path: '',
        component: () => import('../views/Actors/ActorsList.vue'),
        name: 'actorsList',

      },
      {
        path: ':name',
        name: 'FilterByActor',
        component: () => import('../views/Actors/ActorMovieList.vue'),
      },
    ]
  },
    {
      path: '/collection',
      name: 'collection',
      component: () => import('../views/CollectionView.vue'),
    },
  //Ads Routes
  {
    path: '/four-ads',
    name: 'fourAds',
    component: () => import('../views/Ads/FourAds.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'notFound' }
  },
  {
    path: '/not_found',
    name: 'notFound',
    component: () => import('../views/errors/404View.vue'),
  },
  {
    path: '/coming_soon',
    name: 'comingSoon',
    component: () => import('../views/errors/ComingSoon.vue'),
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

// router.beforeEach((to, from, next) => {
//   // ...
//   // explicitly return false to cancel the navigation
//   return next()
// })

export default router
