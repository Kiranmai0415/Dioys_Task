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
// import AddEdit from '../Basic Redux/AddEdit';
import AddTable from '../complete redux/Basic/AddTable';
import EditRedux from '../complete redux/Basic/EditRedux';
import AddRedux from '../complete redux/Basic/AddRedux';


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
                    {/* <Route path='/addedit' element={<AddEdit/>}/> */}
                    <Route path='/addredux' element={<AddRedux/>}/>
                    <Route path='/editredux' element={<EditRedux/>}/>
                    <Route path='/addtable' element={<AddTable/>}/>

                </Routes>
            </BrowserRouter>
        </>
    );
} export default Routing;