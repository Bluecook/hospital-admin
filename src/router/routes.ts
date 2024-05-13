import { RouteRecordRaw } from 'vue-router'

export const publicRoutes: RouteRecordRaw[] = [
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
        path: '/help',
        name: 'help',
        component: () => import('@/views/Help/help.vue'),
        meta: {
            menuName: '帮助'
        }
    },
]

export const adminRoutes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login/login.vue'),
        meta: {
            menuName: '登录/注册'
        }
    },
]