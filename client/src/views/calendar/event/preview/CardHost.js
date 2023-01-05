// ** Custom Components
import Avatar from '@components/avatar'

// ** Icons Imports
import { Mail, Phone, User } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardTitle, CardBody } from 'reactstrap'

const CardHost = () => {
    return (
        <Card className="card-developer-meetup">
            <CardBody>
                <CardTitle>Host Info</CardTitle>
                <div className="d-flex align-items-center">
                    <Avatar
                        color="light-primary"
                        className="rounded me-1"
                        icon={<User size={18} />}
                    />
                    <h6 className="mb-0">Peter Parkour</h6>
                </div>
                <div className="d-flex align-items-center mt-2">
                    <Avatar
                        color="light-primary"
                        className="rounded me-1"
                        icon={<Phone size={18} />}
                    />
                    <h6 className="mb-0">555-555-555-5555</h6>
                </div>
                <div className="d-flex align-items-center mt-2">
                    <Avatar
                        color="light-primary"
                        className="rounded me-1"
                        icon={<Mail size={18} />}
                    />
                    <h6 className="mb-0">peter@gmail.com</h6>
                </div>
            </CardBody>
        </Card>
    )
}

export default CardHost
