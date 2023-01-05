// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Form, Input, Button } from 'reactstrap'

const Message = ({ stepper, type }) => {
    return (
        <Fragment>
            <div className="content-header">
                <h5 className="mb-0">Add Message</h5>
                <small>A few words for recipients</small>
            </div>
            <Form onSubmit={(e) => e.preventDefault()}>
                <Row>
                    <Col md="12" className="mb-1">
                        <Label className="form-label" for="basicInput">
                            Email Subject
                        </Label>
                        <Input
                            type="host"
                            id="basicInput"
                            placeholder="Enter Host Name"
                        />
                    </Col>
                    <Col md="12" className="mb-1">
                        <Label className="form-label" for="basicInput">
                            Email Message
                        </Label>
                        <Input
                            type="textarea"
                            id="basicInput"
                            placeholder="Enter Message"
                        />
                    </Col>
                </Row>

                <div className="d-flex justify-content-between">
                    <Button
                        color="primary"
                        className="btn-prev"
                        outline
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

export default Message
