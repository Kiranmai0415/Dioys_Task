import { combineReducers } from "redux";
import UsersReducer from "./UserReducer";
import Reducer from "../../complete redux/basics/ReduxFiles/Reducer/Reducer";


const RootReducer = combineReducers({
    users: UsersReducer,
    users: Reducer,
});

export default RootReducer;