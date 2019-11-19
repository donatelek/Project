import heroku from "../../api/heroku";
import { FETCH_USER, USER_LOGIN, USER_REGISTER } from "./actiontypes";

export function fetchUsers(data) {
  return {
    type: FETCH_USER,
    data
  };
}

export function fetchLogin(data) {
  return {
    type: USER_LOGIN,
    data
  };
}

export function fetchRegister(data) {
  return {
    type: USER_REGISTER,
    data
  };
}

export const userValidationLogin = (email, password) => dispatch => {
  console.log(email);
  heroku.post("/login", { email, password }).then(data => {
    console.log(data);
  });
};

export const userValidationRegister = (email, password) => dispatch => {
  heroku.post("/register", { email, password }).then(data => {
    console.log(data);
  });
};
