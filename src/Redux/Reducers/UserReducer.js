const initialState = {
    users: [],
  };
  
  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      case 'EDIT_USER':
        const updatedUsers = state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        );
        return {
          ...state,
        //   users: updatedUsers,
        };
      default:
        return state;
    }
  };
  
  export default usersReducer;
  

