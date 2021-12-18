import { combineReducers } from "redux";
import userReducer from './model/user/reducer';

export default combineReducers({
    user: userReducer
})
