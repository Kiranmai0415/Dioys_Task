import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tables from '../Task/Table'
import TableData from '../Task/Tabledata'
// import UserDetails from '../Task/Adding';
import Add from '../Task/Adding';
import Edit from '../Task/Edit';
import Delete from '../Task/Delete';
import Dashboard from '../Task/Dashboard';
import Login from '../Task/Login';
import TableSet from '../Redux/Components/TableSet';


function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/tabledata" element={<TableData />} />
                    <Route path="/table" element={<Tables />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/edit" element={<Edit />} />
                    <Route path="/deleteuser" element={<Delete />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/tables' element={<TableSet/>}/>

                </Routes>
            </BrowserRouter>
        </>
    );
} export default Routing;