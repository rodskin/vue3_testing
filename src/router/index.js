import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import bestiary from '../views/bestiary.vue'
import player from '../views/player.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: home
    },
    {
        path: '/player',
        name: 'Player',
        component: player
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
