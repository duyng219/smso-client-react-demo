import UserActionTypes from "./user.type";

//LOGIN USER
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

//REGISTER USER
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

//GET ALL USER
export const getUserStart = () => ({
  type: UserActionTypes.GET_USER_START,
});
export const getUserSuccess = (allUser) => (
  {
  type: UserActionTypes.GET_USER_SUCCESS,
  payload: allUser,
});
export const getUserProcessing = () => ({
  type: UserActionTypes.GET_USER_PROCESSING,
  payload: "",
});
export const getUserFailure = (err) => ({
  type: UserActionTypes.GET_USER_FAILURE,
  payload: err,
});

//GET ONE USER
export const getOneUserStart = () => ({
  type: UserActionTypes.GET_ONE_USER_START,
});
export const getOneUserSuccess = (oneUser) => (
  {
  type: UserActionTypes.GET_ONE_USER_SUCCESS,
  payload: oneUser,
});
export const getOneUserProcessing = () => ({
  type: UserActionTypes.GET_ONE_USER_PROCESSING,
  payload: "",
});
export const getOneUserFailure = (err) => ({
  type: UserActionTypes.GET_ONE_USER_FAILURE,
  payload: err,
});

//UPDATE REQUIRED USER
export const updateRequiredUserStart = (InfoRequiredUser) => ({
  type: UserActionTypes.UPDATE_REQUIRED_USER_START,
  payload: InfoRequiredUser,
});
export const updateRequiredUserSuccess = (InfoRequiredUser) => (
  {
  type: UserActionTypes.UPDATE_REQUIRED_USER_SUCCESS,
  payload: InfoRequiredUser,
});
export const updateRequiredUserProcessing = () => ({
  type: UserActionTypes.UPDATE_REQUIRED_USER_PROCESSING,
  payload: "",
});
export const updateRequiredUserFailure = (err) => ({
  type: UserActionTypes.UPDATE_REQUIRED_USER_FAILURE,
  payload: err,
});

//GET SERVICE
export const getServiceStart = () => ({
  type: UserActionTypes.GET_SERVICE_START,
});
export const getServiceSuccess = (serviceUser) => (
  {
  type: UserActionTypes.GET_SERVICE_SUCCESS,
  payload: serviceUser,
});
export const getServiceProcessing = () => ({
  type: UserActionTypes.GET_SERVICE_PROCESSING,
  payload: "",
});
export const getServiceFailure = (err) => ({
  type: UserActionTypes.GET_SERVICE_FAILURE,
  payload: err,
});

//GET SERVICE
export const getCategoryServiceStart = () => ({
  type: UserActionTypes.GET_CATEGORY_SERVICE_START,
});
export const getCategoryServiceSuccess = (categoryServiceUser) => (
  {
  type: UserActionTypes.GET_CATEGORY_SERVICE_SUCCESS,
  payload: categoryServiceUser,
});
export const getCategoryServiceProcessing = () => ({
  type: UserActionTypes.GET_CATEGORY_SERVICE_PROCESSING,
  payload: "",
});
export const getCategoryServiceFailure = (err) => ({
  type: UserActionTypes.GET_CATEGORY_SERVICE_FAILURE,
  payload: err,
});

