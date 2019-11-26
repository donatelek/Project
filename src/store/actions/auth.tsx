import { firebase, googleAuthProvider } from "../../firebase/firebase";
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  AuthActionTypes
} from "./actiontypes";
import { Auth, UserData } from "../types/Types";
import { AppActions } from "./actiontypes";
import { Dispatch } from "redux";

// export const startLogin = (): AppActions => {
//   return () => {
//     return firebase.auth().signInWithPopup(googleAuthProvider);
//   };
// };

// export const startLogout = (): AppActions => {
//   return () => {
//     return firebase.auth().signOut();
//   };
// };

// export const loginUserSuccess = (uid: UserData): AppActions => {
//   return {
//     type: LOGIN_USER_SUCCESS,
//     uid
//   };
// };

//Tu chyba jest problem w tym ze ta funkcja jest uzywana 2 razy tutaj w customRegister i w index onAuthstatechanged i tu ten element uid to jest firebase.auth.UserCredential a w indexie jako string narazie dalem any
export const loginUserSuccess = (uid: any): AppActions => {
  return {
    type: LOGIN_USER_SUCCESS,
    uid
  };
};

export const logoutUser = (): AppActions => ({
  type: LOGOUT_USER
});

export const loginUserFail = (error: Auth): AppActions => {
  return {
    type: LOGIN_USER_FAIL,
    error
  };
};

export const customRegister = (email: string, password: string) => (
  dispatch: Dispatch<AuthActionTypes>
) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(resp => {
      return dispatch(loginUserSuccess(resp));
    })
    .catch(error => dispatch(loginUserFail(error)));
};

export const customLogin = (email: string, password: string) => (
  dispatch: Dispatch<AuthActionTypes>
) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(resp => console.log(resp))
    .catch(error => console.log(error));
};
