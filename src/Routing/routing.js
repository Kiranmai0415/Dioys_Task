import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Task from '../Task/Task';
import TableData from '../Task/Complete_Task';

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/task" element={<Task />} />
                <Route path="/table" element={<TableData />} />
            </Routes>
        </BrowserRouter>
    );
    
}
export default Routing;