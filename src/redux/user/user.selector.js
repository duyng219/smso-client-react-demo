import { createSelector } from "reselect";

// Khai báo funtion để lấy một state trong store.
// state.user là lấy state của user trong store. user chính là key được khai báo trong function combineReducers của file root-reducer.js
const selectUser = (state) => state.user;

// Tiếp tục lấy những thông tin cần lấy của state user. (User có thể có nhiều thông tin, nhưng chỉ cần lấy một thông tin cụ thể nào đó )
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
export const selectLoginStatus = createSelector(
  [selectUser],
  (user) => user.status
);
export const selectRegisterStatus = createSelector(
  [selectUser],
  (user) => user.status
);

export const selectAllUser = createSelector(
  [selectUser],
  (user) => user.allUser
);

export const selectAllFriend = createSelector(
  [selectUser],
  (user) => user.allFriends
);

export const selectOneUser = createSelector(
  [selectUser],
  (user) => user.oneUser
);

export const selectCategoryServices = createSelector(
  [selectUser],
  (user) => user.categoryServiceUser
);

export const selectServices = createSelector(
  [selectUser],
  (user) => user.serviceUser
);

export const selectUpdateRequiredUserStatus = createSelector(
  [selectUser],
  (user) => user.status
);