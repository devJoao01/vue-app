import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/about',
    name: 'about',
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
