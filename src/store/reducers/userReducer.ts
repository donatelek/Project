import { AuthActionTypes } from './../actions/actiontypes';
import {
  FETCH_USER,
  USER_LOGIN,
  USER_REGISTER
  // LOGIN_USER_SUCCESS,
  // LOGIN_USER_FAIL
} from "../actions/actiontypes";

const initialState = {
  data: [],
  registered: []
};

export const userReducer = (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        data: action.data
      };
    case USER_LOGIN:
      return {
        ...state,
        data: action.data
      };
    case USER_REGISTER:
      return {
        registered: action.data
      };
    // case LOGIN_USER_SUCCESS:
    //   const {
    //     user: { uid: userId }
    //   } = action;
    //   return { ...state, loggedIn: true, userId };
    // case LOGIN_USER_FAIL:
    //   const { error } = action;
    //   return { ...state, loggedIn: false, error };
    default:
      return state;
  }
};

export default userReducer;
