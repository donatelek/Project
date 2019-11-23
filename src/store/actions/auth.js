import { firebase, googleAuthProvider } from "../../firebase/firebase";
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER
} from "./actiontypes";

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export const loginUserSuccess = uid => {
  return {
    type: LOGIN_USER_SUCCESS,
    uid
  };
};

export const logoutUser = () => ({
  type: LOGOUT_USER
});

export const loginUserFail = error => {
  return {
    type: LOGIN_USER_FAIL,
    error
  };
};

export const customRegister = (email, password) => dispatch => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(resp => {
      return dispatch(loginUserSuccess(resp));
    })
    .catch(error => dispatch(loginUserFail(error)));
};

export const customLogin = (email, password) => dispatch => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(resp => console.log(resp))
    .catch(error => console.log(error));
};
