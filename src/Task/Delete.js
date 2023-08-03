import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'


const Delete = () => {

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

    

    const handleEdit=()=>console.log("i am Edited");
    const handleDelete = (index) => {
        const newData = [...user.data];
        newData.splice(index, 1);
        alert(" are you sure you want to delete the user");
        setUser({ ...user, data: newData });
        console.log("newdata", newData)
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
                                            <Button variant="primary" onClick={handleEdit}>Edit</Button>
                                            <Button onClick={()=>handleDelete(index)}>Delete</Button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                       

                    </tbody>
                </Table>
                <Button href='/dashboard' >Back to Dashboard</Button>
            </div>
        </>
    )
}

export default Delete
