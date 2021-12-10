import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store';
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
        component: () => import('../views/SignUp.vue'),
        meta: { requiresAuth: false }
    },
    {
        path: '/verify',
        name: 'VerifyUser',
        component: () => import('../views/VerifyUser.vue'),
        meta: { requiresAuth: false }
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: () => import('../views/SignIn.vue'),
        meta: { requiresAuth: false }
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: () => import('../views/ForgotPassword.vue'),
        meta: { requiresAuth: false }
    },
    {
        path: '/reset-password',
        name: 'ResetPassword',
        component: () => import('../views/ResetPassword.vue'),
        meta: { requiresAuth: false }
    },
    {
        path: '/reset-password-email',
        name: 'ResetViaEmail',
        component: () => import('../views/ResetViaEmail.vue'),
        meta: { requiresAuth: false }
    },
    {
        path: '/reset-password-success',
        name: 'ResetPasswordDone',
        component: () => import('../views/ResetPasswordDone.vue'),
        meta: { requiresAuth: false }
    },
    {
        path: '/application',
        name: 'NoApplication',
        component: () => import('../views/NoApplication.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/create-application',
        name: 'CreateApplication',
        component: () => import('../views/CreateApplication.vue'),
        meta: { requiresAuth: true }
    },
    {
		path: '/dashboard',
        redirect: '/dashboard/home',
		name: 'Dashboard',
		component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard/index.vue'),
        meta: { requiresAuth: true },
		children: [
			{
				path: 'home',
				name: 'ApplicantDashboard',
				component: () => import('../views/dashboard/ApplicantDashboard.vue')
			},
            {
				path: 'assessment-instructions',
				name: 'AssessmentInstructions',
				component: () => import('../views/dashboard/AssessmentInstructions.vue')
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
	},
    {
        path: '*',
        name: 'PageNotFound',
        component: () => import('../views/PageNotFound.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(route => route.meta.requiresAuth)) {
        if (!(store.state.token)) {
            next('/signin');
        } else {
            next()
        }
    } else if (to.matched.some(route => route.meta.requiresAuth === false)) {
        if (store.state.token) {
            next('/dashboard')
        }
    }
    next()
  })

export default router
