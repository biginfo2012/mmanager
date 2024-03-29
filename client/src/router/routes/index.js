// ** Routes Imports
import DashboardRoutes from './Dashboards'
import ContactRoutes from './Contacts'
import AppRoutes from './Apps'
import TaskRoutes from './Task'
import CalendarRoutes from './Calendar'
import BusinessRoutes from './Business'
import ShopRoutes from './Shop'
import FinanceRoutes from './Finance'
import DocumentRoutes from './Documents'

import FormRoutes from './Forms'
import PagesRoutes from './Pages'
import TablesRoutes from './Tables'
import ChartsRoutes from './Charts'
import UiElementRoutes from './UiElements'
import ExtensionsRoutes from './Extensions'
import PageLayoutsRoutes from './PageLayouts'

// ** Document title
const TemplateTitle = '%s - MyManager React Admin Template'

// ** Default Route
const DefaultRoute = '/dashboard/analytics'

// ** Merge Routess
const Routes = [
    ...DashboardRoutes,
    ...ContactRoutes,
    ...AppRoutes,
    ...TaskRoutes,
    ...TablesRoutes,
    ...CalendarRoutes,
    ...BusinessRoutes,
    ...ShopRoutes,
    ...FinanceRoutes,
    ...DocumentRoutes,

    ...PagesRoutes,
    ...UiElementRoutes,
    ...ExtensionsRoutes,
    ...PageLayoutsRoutes,
    ...FormRoutes,
    ...TablesRoutes,
    ...ChartsRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
