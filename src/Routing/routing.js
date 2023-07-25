import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Tables from '../Task/Table'
import TableData from '../Task/Tabledata'
import AddUser from '../Task/Adding';


function Routing() {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/tabledata" element={<TableData/>}/>
            <Route path="/table" element={<Tables/>}/>
            <Route path="/adduser" element={<AddUser/>}/>

        </Routes>
        </BrowserRouter>
        </>
    );
}export default Routing;