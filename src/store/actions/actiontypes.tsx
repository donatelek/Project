import { Auth, UserData } from "../types/Types";

export const FETCH_USER = "FETCH_USER";
export const USER_LOGIN = "USER_LOGIN";
export const USER_REGISTER = "USER_REGISTER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";
export const LOGOUT_USER = "LOGOUT_USER";

export interface SetFetchUserAction {
  type: typeof FETCH_USER;
  data: Auth;
}
export interface SetUserLoginAction {
  type: typeof USER_LOGIN;
  data: Auth;
}
export interface SetUserRegisterAction {
  type: typeof USER_REGISTER;
  data: Auth;
}
export interface SetLoginUserSuccessAction {
  type: typeof LOGIN_USER_SUCCESS;
  uid: Auth[];
}
export interface SetLoginUserFailAction {
  type: typeof LOGIN_USER_FAIL;
  error: Auth;
}
export interface SetLogoutUserAction {
  type: typeof LOGOUT_USER;
}

export type AuthActionTypes =
  | SetFetchUserAction
  | SetUserLoginAction
  | SetUserRegisterAction
  | SetLoginUserSuccessAction
  | SetLoginUserFailAction
  | SetLogoutUserAction;

export type AppActions = AuthActionTypes;
