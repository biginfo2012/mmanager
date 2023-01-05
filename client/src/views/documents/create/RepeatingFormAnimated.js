// ** React Imports
import { useState,useContext,useEffect } from 'react'

// ** Custom Components
import Repeater from '@components/repeater'

// ** Components
import ContactsModal from '../ContactsModal'

// ** Third Party Components
import { X, Plus, Trash2 } from 'react-feather'
import { SlideDown } from 'react-slidedown'
import Select from 'react-select'
import { RiContactsBookLine } from 'react-icons/ri'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import {
    Row,
    Col,
    Form,
    Label,
    Input,
    Button,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    InputGroupText
} from 'reactstrap'
import { DocumentContext } from '../../../utility/context/Document'
const RepeatingForm = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16)

    //const recipientColor = `#${randomColor}`
    const [recipientColor, setRecipientColor] = useState(`#${randomColor}`)
    // ** State
    const [count, setCount] = useState(1)
    const [contactsModal, setContactsModal] = useState(false)
    const [active, setActive] = useState('1')
    const [form, setForm] = useState({
        id: count,
        Name: '',
        Email: '',
        color: recipientColor
    })

    //**Context */
    const { recipients, setRecipients } = useContext(DocumentContext)

    // ** Contacts Modal Tabs Toggle
    const toggle = (tab) => {
        if (active !== tab) {
            setActive(tab)
        }
    }

    const onFormChanged = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const increaseCount = () => {
        setCount(count + 1)
        setRecipientColor(`#${randomColor}`)
    }
    const AddRecipient = () => {
        increaseCount()
        //add to context
        setRecipients([...recipients, form])
    }

    const deleteForm = (e) => {
        e.preventDefault()
        const slideDownWrapper = e.target.closest('.react-slidedown'),
            form = e.target.closest('form')
        if (slideDownWrapper) {
            slideDownWrapper.remove()
        } else {
            form.remove()
        }
    }

    const roleOptions = [
        { value: 'sign', label: 'Sign' },
        { value: 'download', label: 'Download' },
        { value: 'read', label: 'Read' }
    ]

    const onChange = () => {}

    useEffect(()=>{
        
        setForm({...form,color:recipientColor})
    },[recipientColor])


    return (
        <>
            <Repeater count={count} >
                {(i) => {
                    const Tag = i === 0 ? 'div' : SlideDown

                    return (
                        <Tag key={i}>
                            <Form>
                                <div
                                    style={{
                                        margin: '20px 0 20px 0',
                                        display: 'flex',
                                        width: '100%',
                                        border: '1px solid #ced4da'
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '0.5%',
                                            backgroundColor: `${(recipients[i]?.color)?recipients[i].color : recipientColor}`
                                        }}
                                    ></div>
                                    <div
                                        style={{
                                            width: '99%'
                                        }}
                                    >
                                        <Row
                                            style={{
                                                margin: '15px 15px 15px 0'
                                            }}
                                        >
                                            <Col md={6}>
                                                <Col sm="12" className="mb-1">
                                                    <Label
                                                        className="form-label"
                                                        for="nameVertical"
                                                    >
                                                        Name
                                                    </Label>
                                                    <InputGroup className="mb-2">
                                                        <Input
                                                            placeholder="search..."
                                                            onChange={
                                                                onFormChanged
                                                            }
                                                            name="Name"
                                                        />
                                                        <InputGroupText>
                                                            <RiContactsBookLine
                                                                size={18}
                                                                className="cursor-pointer"
                                                                onClick={() =>
                                                                    setContactsModal(
                                                                        !contactsModal
                                                                    )
                                                                }
                                                            />
                                                        </InputGroupText>
                                                    </InputGroup>
                                                    <ContactsModal
                                                        contactsModal={
                                                            contactsModal
                                                        }
                                                        setContactsModal={
                                                            setContactsModal
                                                        }
                                                        toggle={toggle}
                                                        active={active}
                                                    />
                                                </Col>
                                                <Col sm="12">
                                                    <Label
                                                        className="form-label"
                                                        for="EmailVertical"
                                                    >
                                                        Email
                                                    </Label>
                                                    <Input
                                                        type="email"
                                                        name="Email"
                                                        id="EmailVertical"
                                                        placeholder="Email"
                                                        onChange={onFormChanged}
                                                    />
                                                </Col>
                                            </Col>
                                            <Col md={2}>
                                                <div className="mt-2">
                                                    <Select
                                                        theme={
                                                            selectThemeColors
                                                        }
                                                        isClearable={false}
                                                        className="react-select"
                                                        classNamePrefix="select"
                                                        options={roleOptions}
                                                        onChange={onChange}
                                                        style={{
                                                            overflow: 'visible'
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                            <Col md={2}>
                                                <div className="mt-2">
                                                    <UncontrolledButtonDropdown>
                                                        <DropdownToggle
                                                            color="flat-primary"
                                                            caret
                                                        >
                                                            Customization
                                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            <DropdownItem
                                                                href="/"
                                                                tag="a"
                                                            >
                                                                Option 1
                                                            </DropdownItem>
                                                            <DropdownItem
                                                                href="/"
                                                                tag="a"
                                                            >
                                                                Option 2
                                                            </DropdownItem>
                                                            <DropdownItem
                                                                href="/"
                                                                tag="a"
                                                            >
                                                                Option 3
                                                            </DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledButtonDropdown>
                                                </div>
                                            </Col>
                                            <Col md={2}>
                                                <div className="mt-2">
                                                    <Trash2
                                                        size={20}
                                                        className="float-end cursor-pointer"
                                                        style={{
                                                            marginTop: '8px'
                                                        }}
                                                        onClick={deleteForm}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Form>
                        </Tag>
                    )
                }}
            </Repeater>
            <Button
                className="btn-icon ms-1 mb-2 mt-1"
                color="primary"
                onClick={AddRecipient}
            >
                <Plus size={14} />
                <span className="align-middle ms-25">Add New</span>
            </Button>
        </>
    )
}

export default RepeatingForm
