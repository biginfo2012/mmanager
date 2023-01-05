// ** Components
import CardInvite from '../CardInvite'

// ** Reactstrap Imports
import {
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    Input,
    Label,
    Button
} from 'reactstrap'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'

const AddGuest = () => {
    return (
        <Row>
            <Col lg="8" md="8" sm="12">
                <Card>
                    <CardBody>
                        <CardTitle>Include Guests</CardTitle>
                        <div className="mb-2">
                            <div className="form-check form-check-inline me-1">
                                <Input
                                    type="checkbox"
                                    id="basic-cb-unchecked"
                                />
                                <Label
                                    for="basic-cb-unchecked"
                                    className="form-check-label"
                                >
                                    Clients
                                </Label>
                            </div>
                            <div className="form-check form-check-inline me-1">
                                <Input
                                    type="checkbox"
                                    id="basic-cb-unchecked"
                                />
                                <Label
                                    for="basic-cb-unchecked"
                                    className="form-check-label"
                                >
                                    Vendors
                                </Label>
                            </div>
                            <div className="form-check form-check-inline me-1">
                                <Input
                                    type="checkbox"
                                    id="basic-cb-unchecked"
                                />
                                <Label
                                    for="basic-cb-unchecked"
                                    className="form-check-label"
                                >
                                    Leads
                                </Label>
                            </div>
                            <div className="form-check form-check-inline me-1">
                                <Input
                                    type="checkbox"
                                    id="basic-cb-unchecked"
                                />
                                <Label
                                    for="basic-cb-unchecked"
                                    className="form-check-label"
                                >
                                    Employees
                                </Label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Input
                                    type="checkbox"
                                    id="basic-cb-unchecked"
                                />
                                <Label
                                    for="basic-cb-unchecked"
                                    className="form-check-label"
                                >
                                    Relationships
                                </Label>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="mb-1 d-flex justify-content-between">
                                <div>Or Enter emails</div>
                                <div>
                                    Total Found: <strong>45</strong>
                                </div>
                            </div>
                            <Input
                                type="textarea"
                                name="text"
                                id="exampleText"
                                rows="3"
                                placeholder="Seperated By Commas Ex. example1@gmail.com, example2@gmail.com ..."
                            />
                        </div>
                        <div>
                            <Button color="primary">Add Guests</Button>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg="4" md="4" sm="12">
                <CardInvite />
            </Col>
        </Row>
    )
}

export default AddGuest
