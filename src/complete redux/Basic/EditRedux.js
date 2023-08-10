

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editingUser } from '../Redux/Action/Actions';
import { Button, Col, Form, InputGroup, Modal, Row } from 'react-bootstrap';

const EditRedux = ({ userIndex, handleClose }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.users.users[userIndex]);
    console.log("users", user);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [designation, setDesignation] = useState('');
    const [reporting, setReporting] = useState('');


    const [show, setShow] = useState(true);
    // const handleClose = ()=> setShow(false);
    // const handleShow = () => {
    //     if (user) {
    //         setName(user.name);
    //         setDesignation(user.designation);
    //         setEmail(user.email);
    //         setNumber(user.number);
    //         setReporting(user.reporting);
    //     setShow(true);
    // }}

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setNumber(user.number);
            setDesignation(user.designation);
            setReporting(user.reporting);
        }
    }, [user]);

    const handleSave = () => {
        const updatedUser = {
            name,
            email,
            number,
            designation,
            reporting,
        };

        dispatch(editingUser(userIndex, updatedUser));

        console.log("editing : ", updatedUser);
        alert("do you want to edit the details");
        handleClose();
    }


    return (
        <>
            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" onClick={handleShow}>
                Edit
            </button> */}
            {/* <!-- The Modal --> */}
            {/* <div className="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">Edit User</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            <form>
                                <label>First Name</label>
                                <input
                                    type="text"
                                    placeholder='enter your First Name '
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <label>Email </label>
                                <input type='email' placeholder='enter your Email ' value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label> Number</label>
                                <input type='number' placeholder='enter your Phone Number ' value={number} onChange={(e) => setNumber(e.target.value)} />
                                <label>Designation</label>
                                <input type='text' placeholder='enter your Designation ' value={designation} onChange={(e) => setDesignation(e.target.value)} />
                                <label> reporting</label>
                                <input type='text' placeholder='enter your reporting ' value={reporting} onChange={(e) => setReporting(e.target.value)} />

                                <div>
                                </div>
                            </form>
                        </div>

                        <div class="modal-footer">
                            <Button variant="secondary" onClick={handleClose}> Close </Button>
                            <Button variant="primary" onClick={handleSave}>Save changes</Button>
                        </div>

                    </div>
                </div>
            </div> */}
            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title> Edit User</Modal.Title>
                </Modal.Header>
                <Form>
                    <Row className="mb-2 container">
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control

                                type="text"
                                name="first_name"
                                placeholder="First name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            <Form.Control.Feedback type="invalid">
                                this filed is *
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom02">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control

                                type="text"
                                name="last_name"
                                placeholder="Designation"
                                onChange={(e) => setDesignation(e.target.value)}
                                value={designation}
                            />
                            <Form.Control.Feedback type="invalid">
                                this filed is *
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                            <Form.Label>Email</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    placeholder="name@example"

                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid email*
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                            <Form.Label>Phone</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    name="number"
                                    placeholder="123456795"

                                    onChange={(e) => setNumber(e.target.value)}
                                    value={number}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid Phone*
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                            <Form.Label>reporting</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    name="reporting"
                                    placeholder="state"

                                    onChange={(e) => setReporting(e.target.value)}
                                    value={reporting}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid reporting*
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
        </>
    )
}


export default EditRedux



