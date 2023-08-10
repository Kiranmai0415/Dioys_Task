import { ADD_USER, EDIT_USER, DELETE_USER } from '../Action/Actions';

const initialState = {
    users: [

        {
            // id: '1',
            name: "rahul",
            email: "rahul@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '2',
            name: "rajshekar",
            email: "rajshekar@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '3',
            name: "charan",
            email: "charan@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '4',
            name: "satish",
            email: "satish@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '5',
            name: "vinay",
            email: "vinay@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '6',
            name: "dharanesh",
            email: "dharanesh@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '7',
            name: "venky",
            email: "venky@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '8',
            name: "shankar",
            email: "shankar@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '9',
            name: "indraja",
            email: "indraja@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '10',
            name: "padmaja",
            email: "padmaja@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '11',
            name: "rahul",
            email: "rahul@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '12',
            name: "rajshekar",
            email: "rajshekar@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '13',
            name: "charan",
            email: "charan@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '14',
            name: "satish",
            email: "satish@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '15',
            name: "vinay",
            email: "vinay@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '16',
            name: "dharanesh",
            email: "dharanesh@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '17',
            name: "venky",
            email: "venky@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '18',
            name: "shankar",
            email: "shankar@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '19',
            name: "indraja",
            email: "indraja@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '20',
            name: "padmaja",
            email: "padmaja@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '21',
            name: "padmaja",
            email: "padmaja@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '1',
            name: "rahul",
            email: "rahul@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '2',
            name: "rajshekar",
            email: "rajshekar@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '3',
            name: "charan",
            email: "charan@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '4',
            name: "satish",
            email: "satish@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '5',
            name: "vinay",
            email: "vinay@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '6',
            name: "dharanesh",
            email: "dharanesh@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '7',
            name: "venky",
            email: "venky@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '8',
            name: "shankar",
            email: "shankar@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '9',
            name: "indraja",
            email: "indraja@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '10',
            name: "padmaja",
            email: "padmaja@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '11',
            name: "rahul",
            email: "rahul@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '12',
            name: "rajshekar",
            email: "rajshekar@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '13',
            name: "charan",
            email: "charan@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '14',
            name: "satish",
            email: "satish@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '15',
            name: "vinay",
            email: "vinay@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '16',
            name: "dharanesh",
            email: "dharanesh@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '17',
            name: "venky",
            email: "venky@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '18',
            name: "shankar",
            email: "shankar@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '19',
            name: "indraja",
            email: "indraja@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '20',
            name: "padmaja",
            email: "padmaja@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },
        {
            // id: '21',
            name: "padmaja",
            email: "padmaja@gmail.com",
            number:1234567890,
            designation: 'UI developer',
            reporting: 'Katehunston'

        },

    ]

};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Add_User':
            return {
                ...state,
                users: [...state.users, action.payload],
            };
            case 'Edit_User':
                const { userIndex, updatedUser } = action.payload;
                return {
                    ...state,
                    users: state.users.map((user, index) =>
                        index === userIndex ? { ...user, ...updatedUser } : user
                    ),
                };
                case 'Delete_User' :
                    case 'Delete_User':
                        const { userId } = action.payload;
                        return {
                            ...state,
                            users: state.users.filter((user, index) => index !== userId),
                        };
                        
               
        default:
            return state;
    }
}
export default Reducer;

