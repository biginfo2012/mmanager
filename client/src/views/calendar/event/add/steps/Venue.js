// ** React Imports
import { Fragment, useState } from 'react'

// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'

const Address = ({ stepper, type }) => {
    // ** State
    const [startPicker, setStartPicker] = useState(new Date())
    const [endPicker, setEndPicker] = useState(new Date())

    return (
        <Fragment>
            <div className="content-header">
                <h5 className="mb-0">Venue</h5>
                <small>Enter Event Address.</small>
            </div>
            <Form onSubmit={(e) => e.preventDefault()}>
                <Row>
                    <Col md="6" className="mb-1">
                        <Label className="form-label" for="date-time-picker">
                            Start Date & Time
                        </Label>
                        <Flatpickr
                            value={startPicker}
                            data-enable-time
                            id="date-time-picker"
                            className="form-control"
                            onChange={(date) => setStartPicker(date)}
                        />
                    </Col>
                    <Col md="6" className="mb-1">
                        <Label className="form-label" for="date-time-picker">
                            End Date & Time
                        </Label>
                        <Flatpickr
                            value={endPicker}
                            data-enable-time
                            id="date-time-picker"
                            className="form-control"
                            onChange={(date) => setEndPicker(date)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md="6" className="mb-1">
                        <Label className="form-label" for="basicInput">
                            Location
                        </Label>
                        <Input
                            type="location"
                            id="basicInput"
                            placeholder="House, Bar ..."
                        />
                    </Col>
                    <Col md="6" className="mb-1">
                        <Label className="form-label" for="basicInput">
                            Street
                        </Label>
                        <Input
                            type="location"
                            id="basicInput"
                            placeholder="Enter Street"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md="4" className="mb-1">
                        <Label className="form-label" for="basicInput">
                            City
                        </Label>
                        <Input
                            type="location"
                            id="basicInput"
                            placeholder="Enter City"
                        />
                    </Col>
                    <Col md="4" className="mb-1">
                        <Label className="form-label" for="basicInput">
                            State
                        </Label>
                        <Input
                            type="location"
                            id="basicInput"
                            placeholder="Enter State"
                        />
                    </Col>
                    <Col md="4" className="mb-1">
                        <Label className="form-label" for="basicInput">
                            ZIP
                        </Label>
                        <Input
                            type="location"
                            id="basicInput"
                            placeholder="ZIP Code"
                        />
                    </Col>
                </Row>

                <div className="d-flex justify-content-between">
                    <Button
                        color="primary"
                        className="btn-prev"
                        onClick={() => stepper.previous()}
                    >
                        <ArrowLeft
                            size={14}
                            className="align-middle me-sm-25 me-0"
                        ></ArrowLeft>
                        <span className="align-middle d-sm-inline-block d-none">
                            Previous
                        </span>
                    </Button>
                    <Button
                        color="primary"
                        className="btn-next"
                        onClick={() => stepper.next()}
                    >
                        <span className="align-middle d-sm-inline-block d-none">
                            Next
                        </span>
                        <ArrowRight
                            size={14}
                            className="align-middle ms-sm-25 ms-0"
                        ></ArrowRight>
                    </Button>
                </div>
            </Form>
        </Fragment>
    )
}

export default Address
