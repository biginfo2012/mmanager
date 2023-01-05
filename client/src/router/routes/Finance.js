import { lazy } from 'react'

const FinanceRoutes = [
    // Finance
    {
        path: '/finance/income',
        component: lazy(() => import('../../views/finance/income'))
    },
    {
        path: '/finance/expense',
        component: lazy(() => import('../../views/finance/expense'))
    },
    {
        path: '/finance/pnl',
        component: lazy(() => import('../../views/finance/pnl'))
    }
]

export default FinanceRoutes
