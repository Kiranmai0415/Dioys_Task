import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';


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



    useEffect(() => {
        console.log('Table Data:', user);
    }, [user]);

 const handleAdd=() => console.log("i am Added into the table")
 const handleEdit=() => console.log("i am Edited in the table")
 const handleDelete=() => console.log("i am Deleted in the table")


    return (
        <>
            <div>
                <Button onClick={handleAdd}>Add</Button>
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
                                            <Button onClick={handleEdit}>Edit</Button>
                                            <Button onClick={handleDelete}>Delete</Button>
                                        </td>
                                    </tr>
                                );
                            })
                        }

                    </tbody>
                </Table>
                <Button href='/dashboard' >Back to Dashboard</Button>
            </div></>
    );
} export default Tables