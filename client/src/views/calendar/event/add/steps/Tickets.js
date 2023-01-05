// ** React Imports
import { Fragment } from 'react'

// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'

const Tickets = ({ stepper, type }) => {
    return (
        <Fragment>
            <div className="content-header">
                <h5 className="mb-0">Tickets</h5>
                <small>Lets Create Tickets</small>
            </div>
            <Form onSubmit={(e) => e.preventDefault()}>
                <Row>
                    <Col md="12" className="mb-1 mt-1">
                        <Label className="form-label mb-1" for="eventType">
                            Ticket Type
                        </Label>
                        <div className="d-flex">
                            <div className="form-check me-2">
                                <Input
                                    type="radio"
                                    id="ex1-active"
                                    name="ex1"
                                    defaultChecked
                                />
                                <Label
                                    className="form-check-label"
                                    for="ex1-active"
                                >
                                    Paid
                                </Label>
                            </div>
                            <div className="form-check">
                                <Input
                                    type="radio"
                                    name="ex1"
                                    id="ex1-inactive"
                                />
                                <Label
                                    className="form-check-label"
                                    for="ex1-inactive"
                                >
                                    Free
                                </Label>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md="6" className="mb-1">
                        <Label className="form-label" for="basicInput">
                            Name
                        </Label>
                        <Input
                            type="ticketName"
                            id="basicInput"
                            placeholder="Give your tickets a name ..."
                        />
                    </Col>
                    <Col md="6" className="mb-1">
                        <Label className="form-label" for="basicInput">
                            Available Quantity
                        </Label>
                        <Input
                            type="quantity"
                            id="basicInput"
                            placeholder="How many tickets are available?"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md="6" className="mb-1">
                        <Label className="form-label" for="basicInput">
                            Price
                        </Label>
                        <Input
                            type="price"
                            id="basicInput"
                            placeholder="Price per ticket"
                        />
                    </Col>
                    <Col md="6" className="mb-1">
                        <Label className="form-label" for="basicInput">
                            Total Income
                        </Label>
                        <Input type="quantity" id="basicInput" disabled />
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

export default Tickets
