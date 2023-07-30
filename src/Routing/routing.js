import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Tables from '../Task/Table'
import TableData from '../Task/Tabledata'
// import UserDetails from '../Task/Adding';
import Add from '../Task/Adding';
import EditUser from '../Task/Edit';
import Delete from'../Task/Delete';


function Routing() {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/tabledata" element={<TableData/>}/>
            <Route path="/table" element={<Tables/>}/>
            <Route path="/adduser" element={<Add/>}/>
            <Route path="/edituser" element={<EditUser/>}/>
            <Route path="/deleteuser" element={<Delete/>}/>

        </Routes>
        </BrowserRouter>
        </>
    );
}export default Routing;