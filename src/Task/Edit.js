import React, { useState } from 'react'
import { Button, Col, Form, InputGroup, Modal, Row, Table } from 'react-bootstrap'


const EditUser = () => {

    const [user, setUser] = useState({
        data: [
            {

                first_name: "john",
                last_name: "ubbani",
                email: "johnubbani@gmailcom",
                phone: "1234567890"
            },
            {

                first_name: "kiranmai",
                last_name: "ubbani",
                email: "kiranmaiubbani@gmailcom",
                phone: "1234567890"
            },
            {

                first_name: "roja",
                last_name: "ubbani",
                email: "rojaubbani@gmailcom",
                phone: "1234567890"
            },
        ]
    })

    const [modal, setModal] = useState({
        index:-1,
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
    })
    const [isAdd, setIsAdd] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (index) => {
        const clickedUser = user.data[index];
        setModal({ ...clickedUser,index });
        setShow(true);
      };
    
      const handleSave = () => {
        const { data } = user;
        const editedData = data.map((item, index) => {
          if (index === modal.index) {
            return { ...modal };
          }
          return item;
        });
        console.log("item",editedData); 
        setUser({ ...user, data: editedData });
        handleClose();
      };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setModal({ ...modal, [name]: value });
    };

    return (
        <>
            <div>
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
                                        <td>{each.phone}</td>
                                        <td>
                                            <Button variant="primary" onClick={() => handleShow(index)}>Edit</Button>
                                            <Button>Delete</Button>
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
                            <Modal.Title> Edit User</Modal.Title>
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
                            <Button variant="primary" onClick={handleSave}>Save changes</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </>
    )
}

export default EditUser
