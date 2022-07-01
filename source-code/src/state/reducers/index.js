import { combineReducers } from "redux";
import cartReducer from "../../Components/Cart/cartSlice";
import fetchProductReducer from "./fetchProductReducer";

const reducers = combineReducers({
    fetchedid: fetchProductReducer,
    cart: cartReducer
}) 

export default reducers;