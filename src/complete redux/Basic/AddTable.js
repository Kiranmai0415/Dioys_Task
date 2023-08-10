import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Table } from 'react-bootstrap'
import AddRedux from './AddRedux'
import EditRedux from './EditRedux'
import { deletingUser } from '../Redux/Action/Actions'

const AddTable = () => {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const [selectedUserIndex, setSelectedUserIndex] = useState(null);

    const handleEditModal = (userIndex) => {
        setSelectedUserIndex(userIndex);
    };

    const handleClose = () => {
        setSelectedUserIndex(null);
    };

  
    const handleDelete = (userId) => {
        dispatch(deletingUser(userId));
        alert("Are you sure you want to delete the user?");
        setSelectedUserIndex(null);
    };
    
    return (
        <div>
            <AddRedux />
            <Table className='container'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th> Name</th>
                        <th>Email </th>
                        <th>Phone </th>
                        <th>designation </th>
                        <th>Reporting </th>
                        <th>Actions </th>
                        

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={user.id}>
                                    {/* <td>{index + 1}</td> */}
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.number}</td>
                                    <td>{user.designation}</td>
                                    <td>{user.reporting}</td>
                                    <td>
                                        <Button
                                       className="btn btn-primary"
                                            onClick={() => handleEditModal(index)}
                                        >
                                            Edit
                                        </Button>
                                        <Button onClick={()=>handleDelete(index)} className='btn btn-danger'>Delete</Button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>

            </Table>
            {selectedUserIndex !== null && (
                <EditRedux userIndex={selectedUserIndex} handleClose={handleClose} />
            )}

        </div>
    )
}

export default AddTable

