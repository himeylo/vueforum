import PageHome from '@/components/PageHome'
import PageThreadShow from '@/components/PageThreadShow'
import NotFound from '@/components/PageNotFound'
import Forum from '@/pages/Forum'
import Category from '@/pages/Category'
import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data.json'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category,
    props: true
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: Forum,
    props: true
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true,
    beforeEnter (to, from, next) {
      // check if thread exists
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
      // if exists continue
      if (threadExists) {
        return next()
      } else {
        next({
          name: 'NotFound',
          component: NotFound,
          path: { pathMatch: to.path.substring(1).split('/') }
        })
      }
    }
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
