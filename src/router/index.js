import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home'
import about from '../views/about'
import bestiary from '../views/bestiary'
import player from '../views/player'
import page from '../views/page'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: home
    },
    {
        path: '/about',
        name: 'About',
        component: about
    },
    {
        path: '/page/:filename',
        name: 'Page',
        component: page
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
