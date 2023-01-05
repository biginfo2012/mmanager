// ** React Imports
import { Fragment, useState } from 'react'

// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'

const Title = ({ stepper, type }) => {
    return (
        <Fragment>
            <div className="content-header">
                <h5 className="mb-0">Event Title</h5>
                <small className="text-muted">Enter Your Event Title.</small>
            </div>
            <Form onSubmit={(e) => e.preventDefault()}>
                <Row>
                    <Col md="12" className="mb-1">
                        <Label className="form-label" for="basicInput">
                            Event Title
                        </Label>
                        <Input
                            type="title"
                            id="basicInput"
                            placeholder="Enter Event Title"
                        />
                    </Col>
                    <Col md="12" className="mb-3">
                        <Label className="form-label mb-1" for="eventType">
                            Event Type
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
                                    Public
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
                                    Private
                                </Label>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="d-flex justify-content-between">
                    <Button
                        color="secondary"
                        className="btn-prev"
                        outline
                        disabled
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

export default Title
