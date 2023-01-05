export const ENDPOINTS = {
    // Auth
    SEND_PASS_RESET_OTP: 'auth/send-reset-pass-otp',
    RESET_PASS: '/auth/reset-password',

    // Contacts
    GET_TOTAL_CLIENTS: '/client-contact/total-clients',
    CREATE_NEW_POSITION: '/client-contact/position',
    ALL_CLIENT_POSITION: '/client-contact/position',
    ONE_CLIENT_POSITION: '/client-contact/position/',

    // Contacts --> employee
    ALL_EMPLOYEES: '/employee-contact/allemployees',
    CREATE_NEW_EMPLOYEE_POSITION: '/employee-contact/position',
    ALL_EMPLOYEE_POSITION: '/employee-contact/position',
    ONE_EMPLOYEE_POSITION: '/employee-contact/position/',

    // Contacts --> Leads
    LEAD_CONTACT: '/lead-contact/',
    CREATE_NEW_LEAD_POSITION: '/lead-contact/position',
    ALL_LEAD_POSITION: '/lead-contact/position',

    // Contacts --> Relationships
    CREATE_NEW_RELATION_POSITION: '/relation-contact/position',
    ALL_RELATION_POSITION: '/relation-contact/position',
    ONE_RELATION_POSITION: '/relation-contact/position/',

    // Contacts --> Vendor
    VENDOR_CONTACT: '/vendor-contact/',
    CREATE_NEW_VENDOR_POSITION: '/vendor-contact/position',
    ALL_VENDOR_POSITION: '/vendor-contact/position'
}
