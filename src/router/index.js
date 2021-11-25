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
        path: '/signin',
        name: 'SignIn',
        component: () => import('../views/SignIn.vue')
    },
    {
        path: '/createApplication',
        name: 'CreateApplication',
        component: () => import('../views/CreateApplication.vue')
    },
    {
		path: '/dashboard',
        redirect: '/dashboard/home',
		name: 'Dashboard',
		component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/index.vue'),
		children: [
			{
				path: 'home',
				name: 'ApplicantDashboard',
				component: () => import('../views/dashboard/ApplicantDashboard.vue')
			},
			{
				path: 'takeAssessment',
				name: 'TakeAssessment',
				component: () => import('../views/dashboard/TakeAssessment.vue')
			},
            {
				path: 'assessmentQuestion',
				name: 'AssessmentQuestions',
				component: () => import('../views/dashboard/AssessmentQuestions.vue')
			},
            {
				path: 'assessmentCompleted',
				name: 'AssessmentCompleted',
				component: () => import('../views/dashboard/AssessmentCompleted.vue')
			}
			]
	}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router