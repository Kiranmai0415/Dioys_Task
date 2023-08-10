export const ADD_USER = 'Add_User';
export const EDIT_USER = 'Edit_User';
export const DELETE_USER = 'Delete_User';

export const addingUser = (user) => {
    return {
        type: 'Add_User',
        payload: user,
    };
};
export const editingUser = (userIndex, updatedUser) => {
    return {
        type: 'Edit_User',
        payload: {
            userIndex,
            updatedUser,
        },
    };
};
export const deletingUser = (userId) => {
    return {
        type: 'Delete_User',
        payload: {
            userId,
        },
    };
};

