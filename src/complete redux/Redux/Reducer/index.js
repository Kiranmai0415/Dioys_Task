import { combineReducers } from "redux";
import Reducer from "../../complete redux/Redux/Reducer/Reducer";


const RootReducer = combineReducers({
    users: Reducer,
});

export default RootReducer;