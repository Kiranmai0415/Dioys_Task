import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';

function Search() {
    const [state, setState] = useState({
        users: [

            {
                // id: '1',
                name: "rahul",
                email: "rahul@gmail.com",
                number: 1234567890,
                designation: 'UI developer',
                reporting: 'Katehunston'

            },
            {
                // id: '2',
                name: "rajshekar",
                email: "rajshekar@gmail.com",
                number: 1234567890,
                designation: 'UI developer',
                reporting: 'Katehunston'

            },
            {
                // id: '3',
                name: "charan",
                email: "charan@gmail.com",
                number: 1234567890,
                designation: 'UI developer',
                reporting: 'Katehunston'

            },
            {
                // id: '4',
                name: "satish",
                email: "satish@gmail.com",
                number: 1234567890,
                designation: 'UI developer',
                reporting: 'Katehunston'

            },
            {
                // id: '5',
                name: "vinay",
                email: "vinay@gmail.com",
                number: 1234567890,
                designation: 'UI developer',
                reporting: 'Katehunston'

            },
            {
                // id: '6',
                name: "dharanesh",
                email: "dharanesh@gmail.com",
                number: 1234567890,
                designation: 'UI developer',
                reporting: 'Katehunston'

            },
            {
                // id: '7',
                name: "venky",
                email: "venky@gmail.com",
                number: 1234567890,
                designation: 'UI developer',
                reporting: 'Katehunston'

            },
            {
                // id: '8',
                name: "shankar",
                email: "shankar@gmail.com",
                number: 1234567890,
                designation: 'UI developer',
                reporting: 'Katehunston'

            },
            {
                // id: '9',
                name: "indraja",
                email: "indraja@gmail.com",
                number: 1234567890,
                designation: 'UI developer',
                reporting: 'Katehunston'

            },
            {
                // id: '10',
                name: "padmaja",
                email: "padmaja@gmail.com",
                number: 1234567890,
                designation: 'UI developer',
                reporting: 'Katehunston'

            },
            {
                // id: '11',
                name: "kalyani",
                email: "kalyani@gmail.com",
                number: 1234567890,
                designation: 'UI developer',
                reporting: 'Katehunston'

            },
            {
                // id: '12',
                name: "ruthvika",
                email: "ruthvika@gmail.com",
                number: 1234567890,
                designation: 'UI developer',
                reporting: 'Katehunston'

            },
            {
                // id: '13',
                name: "kiranmai",
                email: "kiranmai@gmail.com",
                number: 1234567890,
                designation: 'UI developer',
                reporting: 'Katehunston'

            },
            {
                // id: '14',
                name: "vijetha",
                email: "vijetha@gmail.com",
                number: 1234567890,
                designation: 'UI developer',
                reporting: 'Katehunston'

            },
            {
                // id: '15',
                name: "lokesh",
                email: "lokesh@gmail.com",
                number: 1234567890,
                designation: 'UI developer',
                reporting: 'Katehunston'

            },
           
        ]
    })

    const [searchUser, setSearchUser] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    const handleEdit = () => console.log('edited');
    const handleDelete = () => console.log('deleted');
    const handleSearch = () => {
        const searchResults = state.users.filter(item => item.name.toLowerCase().includes(searchUser.toLowerCase()));
        console.log("searchResults : ", searchResults)
    }
    const filteredUsers = searchUser === '' ? state.users : state.users.filter(user =>
        user.name.toLowerCase().includes(searchUser.toLowerCase())
    );

    return (
        <>
            <input
                type="text"
                placeholder="Search by name"
                value={searchUser}
                onChange={(e) => setSearchUser(e.target.value)} />
            <Button onClick={handleSearch} >Search</Button>
            {/* <ul>
                {
                    searchResults.map((item, index) => (
                        <li key={index}>
                            {item.name} - {item.email} - {item.designation} - {item.reporting}
                        </li>
                    ))
                }
            </ul> */}

            <Table className="container" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name </th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Designation</th>
                        <th>Reporting</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredUsers.map((each, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{each.name}</td>
                                    <td>{each.email}</td>
                                    <td>{each.number}</td>
                                    <td>{each.designation}</td>
                                    <td>{each.reporting}</td>
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
        </>
    );
}
export default Search;