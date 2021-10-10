import { combineReducers } from "redux";

import loginReducer from './Login/login.reducer'
import customerReducer from './Customer/Customer.reducer'

const rootReducer = combineReducers({

    login: loginReducer,
    customer : customerReducer


})

export default rootReducer;