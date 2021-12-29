import * as Actions from "./constants";

const initConfigs = {
  requireLogin: true,
  toggleSidebar: true,
};

export const initState = {
  isLoading: false,
  user: undefined,
  access_token: undefined,
};

/**
 * Common reducer
 * @param state
 * @param action
 * @returns {*}
 */
function authReducer(state = initState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case Actions.LOG_IN:
      return {
        ...state,
        isLoading: true,
      };
    case Actions.LOG_OUT:
      console.log("vao logout");
      return {
        ...state,
        user: undefined,
        access_token: undefined,
      };
    case Actions.LOG_IN_SUCCESS:
      console.log("vao login success", payload);
      return {
        ...state,
        isLoading: false,
        user: payload.userInfo,
        access_token: payload.access_token,
      };
    case Actions.LOG_IN_ERROR:
      return {
        ...state,
        isLoading: false,
        user: undefined,
      };
    default:
      return state;
  }
}

export default authReducer;
