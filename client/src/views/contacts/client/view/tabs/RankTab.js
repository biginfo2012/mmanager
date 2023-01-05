// ** React Imports
import { Fragment } from 'react'

// ** Rank Components
// import Programs from './Programs'
import Certifications from './Certifications'

const RankTab = ({ selectedUser }) => {
    return (
        <Fragment>
            {/* <Programs /> */}
            <Certifications selectedUser={selectedUser} />
        </Fragment>
    )
}

export default RankTab
