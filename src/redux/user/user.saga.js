// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { all, call, put, takeLatest, delay } from "redux-saga/effects";
import { signInFailure, signInSuccess, signInProcessing, signUpProcessing, signUpFailure, getUserProcessing, getUserFailure, getUserSuccess, getOneUserProcessing, getOneUserSuccess, getOneUserFailure, updateRequiredUserProcessing, updateRequiredUserFailure, getServiceProcessing, getServiceSuccess, getServiceFailure, getCategoryServiceFailure, getCategoryServiceSuccess, getCategoryServiceProcessing } from "./user.action";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserActionTypes from "./user.type";
import api from "../../api/client";
import { Notification, NotificationDuration } from "../../components/antd/notification/notification.component";

import history from "../../history";
import { push } from 'react-router-redux';
import { userService } from "./UserService";

/*
  Saga là một middleware :
      - Được config đẻ bắt action và có các xử lý tương ứng.
      - Dispatch các action vào store thông qua các function mà lib cung cấp.
*/

// LOGIN 
const callAPILogin = async (loginInfo) => {
  try {
    const res = api.post("/api/Logins/Login", loginInfo.payload);
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
    Notification("info", "Please update your information", "top")
    yield delay(3000);
    let getAge = JSON.parse(localStorage.getItem("smso-user-logged"));
    let Age = '';
    if (getAge?.age) {
      Age = getAge.age;
    }
    if(Age == 0){
      window.location.href = '/users/form'
    } else {
      window.location.href = '/users'
    }
    yield put(signInSuccess(res.data));
    // history.push("/");
  } catch (error) {
    Notification("warning", "You have wrong email or password", "top")
    yield delay(2000);
    // history.push("/sign");

    window.location.href = '/sign'

    yield put(signInFailure(error));
  }
}
// Khai báo hàm để bắt action dựa trên action type. dựa vào action type để có xử lý tương ứng.
export function* onSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, login);
}

//REGISTER
const callAPIRegister = async (registerInfo) => {
  try {
    console.log(registerInfo)
    const res = api.post("/api/Users", registerInfo, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(res)
    return res;

  } catch (error) {
    throw new Error(error.message);
  }
}
export function* register(registerInfo) {
  try {
    yield put(signUpProcessing());
    yield delay(2000);
    const res = yield call(callAPIRegister, registerInfo.payload);
    console.log("res: ", res);

    NotificationDuration("success", "You have successfully registered", "top")
    yield delay(2000);
    window.location.href = '/sign'
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

//UPDATE REQUIRED USER
const callApiUpdateRequiredUser = async (InfoRequiredUser) => {
  try {
    console.log(InfoRequiredUser)
    const res = api.put("/api/Users", InfoRequiredUser, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
}
export function* updateRequiredUser(InfoRequiredUser) {
  try {
    yield put(updateRequiredUserProcessing());
    yield delay(2000);
    const res = yield call(callApiUpdateRequiredUser, InfoRequiredUser.payload);
    console.log("res: ", res);

    NotificationDuration("success", "You have successfully update information", "top")
    yield delay(2000);
    window.location.href = '/users'
  }
  catch (error) {
    NotificationDuration("warning", "You have failed to update information", "top")
    yield delay(2000);
    window.location.href = '/users/form'
    yield put(updateRequiredUserFailure(error));
  }
}
export function* onUpdateRequiredUserStart() {
  yield takeLatest(UserActionTypes.UPDATE_REQUIRED_USER_START, updateRequiredUser);
}

//GET ALL USER
const callAPIGetUser = async () => {
  try {
    const res = api.get("/api/Users");
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};
export function* getUser() {
  try {
    yield put(getUserProcessing());
    const res = yield call(callAPIGetUser);
    console.log("res: ", res);
    yield put(getUserSuccess(res.data));
    return res.data;
  } catch (error) {
    yield put(getUserFailure(error));
  }
}
export function* getUserStart() {
  yield takeLatest(UserActionTypes.GET_USER_START, getUser);
}

//GET ONE USER
const callAPIGetOneUser = async () => {
  try {
        let getID = JSON.parse(localStorage.getItem("smso-user-logged"));
        let userID = '';
        if (getID?.userId) {
            userID = getID.userId;
            console.log(userID);
        }
    const res = api.get(`/api/Users/${userID}`);
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};
export function* getOneUser() {
  try {
    yield put(getOneUserProcessing());
    const res = yield call(callAPIGetOneUser);
    console.log("res: ", res);
    yield put(getOneUserSuccess(res.data));
    return res.data;
  } catch (error) {
    yield put(getOneUserFailure(error));
  }
}
export function* getOneUserStart() {
  yield takeLatest(UserActionTypes.GET_ONE_USER_START, getOneUser);
}

//GET ALL CATEGORY SERVICE
const callAPIGetCategoryService = async () => {
  try {
    const res = api.get("/api/ServicesCategory");
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};
export function* getCategoryServices() {
  try {
    yield put(getCategoryServiceProcessing());
    const res = yield call(callAPIGetCategoryService);
    console.log("res: ", res);
    yield put(getCategoryServiceSuccess(res.data));
    return res.data;
  } catch (error) {
    yield put(getCategoryServiceFailure(error));
  }
}
export function* getCategoryServiceStart() {
  yield takeLatest(UserActionTypes.GET_CATEGORY_SERVICE_START, getCategoryServices);
}

//GET ALL SERVICE
const callAPIGetService = async () => {
  try {
    const res = api.get("/api/Services");
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};
export function* getServices() {
  try {
    yield put(getServiceProcessing());
    const res = yield call(callAPIGetService);
    console.log("res: ", res);
    yield put(getServiceSuccess(res.data));
    return res.data;
  } catch (error) {
    yield put(getServiceFailure(error));
  }
}
export function* getServiceStart() {
  yield takeLatest(UserActionTypes.GET_SERVICE_START, getServices);
}

//DELETE USER
export const deleteUser = async (id) => {
  try {
    await userService.deleteUser(id);
    // console.log("res: ", res);
    NotificationDuration("success", "You have delete user successfully", "top")
    setTimeout(() => {
      window.location.href = '/admin'
    }, 2000);
  } catch (error) {
    NotificationDuration("warning", "Error Delete", "top")
    setTimeout(() => {
      window.location.href = '/admin'
    }, 2000);
  }
}

//POST CATEGORY
export const postCategoryService = async (info) => {
  try {
    await userService.postCategoryService(info);
    // console.log("res: ", res);
    NotificationDuration("success", "You have add new category successfully", "top")
    setTimeout(() => {
      window.location.href = '/admin'
    }, 2000);
  } catch (error) {
    NotificationDuration("warning", "Cannot add new category", "top")
    setTimeout(() => {
      window.location.href = '/admin'
    }, 4000);
  }
}

//DELETE CATEGORY
export const deleteCategoryService = async (id) => {
  try {
    await userService.deleteCategoryService(id);
    // console.log("res: ", res);
    NotificationDuration("success", "You have delete category successfully", "top")
    setTimeout(() => {
      window.location.href = '/admin'
    }, 2000);
  } catch (error) {
    NotificationDuration("warning", "You need to delete the service before deleting the category", "top")
    setTimeout(() => {
      window.location.href = '/admin'
    }, 4000);
  }
}

//POST SERVICE
export const postService = async (info) => {
  try {
    await userService.postService(info);
    // console.log("res: ", res);
    NotificationDuration("success", "You have add new service successfully", "top")
    setTimeout(() => {
      window.location.href = '/admin'
    }, 2000);
  } catch (error) {
    NotificationDuration("warning", "Cannot add new service", "top")
    setTimeout(() => {
      window.location.href = '/admin'
    }, 4000);
  }
}
// REGISTER USER SERVICE
export const UserRegisterService = async (info) => {
  try {
    const res = await userService.userRegisterService(info);
    console.log("res: ", res);
    localStorage.setItem("user-resgister-service", JSON.stringify(res.data));
    NotificationDuration("success", "You have register service successfully", "top")
    setTimeout(() => {
      window.location.href = '/users'
    }, 2000);
  } catch (error) {
    NotificationDuration("warning", "Cannot register service", "top")
    setTimeout(() => {
      window.location.href = '/users'
    }, 4000);
  }
}


//DELETE SERVICE
export const deleteService = async (id) => {
  try {
    await userService.deleteService(id);
    // console.log("res: ", res);
    NotificationDuration("success", "You have delete service successfully", "top")
    setTimeout(() => {
      window.location.href = '/admin'
    }, 2000);
  } catch (error) {
    NotificationDuration("warning", "Error Delete", "top")
    setTimeout(() => {
      window.location.href = '/admin'
    }, 2000);
  }
}

//ADD FRIEND USER
export const AddFriendUser = async (info) => {
  try {
    // yield put(getUserProcessing());
    const res =  await userService.addFriend(info);
    console.log("res: ", res);
    NotificationDuration("success", "You have add friend successfully", "top")
    setTimeout(() => {
      window.location.href = '/users'
    }, 2000);
  } catch (error) {
    NotificationDuration("warning", "Error add friend", "top")
    setTimeout(() => {
      window.location.href = '/users'
    }, 2000);
  }
}



// Call hàm bắt action
export function* userSaga() {
  yield all([call(onSignInStart), call(onSignUpStart), call(getUserStart), call(getOneUserStart), call(onUpdateRequiredUserStart), call(getServiceStart), call(getCategoryServiceStart)]);
}
