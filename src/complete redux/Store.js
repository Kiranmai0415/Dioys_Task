import { createStore } from "redux";
import RootReducer from '../Redux/Reducers/index';



const Store = createStore(RootReducer);


export default Store;