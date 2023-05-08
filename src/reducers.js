import { USER_DETAILS,PASSWORD_DETAILS,ID,TOKEN } from "./action";

import { combineReducers } from "redux";



let initialState = {
    username:"",
    password:"",
    id:"",
    token:""
}



const reducer = (state=initialState,action)=>{
    switch (action.type) {
      case USER_DETAILS:
        return {
          ...state,
          username: action.payload,
        };
      case PASSWORD_DETAILS:
        return {
          ...state,
          password: action.payload,
        };
      case ID:
        return {
          ...state,
          id: action.payload,
        };
      case TOKEN:
        return {
          ...state,
          token: action.payload,
        };
        default:
            return state
    }

   
}

console.log(initialState)

const rootReducer = combineReducers({
  data: reducer
  
});

export default rootReducer 