import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reduxThunk, { ThunkMiddleware } from "redux-thunk";
import userReducer from "./reducers/userReducer";
import authReducer from "./reducers/auth";
import { AppActions } from "./actions/actiontypes";

const rootReducer = combineReducers({
  userReducer,
  authReducer
});

const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

export type AppState = ReturnType<typeof rootReducer>

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk as ThunkMiddleware<AppState, AppActions>))
);
