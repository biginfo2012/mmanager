import { lazy } from 'react'

const TaskRoutes = [
    // Tasks
    {
        path: '/tasks',
        exact: true,
        component: lazy(() => import('../../views/tasks'))
    },
    {
        path: '/manage-task',
        exact: true,
        component: lazy(() => import('../../views/tasks/add'))
    },

    // Goals
    {
        path: '/goals',
        exact: true,
        appLayout: true,
        className: 'todo-application',
        component: lazy(() => import('../../views/goals'))
    },
    {
        path: '/apps/todo/:filter',
        appLayout: true,
        exact: true,
        className: 'todo-application',
        component: lazy(() => import('../../views/apps/todo')),
        meta: {
            navLink: '/apps/todo'
        }
    },
    {
        path: '/apps/todo/tag/:tag',
        appLayout: true,
        className: 'todo-application',
        component: lazy(() => import('../../views/apps/todo')),
        meta: {
            navLink: '/apps/todo'
        }
    }
]

export default TaskRoutes
