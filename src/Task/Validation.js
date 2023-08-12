import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import './Errors.css';



const Validation = () => {

    const [input, setInput] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState({});

    const handleSubmit = () => {
        const newErrors = {};
        // empty input fields
        if (!input) {
            newErrors.input = "This field is Required"
        }

        // email validation
        if (!email) {
            newErrors.email = 'This field is Required';
        } else if (!/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)) {
            newErrors.email = 'Invalid email format'; // Fix: Set the error for invalid email format
        } else {
            newErrors.email = ''; // No error when email format is valid
        }

        // number validation
        if (!number) {
            newErrors.number = 'This field is Required';
        } else if (!/^[0-9]*\.?[0-9]*$/.test(number)) {
            newErrors.number = 'Invalid number format'; // Fix: Set the error for invalid email format
        } else {
            newErrors.number = ''; // No error when email format is valid
        }

        // password validation
        if (!password) {
            newErrors.password = "This field is required";
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*#&])[A-Za-z\d@$!%^*#&]{8,64}$/.test(password)) {
            newErrors.password = "Invalid password format";
        } else {
            newErrors.password = '';
        }
        setError(newErrors)
        console.log("submited");
        
        // clearing the invalid stmts
        if (!newErrors.input && !newErrors.email && !newErrors.number && !newErrors.password) {
            setError({});
        }
    }
    return (
        <>
            <div>
                <div>
                    <label>Input : </label>
                    <input
                        type='text'
                        value={input}
                        className={error.input ? 'error' : ''}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <div>
                        {error.input && <span className='error-message'>{error.input}</span>}
                    </div>
                </div>
                <div>
                    <label>Email : </label>
                    <input
                        type='email'
                        value={email}
                        className={error.email ? 'error' : ''}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div>
                        {error.email && <span className='error-message'>{error.email}</span>}
                    </div>
                </div>
                <div>
                    <label>Number : </label>
                    <input
                        type='text'
                        value={number}
                        className={error.number ? 'error' : ''}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <div>
                        {error.number && <span className='error-message'>{error.number}</span>}
                    </div>
                </div>
                <div>
                    <label>Password : </label>
                    <input
                        type='password'
                        value={password}
                        className={error.password ? 'error' : ''}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div>
                        {error.password && <span className='error-message'>{error.password}</span>}
                    </div>
                </div>


                <Button onClick={handleSubmit} className='btn btn-success'>Submit</Button>

            </div>
        </>

    )
}

export default Validation