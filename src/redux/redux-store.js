import {  combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers ({
    
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbarPage: navbarReducer, 
    usersPage: usersReducer,
    auth: authReducer
})
let store = createStore(reducers);
//console.log(reducers)
export default store;

window.store = store;