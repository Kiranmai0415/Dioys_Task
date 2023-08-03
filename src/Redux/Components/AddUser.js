import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../Action/UsersAction';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleAddUser = () => {
    const newUser = {
    //   id: new Date().getTime(), // You can use a proper ID generator in a real app
      name,
      email,
    };
    dispatch(addUser(newUser));
    setName('');
    setEmail('');
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default AddUser;
