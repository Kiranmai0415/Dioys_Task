import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import AddUser from './Adding';

function Tables() {

    const [user, setUser] = useState({
        data: [
            {

                first_name: "john",
                last_name: "ubbani",
                email: "johnubbani@gmailcom",
                phone: "1234567890"
            },
            {

                first_name: "john",
                last_name: "ubbani",
                email: "johnubbani@gmailcom",
                phone: "1234567890"
            },
            {

                first_name: "john",
                last_name: "ubbani",
                email: "johnubbani@gmailcom",
                phone: "1234567890"
            },
        ]
    })
    const [modal, setModal] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
    })


    useEffect(() => {
        console.log('Table Data:', user);
    }, [user]);



    return (
        <>
            <div>

                <AddUser />
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
                                            {/* <Button onClick={() => editUser(each)}>Edit</Button>{""} */}
                                            {/* <EditUser /> */}
                                            <Button>Delete</Button>
                                        </td>
                                    </tr>
                                );
                            })
                        }

                    </tbody>
                </Table>
            </div></>
    );
} export default Tables