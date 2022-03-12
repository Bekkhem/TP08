import { createRouter, createWebHistory } from 'vue-router'
import HomeLogin from '../views/HomeLogin.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'HomeLogin',
            component: HomeLogin
        },
        {
            path: '/register',
            name: 'SignUP',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../views/SignUP.vue')
        }, {
            path: '/home',
            name: 'Home',
            component: () =>
                import ('../components/Home.vue')
        }
    ]
})

export default router