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
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: () => import('../views/ForgotPassword.vue')
    },
    {
        path: '/create-application',
        name: 'CreateApplication',
        component: () => import('../views/CreateApplication.vue')
    },
    {
        path: '/reset-password',
        name: 'ResetPasswordDone',
        component: () => import('../views/ResetPasswordDone.vue')
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
				path: 'take-assessment',
				name: 'TakeAssessment',
				component: () => import('../views/dashboard/TakeAssessment.vue')
			},
            {
				path: 'assessment-questions',
				name: 'AssessmentQuestions',
				component: () => import('../views/dashboard/AssessmentQuestions.vue')
			},
            {
				path: 'assessment-completed',
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
