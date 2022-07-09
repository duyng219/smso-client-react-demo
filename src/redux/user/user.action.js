import UserActionTypes from "./user.type";

export const signInStart = (loginInfo) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: loginInfo,
});
export const signInProcessing = () => ({
  type: UserActionTypes.EMAIL_SIGN_IN_PROCESSING,
  payload: "",
});

export const signInSuccess = (userInfo) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: userInfo,
});

export const signInFailure = (err) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: err,
});


export const signUpStart = (registerInfo) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: registerInfo,
});
export const signUpProcessing = () => ({
  type: UserActionTypes.SIGN_UP_PROCESSING,
  payload: "",
});

export const signUpSuccess = (registerInfo) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: registerInfo,
});

export const signUpFailure = (err) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: err,
});


