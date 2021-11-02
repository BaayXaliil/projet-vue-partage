import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/upload-photo',
    component: () => import('../views/photo/UploadPicture.vue')
  },
  {
    path: '/search-photo',
    component: () => import('../views/photo/SearchPhoto.vue')
  },
  {
    path: '/details-picture',
    component: () => import('../views/photo/DetailsPicture.vue')
  },
  {
    path: '/favorite-picture',
    component: () => import('../views/photo/FavoritePicture.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
