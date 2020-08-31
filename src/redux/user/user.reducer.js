// {
//     type:
//     payload:

// }
//1
//const { userReducer } = require("react");

import {UserActionTypes} from './user.types';

const INITIAL_STATE = {
    currentUser: null
};
//below code works like if else
const userReducer=(state =INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:action.payload
            };

        default:
            return state;
    }
};
export default userReducer;
  