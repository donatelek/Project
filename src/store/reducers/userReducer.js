import { FETCH_USER, USER_LOGIN, USER_REGISTER } from "../actions/actiontypes";

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
    default:
      return state;
  }
};

export default userReducer;
