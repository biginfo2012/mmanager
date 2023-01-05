// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Form, Input, Button } from 'reactstrap'

const Host = ({ stepper, type }) => {
    return (
        <Fragment>
            <div className="content-header">
                <h5 className="mb-0">Host Info</h5>
                <small>Enter Host Info.</small>
            </div>
            <Form onSubmit={(e) => e.preventDefault()}>
                <Row>
                    <Col md="6" className="mb-1">
                        <Label className="form-label" for="basicInput">
                            Host Name
                        </Label>
                        <Input
                            type="host"
                            id="basicInput"
                            placeholder="Enter Host Name"
                        />
                    </Col>
                    <Col md="6" className="mb-1">
                        <Label className="form-label" for="basicInput">
                            Email
                        </Label>
                        <Input
                            type="email"
                            id="basicInput"
                            placeholder="Enter Email"
                        />
                    </Col>
                </Row>

                <Row>
                    <Col md="6" className="mb-1">
                        <Label className="form-label" for="basicInput">
                            Mobile Number
                        </Label>
                        <Input
                            type="mobile"
                            id="basicInput"
                            placeholder="Enter Mobile Number"
                        />
                    </Col>
                    <Col md="6" className="mb-1">
                        <Label className="form-label" for="basicInput">
                            Alternative Mobile
                        </Label>
                        <Input
                            type="mobile"
                            id="basicInput"
                            placeholder="Enter Alternative Mobile"
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

export default Host
