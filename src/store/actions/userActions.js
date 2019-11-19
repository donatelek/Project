import { FETCH_USER } from "./actiontypes";
import { Dispatch } from "redux";

export function fetchUsers(data) {
  return {
    type: FETCH_USER,
    data
  };
}
