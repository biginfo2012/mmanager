// ** React Imports
import { Fragment, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Row, Col, Card, CardBody, Input, Button } from 'reactstrap'

// ** Third Party Components
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// ** Component Imports
import AddEventSidebar from './AddEventSidebar'
import EventStat from './EventStat'
import EventOverview from './EventOverview'

// ** Icons Imports
import { AiOutlineEdit, AiOutlineDelete, AiOutlineEye } from 'react-icons/ai'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'

const MySwal = withReactContent(Swal)

const handleDelete = () => {
    return MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-danger ms-1'
        },
        buttonsStyling: false
    }).then(function (result) {
        if (result.value) {
            MySwal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: 'Your event has been deleted.',
                customClass: {
                    confirmButton: 'btn btn-success'
                }
            })
        } else if (result.dismiss === MySwal.DismissReason.cancel) {
            MySwal.fire({
                title: 'Cancelled',
                text: 'Your event is safe :)',
                icon: 'error',
                customClass: {
                    confirmButton: 'btn btn-success'
                }
            })
        }
    })
}

const EventManagement = () => {
    // ** states
    const [addSidebarOpen, setAddSidebarOpen] = useState(false)

    // ** AddEventSidebar Toggle Function
    const handleAddEventSidebar = () => setAddSidebarOpen(!addSidebarOpen)

    // ** Context
    const context = useContext(ThemeColors)

    return (
        <Fragment>
            <BreadCrumbs
                breadCrumbTitle="Event"
                breadCrumbParent="Calendar"
                breadCrumbActive="All Event"
            />
            <Row>
                <Col md="8" sm="12">
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center mb-sm-0 mb-1 me-1">
                                            <label
                                                className="mb-0"
                                                htmlFor="search-invoice"
                                            >
                                                Search:
                                            </label>
                                            <Input
                                                id="search-invoice"
                                                className="ms-50 w-100"
                                                type="text"
                                                // value={searchTerm}
                                                // onChange={(e) => handleFilter(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <Link to="/add-event">
                                                <Button color="primary">
                                                    Add New Event
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    <Row className="align-items-center">
                                        <Col md="2">
                                            <img
                                                src={
                                                    require('@src/assets/images/banner/banner-28.jpg')
                                                        .default
                                                }
                                                height="70"
                                                alt="alter text"
                                            />
                                        </Col>
                                        <Col md="5">
                                            <div className="d-flex flex-column">
                                                <span className="h4">
                                                    Annual Entreprenuer Summit
                                                </span>
                                                <span>
                                                    The Watermark Hotel Tysons,
                                                    VA
                                                </span>
                                            </div>
                                        </Col>
                                        <Col md="3">
                                            <div className="d-flex flex-column">
                                                <span>
                                                    Friday, August 20, 2022
                                                </span>
                                                <span>8PM to 10PM</span>
                                            </div>
                                        </Col>
                                        <Col
                                            md="2"
                                            className="d-flex justify-content-end"
                                        >
                                            <div>
                                                <AiOutlineDelete
                                                    className="fs-2 me-1 cursor-pointer"
                                                    onClick={handleDelete}
                                                />
                                                <AiOutlineEdit className="fs-2 me-1 cursor-pointer" />
                                                <Link to="/event-details">
                                                    <AiOutlineEye className="fs-2 cursor-pointer" />
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <Row className="align-items-center">
                                        <Col md="2">
                                            <img
                                                src={
                                                    require('@src/assets/images/banner/banner-28.jpg')
                                                        .default
                                                }
                                                height="70"
                                                alt="alter text"
                                            />
                                        </Col>
                                        <Col md="5">
                                            <div className="d-flex flex-column">
                                                <span className="h4">
                                                    Annual Entreprenuer Summit
                                                </span>
                                                <span>
                                                    The Watermark Hotel Tysons,
                                                    VA
                                                </span>
                                            </div>
                                        </Col>
                                        <Col md="3">
                                            <div className="d-flex flex-column">
                                                <span>
                                                    Friday, August 20, 2022
                                                </span>
                                                <span>8PM to 10PM</span>
                                            </div>
                                        </Col>
                                        <Col
                                            md="2"
                                            className="d-flex justify-content-end"
                                        >
                                            <div>
                                                <AiOutlineDelete
                                                    className="fs-2 me-1 cursor-pointer"
                                                    onClick={handleDelete}
                                                />
                                                <AiOutlineEdit className="fs-2 me-1 cursor-pointer" />
                                                <Link to="/event-details">
                                                    <AiOutlineEye className="fs-2 cursor-pointer" />
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <Row className="align-items-center">
                                        <Col md="2">
                                            <img
                                                src={
                                                    require('@src/assets/images/banner/banner-28.jpg')
                                                        .default
                                                }
                                                height="70"
                                                alt="alter text"
                                            />
                                        </Col>
                                        <Col md="5">
                                            <div className="d-flex flex-column">
                                                <span className="h4">
                                                    Annual Entreprenuer Summit
                                                </span>
                                                <span>
                                                    The Watermark Hotel Tysons,
                                                    VA
                                                </span>
                                            </div>
                                        </Col>
                                        <Col md="3">
                                            <div className="d-flex flex-column">
                                                <span>
                                                    Friday, August 20, 2022
                                                </span>
                                                <span>8PM to 10PM</span>
                                            </div>
                                        </Col>
                                        <Col
                                            md="2"
                                            className="d-flex justify-content-end"
                                        >
                                            <div>
                                                <AiOutlineDelete
                                                    className="fs-2 me-1 cursor-pointer"
                                                    onClick={handleDelete}
                                                />
                                                <AiOutlineEdit className="fs-2 me-1 cursor-pointer" />
                                                <Link to="/event-details">
                                                    <AiOutlineEye className="fs-2 cursor-pointer" />
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col md="4" sm="12">
                    <Row>
                        <Col>
                            <EventOverview
                                success={context.colors.success.main}
                            />
                            <EventStat
                                primary={context.colors.primary.main}
                                warning={context.colors.warning.main}
                                danger={context.colors.danger.main}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>

            <AddEventSidebar
                open={addSidebarOpen}
                handleAddEventSidebar={handleAddEventSidebar}
            />
        </Fragment>
    )
}
export default EventManagement
