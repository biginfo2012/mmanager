import { lazy } from 'react'

const DocumentRoutes = [
    // Documents
    {
        path: '/documents',
        component: lazy(() => import('../../views/documents')),
        appLayout: true,
        className: 'email-application'
    },
    {
        path: '/document/create',
        component: lazy(() => import('../../views/documents/create/CreateDoc'))
    },
    {
        path: '/documents/:folder',
        exact: true,
        appLayout: true,
        className: 'email-application',
        component: lazy(() => import('../../views/documents')),
        meta: {
            navLink: '/documents'
        }
    },
    {
        path: '/documents/label/:label',
        exact: true,
        appLayout: true,
        className: 'email-application',
        component: lazy(() => import('../../views/documents')),
        meta: {
            navLink: '/documents'
        }
    },
    {
        path: '/documents/:filter',
        component: lazy(() => import('../../views/documents')),
        meta: {
            navLink: '/documents'
        }
    }
]

export default DocumentRoutes
