import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/kanban',
        name: 'kanban',
        component: () => import('../views/kanban/Kanban.vue')
    }
]

const router = new Router({
    routes
})

export default router