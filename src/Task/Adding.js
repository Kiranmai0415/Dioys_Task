import React, { useState } from 'react'
import { Button, Col, Form, InputGroup, Modal, Row } from 'react-bootstrap'


const AddUser = () => {

    const [user, setUser] = useState({
        data: []
    })

    const [modal, setModal] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
    })
    const [isAdd, setIsAdd] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        // setModal({ ...modal, first_name: '', last_name: '', email: '', phone: '', address: '' })
        setShow(true);
    }
    const handleSave = () => {
        let { data } = user;
        data.push(modal);
        console.log("data", data);
        setUser({ ...user, modal: modal, data: data })
    }



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setModal({ ...modal, [name]: value });
    };
    return (
        <>

            <div>
                <div>
                    <Button variant="primary" onClick={handleShow} >Save changes</Button>

                </div>


                <Modal show={show} onHide={handleClose}>

                    <Modal.Header closeButton>
                        <Modal.Title>Add</Modal.Title>
                    </Modal.Header>
                    {/* <Form noValidate validated={validated} > */}
                    <Form>
                        <Row className="mb-2 container">
                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="first_name"
                                    placeholder="First name"
                                    // value={statemodal.first_name} 
                                    onChange={handleInputChange}
                                    value={user.first_name}
                                />
                                <Form.Control.Feedback type="invalid">
                                    this filed is required*
                                </Form.Control.Feedback>
                                {/* {/ <Form.Control.Feedback>Looks good!</Form.Control.Feedback> /} */}
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="last_name"
                                    placeholder="Last name"
                                    // value={statemodal.last_name} 
                                    onChange={handleInputChange}
                                    value={user.last_name}
                                />
                                <Form.Control.Feedback type="invalid">
                                    this filed is required*
                                </Form.Control.Feedback>
                                {/* {/ <Form.Control.Feedback>Looks good!</Form.Control.Feedback> /} */}
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                <Form.Label>Email</Form.Label>
                                <InputGroup hasValidation>
                                    {/* {/ <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text> /} */}
                                    <Form.Control
                                        type="text"
                                        name="email"
                                        placeholder="name@example"
                                        // aria-describedby="inputGroupPrepend"
                                        required
                                        // value={statemodal.email}
                                        onChange={handleInputChange}
                                        value={user.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid email*
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                <Form.Label>Phone</Form.Label>
                                <InputGroup hasValidation>
                                    {/* {/ <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text> /} */}
                                    <Form.Control
                                        type="text"
                                        name="number"
                                        placeholder="123456795"
                                        // aria-describedby="inputGroupPrepend"
                                        required
                                        // value={statemodal.email} 
                                        onChange={handleInputChange}
                                        value={user.number}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid Phone*
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                <Form.Label>address</Form.Label>
                                <InputGroup hasValidation>
                                    {/* {/ <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text> /} */}
                                    <Form.Control
                                        type="text"
                                        name="address"
                                        placeholder="state"
                                        // aria-describedby="inputGroupPrepend"
                                        required
                                        // value={statemodal.email} 
                                        onChange={handleInputChange}
                                        value={user.address}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid address*
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                        </Row>
                    </Form>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}> Close </Button>
                        <Button variant="primary" onClick={handleSave}>Save changes</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        </>
    )
}

export default AddUser
