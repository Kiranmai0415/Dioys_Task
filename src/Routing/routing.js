import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TableData from '../Task/Task';

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/task" element={<TableData />} />
            </Routes>
        </BrowserRouter>
    );
    
}
export default Routing;