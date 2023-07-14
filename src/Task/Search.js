import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Search() {

    const [state, setState] = useState({
        text: '',
        list: []
    })
    const [usersdata, setUsersdata] = useState(
        {
            data: [],

        }
    )
    useEffect(() => {

        axios.get('https://reqres.in/api/users?page=1')
            .then(function (response) {
                console.log(response);
                setUsersdata(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])


    const handleOntable = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    console.log("result", state.text)

    const { list, text } = state;
    const InputSubmit = (e) => {
        e.preventDefault();
        list.push(text)
        // console.log("list", list)
        setState({ ...state, list: list, text: "" })

    }
    // const handleSearch = e => {
    //     var data, filter, ul, li, a, i, txtValue;
    //     data = document.getElementById("list");
    //     filter = list.value.toUpperCase();
    //     for (i = 0; i < data.length; i++) {
    //         a = data[i].getElementByName("a")[0];
    //         txtValue = a.textContent || a.innerText;
    //         if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //             data[i].style.display = "";
    //         } else {
    //             data[i].style.display = "none";
    //         }
    //     }
    // }
    
    const [show, setShow] = useState(false);
    const editUser = (user) => {
        console.log("user", user);
        // setAddModal(user);
        setShow(true)
        // setIsAdd(false)
    }
    const { data } = usersdata
    const deletedata = (user) => {
        setDeleted(true)
        setDeleteuser(user)
    }

    const [Deleteuser, setDeleteuser] = useState({})
    const [deleted, setDeleted] = useState(false);
    const handleClosedelete = () => setDeleted(false);
    const deleteFn = () => {
        const getIndex = data.indexOf(Deleteuser);
        data.splice(getIndex, 1)
        console.log("newdata", data);
        setUsersdata({ ...usersdata, data: data });
        handleClosedelete();
    }



    return (
        <div className="container">

            <form onSubmit={InputSubmit}>
                <label>Textfield:</label>
                <input type="text" name="text" value={state.text} onChange={handleOntable}></input>
                <input type="submit" value="Submit" className="btn-btn-success"></input>

                {
                    state.list.length > 0 ?
                        <div>
                            <table>
                                <thead>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Profile pic</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </thead>
                                <tbody>
                                    {
                                        state.list.length > 0 &&
                                        state.list.map((each, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{each.first_name}</td>
                                                    <td>{each.last_name}</td>
                                                    <td><img className="rounded-circle text-center" src={each.avatar} alt="avatar" height="50" width="50" /></td>
                                                    <td>{each.email}</td>
                                                    <td>
                                                        <Button variant="primary m-2" onClick={() => editUser(each)}>Edit</Button>
                                                        <Button variant="danger" onClick={() => deletedata(each)}>Delete</Button>
                                                    </td>
                                                </tr>

                                            )
                                        })
                                    }

                                </tbody>

                            </table>
                        </div>
                        : null
                }
            </form >

        </div >
    );
}
export default Search;
