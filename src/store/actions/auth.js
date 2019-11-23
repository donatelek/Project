import { firebase, googleAuthProvider } from "../../firebase/firebase";
import { CREATE_USER_SUCCESS, CREATE_USER_FAIL } from "./actiontypes";

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

export const createUserSuccess = resp => {
  return {
    type: CREATE_USER_SUCCESS,
    user: resp
  };
};
export const createUserFail = error => {
  return {
    type: CREATE_USER_FAIL,
    error
  };
};

export const customRegister = (email, password) => dispatch => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(resp => {
      return dispatch(createUserSuccess(resp));
    })
    .catch(error => dispatch(createUserFail(error)));
};

export const customLogin = (email, password) => dispatch => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(resp => console.log(resp))
    .catch(error => console.log(error));
};
