import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import bestiary from '../views/bestiary.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
    },
    {
        path: '/bestiary/:monster',
        name: 'Bestiary',
        component: bestiary
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
