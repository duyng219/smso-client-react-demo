// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { all, call, put, takeLatest, delay } from "redux-saga/effects";
import { signInFailure, signInSuccess, signInProcessing, signUpProcessing, signUpFailure } from "./user.action";
import UserActionTypes from "./user.type";
import api from "../../api/client";
import { Notification, NotificationDuration } from "../../components/antd/notification/notification.component";

import history from "../../history";
import { push } from 'react-router-redux'; 

/*
  Saga là một middleware :
      - Được config đẻ bắt action và có các xử lý tương ứng.
      - Dispatch các action vào store thông qua các function mà lib cung cấp.
*/

const callAPILogin = async (loginInfo) => {
  try {
    const res = api.post("/api/User/Login", loginInfo.payload);
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};
export function* login(loginInfo) {
  try {
    yield put(signInProcessing());
    const res = yield call(callAPILogin, loginInfo);
    console.log("res: ", res);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("refreshToken", res.data.requestToken);
    localStorage.setItem("smso-user-logged", JSON.stringify(res.data));
    Notification("success", "Logged in successfully", "top")
    yield delay(2000);
    window.location.href = '/'
    yield put(signInSuccess(res.data));
    // history.push("/");
  } catch (error) {
    Notification("warning", "You have wrong email or password", "top")
    yield delay(2000);
    window.location.href = '/sign'

    yield put(signInFailure(error));
  }
}
// Khai báo hàm để bắt action dựa trên action type. dựa vào action type để có xử lý tương ứng.
export function* onSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, login);
}

const callAPIRegister = async (registerInfo) => {
  try {
    console.log(registerInfo)
    const res = api.post("/api/User/Register", registerInfo, {headers: {
      "Content-Type": "application/json"}
  });
    console.log(res)
    return res;

  } catch (error) {
      throw new Error(error.message);
  }
}

export function* register (registerInfo) {
  try {
    yield put(signUpProcessing());
    yield delay(2000);
    const res = yield call(callAPIRegister, registerInfo.payload);
    console.log("res: ", res);
    
    NotificationDuration("success", "You have successfully registered", "top")
    window.location.href = '/'
  }
  catch (error) {
    NotificationDuration("warning", "You have failed to register", "top")
    yield delay(2000);
    window.location.href = '/sign'
    yield put(signUpFailure(error));
  }
}
export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, register);
}


// Call hàm bắt action
export function* userSaga() {
  yield all([call(onSignInStart),call(onSignUpStart)]);
}
