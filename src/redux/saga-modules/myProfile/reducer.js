import * as Actions from "./constants";

const initConfigs = {
  requireLogin: true,
  toggleSidebar: true,
};

export const initState = {
  isLoading: false,
  myProfile: {},
};

/**
 * Common reducer
 * @param state
 * @param action
 * @returns {*}
 */
function myProfileReducer(state = initState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case Actions.UPDATE_PROFILE:
      return {
        ...state,
        isLoading: true,
      };
    case Actions.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        myProfile: payload.dataProfile,
      };
    case Actions.UPDATE_PROFILE_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case Actions.UPDATE_PROFILE_NEW:
      return {
        ...state,
        isLoading: true,
      };
    case Actions.UPDATE_PROFILE_NEW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        myProfile: payload.dataProfile,
      };
    case Actions.UPDATE_PROFILE_NEW_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case Actions.UPDATE_PROFILE_NO_OTP:
      return {
        ...state,
        isLoading: true,
      };
    case Actions.UPDATE_PROFILE_NO_OTP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        myProfile: payload.dataProfile,
      };
    case Actions.UPDATE_PROFILE_NO_OTP_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case Actions.GET_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        myProfile: payload.dataProfile,
      };
    case Actions.LOG_OUT_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        myProfile: null,
      };
    default:
      return state;
  }
}

export default myProfileReducer;
