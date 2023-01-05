// ** React Imports
import { Fragment } from 'react'

// ** Components
import CardEventInfo from './CardEventInfo'
import CardHost from './CardHost'
import PreviewBody from './PreviewBody'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

const EventPreview = () => {
    return (
        <Fragment>
            <Row>
                <Col md="4">
                    <CardEventInfo />
                    <CardHost />
                </Col>
                <Col md="8">
                    <PreviewBody />
                </Col>
            </Row>
        </Fragment>
    )
}

export default EventPreview
