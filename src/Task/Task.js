import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import AddUser from "../Task/Add";
import "./task.css"
import EditUser from "../Task/edit";
const Users = () => {

    const [userslist, setUserslist] = useState(
        {
            data: [],
            text:''
        }
    )
    
    useEffect(() => {

        axios.get('https://reqres.in/api/users?page=1')
            .then(function (response) {
                setUserslist(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const deleteUser = (user) => {
        console.log("user=>", user);

        const filterUserslist = userslist.data.filter((each) => each.id !== user.id)
        console.log("filterUserslist=>", filterUserslist)
        alert("are you sure")
        setUserslist({ ...userslist, data: filterUserslist })
    }

    const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { data, text } = userslist;
    const search = (e) => {
        e.preventDefault();
        let list = data.push(text)
        console.log("list", list)
        setUserslist({ ...userslist, data: data, text: ""  })
        // setState({ ...state, text: "" })
    }
  
    const handleSearch = (e,id) => {
        var data, filter, ul, li, a, i, txtValue, value;
        data = document.getElementById("list");
        filter = data.value.toUpperCase();
        for (i = 0; i < data.length; i++) {
            a = data[i].getElementByName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                data[i].style.display = "";
            } else {
                data[i].style.display = "none";
            }
        }
        setUserslist({...userslist, [e.target.value]:e.target.name, data:data})
    }
    return (


        <div className="mt-5">
            <AddUser/>
            <label>Search</label>
            <input type="text" name="Search" value={userslist.Search} onChange={handleSearch}></input>
            
            <Table striped bordered hover className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Profile pic</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                       userslist && userslist.data.map((user, index) => {
                            return (

                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td><img src={user.avatar} alt="avatar" className="rounded-circle" /></td>
                                    <td>
                                        <EditUser/> {''}
                                        <Button variant="success" onClick={() => deleteUser(user)}>Delete</Button>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default Users;