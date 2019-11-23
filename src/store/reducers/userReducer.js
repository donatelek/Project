import {
  FETCH_USER,
  USER_LOGIN,
  USER_REGISTER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL
} from "../actions/actiontypes";

const initialState = {
  data: [],
  registered: []
};

export const userReducer = (state = initialState, action) => {
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
    case CREATE_USER_SUCCESS:
      const {
        user: { uid: userId }
      } = action;
      return { ...state, loggedIn: true, userId };
    case CREATE_USER_FAIL:
      const { error } = action;
      return { ...state, loggedIn: false, error };
    default:
      return state;
  }
};

export default userReducer;
