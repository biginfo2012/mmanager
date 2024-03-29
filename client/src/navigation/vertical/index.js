// ** Navigation imports
import dashboards from './dashboards'
import contacts from './contacts'
import tasks from './tasks'
import calendar from './calendar'
import marketing from './marketing'
import business from './business'
import shop from './shop'
import finance from './finance'
import settings from './settings'
import documents from './documents'

// ** Merge & Export
export default [
    ...dashboards,
    ...contacts,
    ...tasks,
    ...calendar,
    ...documents,
    ...marketing,
    ...business,
    ...shop,
    ...finance,
    ...settings
]
