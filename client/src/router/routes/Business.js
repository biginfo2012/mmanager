import { lazy } from 'react'

const BusinessRoutes = [
    // My Business
    {
        path: '/business/retention',
        component: lazy(() => import('../../views/business/retention'))
    },
    {
        path: '/business/birthday',
        component: lazy(() => import('../../views/business/birthday')),
        exact: true
    },
    {
        path: '/business/expired',
        component: lazy(() => import('../../views/business/expired')),
        exact: true
    },
    {
        path: '/business/statistics',
        component: lazy(() => import('../../views/business/statistics')),
        exact: true
    },
    {
        path: '/business/certifications',
        component: lazy(() => import('../../views/business/certifications')),
        exact: true
    }
]

export default BusinessRoutes
