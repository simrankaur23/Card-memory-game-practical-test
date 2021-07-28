import { combineReducers } from "redux";

import GetAllReducer from "../Reducers/gettAllDataReducer"
const rootReducer = combineReducers({
  
    GetAllReducer:GetAllReducer
});

export default rootReducer;
