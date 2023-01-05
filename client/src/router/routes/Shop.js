import { lazy } from 'react'

const ShopRoutes = [
    // Shop
    {
        path: '/shop/subscription',
        component: lazy(() => import('../../views/shop/subscription'))
    },
    {
        path: '/shop/product',
        component: lazy(() => import('../../views/shop/product'))
    }
]

export default ShopRoutes
