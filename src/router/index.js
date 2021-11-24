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
        path: '/assessmentQuestions/:id',
        name: 'AssessmentQuestions',
        component: () => import('../views/AssessmentQuestions.vue')
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: () => import('../views/SignIn.vue')
    },
    {
        path: '/createApplication',
        name: 'CreateApplication',
        component: () => import('../views/CreateApplication.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router