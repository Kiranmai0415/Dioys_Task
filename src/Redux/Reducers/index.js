import { combineReducers } from "redux";
import UsersReducer from "./UserReducer";


const RootReducer = combineReducers({
    users: UsersReducer,
});

export default RootReducer;