import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Task from '../Task/Task';

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/task" element={<Task />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Routing;