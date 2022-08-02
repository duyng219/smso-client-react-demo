import UserActionTypes from "./user.type";

/*
    Reducer bao gồm: 
      - Một state cụ thể nào đó cần lưu trong store (một state chung được combine từ nhiều state của nhiều reducer).
      - Nhận action: dựa vào action type, và data nhận vào từ action để thay đổi state cụ thể này.
*/
const INITIAL_STATE = {
  allFriends: [],
  allUsers: [],
  oneUser: [],
  serviceUser: [],
  categoryServiceUser: [],
  currentUser: {
    token: "",
    requestToken: "",
    userName: "",
    roles: [],
  },
  err: null,
  status: "",
};

const userReducer = (state = INITIAL_STATE, action) => {

  console.log(action.payload);
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        status: UserActionTypes.SIGN_IN_SUCCESS
      };
    case UserActionTypes.EMAIL_SIGN_IN_PROCESSING:
      return {
        ...state,
        status: UserActionTypes.EMAIL_SIGN_IN_PROCESSING,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        currentUser: null,
        err: action.payload,
      };


      case UserActionTypes.GET_USER_SUCCESS:
        return {
          ...state,
          allUsers: action.payload,
        };

      case UserActionTypes.GET_FRIEND_SUCCESS:
        return {
          ...state,
          allFriends: action.payload,
        }
    
      case UserActionTypes.GET_ONE_USER_SUCCESS:
        return {
          ...state,
          oneUser: action.payload,
        };
    
      case UserActionTypes.GET_SERVICE_SUCCESS:
        return {
          ...state,
          serviceUser: action.payload,
        };

      case UserActionTypes.GET_CATEGORY_SERVICE_SUCCESS:
          return {
            ...state,
            categoryServiceUser: action.payload,
          };
      
      case UserActionTypes.UPDATE_REQUIRED_USER_SUCCESS:
          return {
            ...state,
            status: UserActionTypes.UPDATE_REQUIRED_USER_SUCCESS
          };
      case UserActionTypes.UPDATE_REQUIRED_USER_PROCESSING:
          return {
            ...state,
            status: UserActionTypes.UPDATE_REQUIRED_USER_PROCESSING,
          };
      case UserActionTypes.UPDATE_REQUIRED_USER_FAILURE:
          return {
            ...state,
            err: action.payload,
          };

      case UserActionTypes.SIGN_UP_SUCCESS:
        return {
          ...state,
          // currentUser: action.payload,
          status: UserActionTypes.SIGN_UP_SUCCESS
        };
      case UserActionTypes.SIGN_UP_PROCESSING:
        return {
          ...state,
          status: UserActionTypes.SIGN_UP_PROCESSING,
        };
      case UserActionTypes.SIGN_UP_FAILURE:
        return {
          ...state,
          err: action.payload,
        };
      

    default:
      return { ...state };
  }
};
export default userReducer;
