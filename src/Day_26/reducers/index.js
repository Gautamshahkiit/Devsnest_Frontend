import counterReducer from "./counterReducer";

import {combineReducers} from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
})

export default rootReducer;