import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({ showSpinner: false });


const routes: RouteRecordRaw[] = [
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home/home.vue'),
        children: [
            {
                path: '/index',
                name: 'index',
                component: () => import('@/views/Index/index.vue'),
                meta: {
                    menuName: '仪表盘'
                }
            },
            {
                path: '/appointment',
                name: 'appointment',
                component: () => import('@/views/Appointment/appointment.vue'),
                meta: {
                    menuName: '预约'
                }
            },
            {
                path: '/doctor',
                name: 'doctor',
                component: () => import('@/views/Doctor/doctor.vue'),
                meta: {
                    menuName: '医生'
                }
            },
            {
                path: '/schedule',
                name: 'schedule',
                component: () => import('@/views/Schedule/schedule.vue'),
                meta: {
                    menuName: '日程'
                }
            },
            {
                path: '/outclinic',
                name: 'outclinic',
                component: () => import('@/views/OutClinic/outClinic.vue'),
                meta: {
                    menuName: '门诊'
                }
            },
            {
                path: '/pack',
                name: 'pack',
                component: () => import('@/views/Pack/pack.vue'),
                meta: {
                    menuName: '包装'
                }
            },
            {
                path: '/quotation',
                name: 'quotation',
                component: () => import('@/views/Quotation/quotation.vue'),
                meta: {
                    menuName: '报价'
                }
            },
            {
                path: '/location',
                name: 'location',
                component: () => import('@/views/Location/location.vue'),
                meta: {
                    menuName: '我们的位置'
                }
            },
            {
                path: '/login',
                name: 'login',
                component: () => import('@/views/Login/login.vue'),
                meta: {
                    menuName: '登录/注册'
                }
            },
            {
                path: '/help',
                name: 'help',
                component: () => import('@/views/Help/help.vue'),
                meta: {
                    menuName: '帮助'
                }
            },
            { path: '/home', redirect: '/index' },
            { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/components/NotFound/index.vue') },
        ]
    },
    {
        path: '/demo',
        component: () => import('@/views/demo.vue')
    },
    {
        path: '/userlogin',
        name: 'userlogin',
        component: () => import('../views/Login/UserLogin.vue')
    },
    { path: '/', redirect: '/home' },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/components/NotFound/index.vue') },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, form, next) => {
    const token = localStorage.getItem('token')
    NProgress.start()
    if (to.path == '/userlogin') {
        if (!token) {
            next()
        } else {
            next('/home')
        }
    } else {
        if (!token) {
            next({ name: 'userlogin' })
        } else {
            next()
        }
    }
})

router.afterEach(() => {
    NProgress.done()
})

export default router