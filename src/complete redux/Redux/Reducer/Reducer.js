const initialState = {
    users: [
        {
            firstname : "kiranmai",
            lastname : "Ubbani",
            email : "ubbanirubenkiranmai@gmail.com",
            number: 123456789,
            address: "hyderabad",
        },
        {
            firstname : "Kranthi",
            lastname : "Ubbani",
            email : "ubbanirubenkiranmai@gmail.com",
            number: 123456789,
            address: "hyderabad",
        },
        {
            firstname : "John",
            lastname : "Ubbani",
            email : "ubbanirubenkiranmai@gmail.com",
            number: 123456789,
            address: "hyderabad",
        },
    ]
};
 
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Add_User':
        return{
            ...state,
            users: [...state.users, action.payload],
        };
        default:
            return state;
    }
}
export default Reducer;