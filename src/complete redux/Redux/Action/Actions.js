export const ADD_USER = 'Add_User';
export const EDIT_USER = 'Edit_User';
export const DELETE_USER = 'Delete_User';
export const SET_CURRENT_PAGE = 'Set_Current_Page';
export const SET_POST_PAGE = 'Set_Post_Page';

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
export const SearchingUser = (Result) => {
    return {
        type: 'Search_User',
        payload: Result,
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: 'Set_Current_Page',
        payload: currentPage,
    };
};

export const setPostPage = (postPage) => {
    return {
        type: 'Set_Post_Page',
        payload: postPage,
    };
};

