import { FETCH_USER } from "../actions/actiontypes";

const initialState = {
  data: []
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};

export default userReducer;
