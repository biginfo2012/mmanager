// ** React Imports
import { Fragment } from 'react'

// ** Billing Components
import BillingAddress from './BillingAddress'
import BillingCurrentPlan from './BillingCurrentPlan'
import PaymentMethods from './PaymentMethods'

const BillingTab = ({ selectedUser }) => {
    return (
        <Fragment>
            <BillingCurrentPlan />
            <BillingAddress />
            <PaymentMethods selectedUser={selectedUser} />
        </Fragment>
    )
}

export default BillingTab
