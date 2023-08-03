import React from 'react';
import { useSelector } from 'react-redux';
import AddUser from './AddUser';
import EditUser from './EditUser';


const TableSet = () => {
    const users = useSelector((state) => state.users.users);

    return (
      <div>
        <h1>User List</h1>
        <AddUser />
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}{' '}
              {/* <EditUser userId={user.id} /> */}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default TableSet;
