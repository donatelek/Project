import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App, { history } from "./components/App";
import store from "./store/index.js";
import { loginUserSuccess, logoutUser } from "./store/actions/auth";
import { firebase } from "./firebase/firebase";

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(loginUserSuccess(user.uid));
    console.log(user.uid);
    renderApp();
    if (history.location.pathname === "/") {
      history.push("/user");
    }
  } else {
    store.dispatch(logoutUser());
    renderApp();
    history.push("/");
  }
});
