import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import More from '@/views/More'
import Shopcart from '@/views/Shopcart'
import Mine from '@/views/Mine'

const routes = [
  {
		path: '/',
		redirect: '/home'
	},
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/More',
    component: More
  },
  {
    path: '/Shopcart',
    component: Shopcart
  },
  {
    path: '/Mine',
    component: Mine
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
