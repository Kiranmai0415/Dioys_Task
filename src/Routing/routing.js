import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tables from '../Task/Table'
import TableData from '../Task/Tabledata'
// import UserDetails from '../Task/Adding';
import Add from '../Task/Adding';
import Edit from '../Task/Edit';
import Delete from '../Task/Delete';
import Dashboard from '../Task/Dashboard';
// import Login from '../Task/Login';
// import TableSet from '../Redux/Components/TableSet';
// import AddEdit from '../Basic Redux/AddEdit';
import AddTable from '../complete redux/Basic/AddTable';
import EditRedux from '../complete redux/Basic/EditRedux';
import AddRedux from '../complete redux/Basic/AddRedux';
import Search from '../Task/Search';
import Validation from '../Task/Validation';
import Pagination from '../Task/Pagination';
// import Pages from '../complete redux/Redux/Reducer/Pagination_Reducer';
import Guidelines from '../Task/Guidelines';
// import Social from '../Task/Social';
import Slides from '../Task/Slideshows/Slides';


function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/tabledata" element={<TableData />} />
                    <Route path="/table" element={<Tables />} />
                    <Route path="/adding" element={<Add />} />
                    <Route path="/editing" element={<Edit />} />
                    <Route path="/deleteuser" element={<Delete />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    {/* <Route path='/login' element={<Login />} /> */}
                    {/* <Route path='/tables' element={<TableSet/>}/> */}
                    {/* <Route path='/addedit' element={<AddEdit/>}/> */}
                    <Route path='/addredux' element={<AddRedux/>}/>
                    <Route path='/editredux' element={<EditRedux/>}/>
                    <Route path='/addtable' element={<AddTable/>}/>
                    <Route path='/search' element={<Search/>}/>
                    <Route path='/validate' element={<Validation/>}/>
                    <Route path='/page' element={<Pagination/>}/>
                    {/* <Route path='/pages' element={<Pages/>}/> */}
                    <Route path='/guide' element={<Guidelines/>}/>
                    {/* <Route path='/social' element={<Social/>}/> */}
                    <Route path='/slide' element={<Slides/>}/>

                </Routes>
            </BrowserRouter>
        </>
    );
} export default Routing;