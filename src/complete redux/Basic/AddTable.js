import React from 'react'
import { useSelector } from 'react-redux'
import AddEdit from './AddEdit'
import { Table } from 'react-bootstrap'

const AddTable = () => {

    const users = useSelector((state) => state.users.users)
    return (
        <div>
            <AddEdit />
            <Table className='container'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email </th>
                        <th>Phone </th>
                        <th>Address </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.number}</td>
                                    <td>{user.address}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>

            </Table>
        </div>
    )
}

export default AddTable