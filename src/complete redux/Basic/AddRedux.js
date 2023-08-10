import React, { useEffect, useState } from 'react'
import { addingUser } from '../Redux/Action/Actions';
import { useDispatch } from 'react-redux';
import { Button, Col, Form, InputGroup, Modal, Row } from 'react-bootstrap';

const AddRedux = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [designation, setDesignation] = useState();
  const [reporting, setReporting] = useState();

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = () => {
    const newUser = {

      name, designation, email, number, reporting,
    };

    dispatch(addingUser(newUser));
    setName('');
    setEmail('');
    setNumber('');
    setDesignation('');
    setReporting('');

    alert('Do you want to add the details');
    console.log('newUser : ', newUser);
    handleClose();

  };
  useEffect(() => {
    console.log(' Name:', name);
    console.log('Email:', email);
    console.log('Number:', number);
    console.log('reporting:', reporting);
    console.log('designation:', designation);
  }, [name, designation, email, number, reporting]);




  return (
    <>
      <button type="button" class="btn btn-primary" onClick={handleShow}>
        ADD
      </button>
      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title> Add User</Modal.Title>
        </Modal.Header>
        <Form>
          <Row className="mb-2 container">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control

                type="text"
                name="name"
                placeholder=" name"
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
                name="designation"
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

export default AddRedux
