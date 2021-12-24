import * as Actions from './constants';

export function updateMyProfile({dataUpdate, reloadUpdate = false}) {
  return {
    type: Actions.UPDATE_PROFILE,
    dataUpdate,
    reloadUpdate,
  };
}
export function updateMyProfileNoOTP({dataUpdate, reloadUpdate = false}) {
  return {
    type: Actions.UPDATE_PROFILE_NO_OTP,
    dataUpdate,
    reloadUpdate,
  };
}
export function updateMyProfileNew({dataUpdate}) {
  return {
    type: Actions.UPDATE_PROFILE_NEW,
    dataUpdate,
  };
}
export function getMyProfile({dataUpdate, booking = false}) {
  return {
    type: Actions.GET_PROFILE,
    dataUpdate,
    booking,
  };
}
export function logOutMyProfile() {
  return {
    type: Actions.LOG_OUT_PROFILE,
  };
}
