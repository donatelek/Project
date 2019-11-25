import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  AuthActionTypes
} from "../actions/actiontypes";
import { Auth } from "../types/Types";

interface AuthReducer {
  uid: Auth;
}

export default (state = {}, action: AuthActionTypes) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        uid: action.uid
      };
    case LOGOUT_USER:
      return {};
    case LOGIN_USER_FAIL:
      const { error } = action;
      return { ...state, loggedIn: false, error };

    default:
      return state;
  }
};
