import React, { useEffect, useState } from 'react'
import { addingUser } from '../Redux/Action/Actions';
import { useDispatch } from 'react-redux';

const AddEdit = () => {

  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [address, setAddress] = useState();

  const dispatch = useDispatch();

  const handleSave = () => {
    const newUser = {

      firstname, lastname, email, number, address,
    };

    dispatch(addingUser(newUser));
    setFirstName('');
    setLastName('');
    setEmail('');
    setNumber('');
    setAddress('');

    alert('Do you want to add the details');
    console.log('newUser : ', newUser);
   
  };
  useEffect(() => {
    console.log('First Name:', firstname);
    console.log('Last Name:', lastname);
    console.log('Email:', email);
    console.log('Number:', number);
    console.log('Address:', address);
  }, [firstname, lastname, email, number, address]);



  return (
    <>

      <div>
        <form>
          <label>First Name</label>
          <input
            type="text"
            placeholder='enter your First Name '
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>Last Name</label>
          <input type='text' placeholder='enter your Last Name ' value={lastname} onChange={(e) => setLastName(e.target.value)} />
          <label>Email </label>
          <input type='email' placeholder='enter your Email ' value={email} onChange={(e) => setEmail(e.target.value)} />
          <label> Number</label>
          <input type='number' placeholder='enter your Phone Number ' value={number} onChange={(e) => setNumber(e.target.value)} />
          <label> Address</label>
          <input type='text' placeholder='enter your Address ' value={address} onChange={(e) => setAddress(e.target.value)} />

          <div>
            <button onClick={handleSave}>Save</button>
          </div>
        </form>



      </div>
    </>
  )
}

export default AddEdit
