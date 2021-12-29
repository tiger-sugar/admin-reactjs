import * as Actions from "./constants";

export function loginSuccess({ dataLogin }) {
  return {
    type: Actions.LOG_IN_SUCCESS,
    payload: dataLogin,
  };
}

export function logout() {
  return {
    type: Actions.LOG_OUT,
  };
}
