import React, { useState } from 'react'
import { Button, Col, Form, InputGroup, Modal, Row, Table } from 'react-bootstrap'


const Add = () => {

    const [user, setUser] = useState({
        data: [
            {

                first_name: "john",
                last_name: "ubbani",
                email: "johnubbani@gmailcom",
                number: "1234567890"
            },
            {

                first_name: "john",
                last_name: "ubbani",
                email: "johnubbani@gmailcom",
                number: "1234567890"
            },
            {

                first_name: "john",
                last_name: "ubbani",
                email: "johnubbani@gmailcom",
                number: "1234567890"
            },
        ]
    })

    const [modal, setModal] = useState({
        first_name: '',
        last_name: '',
        email: '',
        number: '',
    })
    // const [isAdd, setIsAdd] = useState(false) 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (index) => {
        const clickedUser = user.data[index];
        setModal({ ...clickedUser,index });
        setShow(true);
      };
    const handleSave = () => {
        let { data } = user;
        data.push(modal);
        alert("are you sure you want o add the details in table")
        console.log("data", data);
        setUser({ ...user, modal: modal, data: data })
        
        handleClose();
    }



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setModal({ ...modal, [name]: value });
    };

    const handleEdit=() => console.log("i am Edited in the table")
    const handleDelete=() => console.log("i am Deleted in the table")
    return (
        <>
            <div>
                <Button variant="primary" onClick={handleShow} >ADD </Button>
            </div>
            <Table className="container" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.data.map((each, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{each.first_name}</td>
                                    <td>{each.last_name}</td>
                                    <td>{each.email}</td>
                                    <td>{each.number}</td>
                                    <td>

                                        <Button variant="primary" onClick={handleEdit} >Edit </Button>
                                        <Button onClick={handleDelete}>Delete</Button>
                                    </td>
                                </tr>
                            );
                        })
                    }

                </tbody>
            </Table>

            <div>



                <Modal show={show} onHide={handleClose}>

                    <Modal.Header closeButton>
                        <Modal.Title> Add User</Modal.Title>
                        {/* <Modal.Title>{isAdd ? AddUser : EditUser}</Modal.Title> */}
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
                                    value={modal.first_name}
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
                                    value={modal.last_name}
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
                                        value={modal.email}
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
                                        value={modal.number}
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
                                        value={modal.address}
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
                        <Button variant="primary" onClick={handleSave}>Save </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        </>
    )
}

export default Add
