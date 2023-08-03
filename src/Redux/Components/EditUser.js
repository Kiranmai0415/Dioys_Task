import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editUser } from '../Action/UsersAction';

const EditUser = ({ userId }) => {
  const user = useSelector((state) =>
    state.users.users.find((user) => user.id === userId)
  );

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();

  const handleEditUser = () => {
    // const editedUser = {
    //   ...user,
    // //   name,
    // //   email,
    // };
    // dispatch(editUser);
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
      <button onClick={handleEditUser}>Save Changes</button>
    </div>
  );
};

export default EditUser;
