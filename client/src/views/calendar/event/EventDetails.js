// ** React Imports
import { useContext } from 'react'

// ** Components
import CardEvent from './CardEvent'
import GuestTracker from './guests/GuestTracker'
import CardInvite from './CardInvite'
import AttendeesTabs from './AttendeesTabs'

// ** Reactstrap Imports
import { Row, Col, Card } from 'reactstrap'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'

const EventDetails = () => {
    // ** Context
    const { colors } = useContext(ThemeColors)

    return (
        <div>
            <Row className="match-height">
                <Col lg="4" md="6" xs="12">
                    <CardEvent />
                </Col>
                <Col lg="4" md="6" xs="12">
                    <GuestTracker
                        primary={colors.primary.main}
                        danger={colors.danger.main}
                    />
                </Col>
                <Col lg="4" md="6" xs="12">
                    <CardInvite />
                </Col>
            </Row>
            <Row className="match-height">
                <Col lg="12" xs="12">
                    <AttendeesTabs />
                </Col>
            </Row>
        </div>
    )
}

export default EventDetails
