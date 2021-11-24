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
        path: '/createApplication',
        name: 'CreateApplication',
        component: () => import('../views/CreateApplication.vue')
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: () => import('../views/SignUp.vue')
    },
    {
        path: '/applicantDashboard',
        name: 'ApplicantDashboard',
        component: () => import('../views/ApplicantDashboard.vue')
    },
    {
        path: '/takeAssessment',
        name: 'TakeAssessment',
        component: () => import('../views/TakeAssessment.vue')
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: () => import('../views/SignIn.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router