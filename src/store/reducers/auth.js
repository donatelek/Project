import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER
} from "../actions/actiontypes";

export default (state = {}, action) => {
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
