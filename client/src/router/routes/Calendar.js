import { lazy } from 'react'

const CalendarRoutes = [
    // Calendar
    {
        path: '/calendar',
        component: lazy(() => import('../../views/calendar')),
        exact: true
    },
    {
        path: '/add-event',
        component: lazy(() =>
            import('../../views/calendar/event/add/AddEvent')
        ),
        exact: true
    },
    {
        path: '/events',
        component: lazy(() => import('../../views/calendar/event')),
        exact: true
    },
    {
        path: '/event-details',
        component: lazy(() =>
            import('../../views/calendar/event/EventDetails')
        ),
        exact: true
    },
    {
        path: '/add-guest',
        component: lazy(() =>
            import('../../views/calendar/event/guests/AddGuest')
        ),
        exact: true
    },
    {
        path: '/event-preview',
        component: lazy(() => import('../../views/calendar/event/preview')),
        exact: true
    }
]

export default CalendarRoutes
