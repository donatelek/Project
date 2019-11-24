import { Auth } from '../types/Types'

export const FETCH_USER = "FETCH_USER";
export const USER_LOGIN = "USER_LOGIN";
export const USER_REGISTER = "USER_REGISTER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS"
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL"
export const LOGOUT_USER = "LOGOUT_USER"

export interface SetFetchUserAction {
    type: typeof SET_FETCH_USER;
    user: Auth;
}
export interface SetUserLoginAction {
    type: typeof SET_USER_LOGIN;
    user: Auth;
}
export interface SetUserRegisterAction {
    type: typeof SET_USER_REGISTER;
    user: Auth;
}
export interface SetLoginUserSuccessAction {
    type: typeof SET_LOGIN_USER_SUCCESS;
    user: Auth;
}
export interface SetLoginUserFailAction {
    type: typeof SET_LOGIN_USER_FAIL;
    user: Auth;
}
export interface SetLogoutUserAction {
    type: typeof SET_LOGOUT_USER;
    user: Auth;
}

export type AuthActionTypes = SetFetchUserAction | SetUserLoginAction SetUserRegisterAction | SetLoginUserSuccessAction | SetLoginUserFailAction | SetLogoutUserAction

export type AppActions = AuthActionTypes