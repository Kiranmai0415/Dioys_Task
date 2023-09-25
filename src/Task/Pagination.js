import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap';

const Pagination = () => {

    const [user, setUser] = useState({
        data: [

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

    const [currentPage, setCurrentPage] = useState(1);
    const [postPage, setPostPage] = useState(3);

    const first = currentPage * postPage;
    const second = first - postPage;
    const total = user.data.slice(second, first);
    let pageNumber = []
    let res = user.data.length;
    let sum = postPage;
    for (let i = 1; i < Math.ceil(res / sum); i++) {
        pageNumber.push(i);
        console.log("page", pageNumber);
    }
    return (
        <>
            <div>
                <select name='' onChange={(e) => setPostPage(e.target.value)} >
                    {/* <option value={'select'} >Select</option> */}
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
                {
                    pageNumber.map((each) => {
                        return (
                            <Button onClick={() => setCurrentPage(each)}>{each}</Button>
                        )
                    })
                }
            </div>
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
                        total.map((user, index) => {
                            return (
                                <tr key={user.id}>
                                    {/* <td>{index + 1}</td> */}
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.number}</td>
                                    <td>{user.designation}</td>
                                    <td>{user.reporting}</td>
                                  
                                </tr>
                            );
                        })
                    }
                </tbody>

            </Table>
        </>
    )
}

export default Pagination