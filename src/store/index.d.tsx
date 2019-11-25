import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
// import userReducer from "./reducers/userReducer";
import authReducer from "./reducers/auth";
// import { AppActions } from "./actions/actiontypes";

const rootReducer = combineReducers({
  authReducer
});
export type AppState = ReturnType<typeof rootReducer>;

const composeEnhancers =
  (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);
