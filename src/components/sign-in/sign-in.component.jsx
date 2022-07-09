import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import './sign-in.styles.scss'

import { Grid } from "@mui/material";
import { connect } from "react-redux"; // thu vien ket noi view vao redux
import { signInStart } from "../../redux/user/user.action"; // import action can su dung tren view. ( xu ly side effective: call api, write log ...)
import { createStructuredSelector } from "reselect";
import LinearProgress from "@mui/material/LinearProgress";
import {
    selectCurrentUser,
    selectLoginStatus,
} from "../../redux/user/user.selector";
import UserActionTypes from "../../redux/user/user.type";


import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const SignIn = ({ user, login, status }) => {
    console.log(status);
    /*
    user: chính là key user trong hàm mapStateToProp.
    login: chính là key login trong hàm mapDispatchToProp.
    vì kết nối rồi nên các khai này trở thành prop của Login Page.
  */

    // Tạo state cụ bộ trong login page để lưu thông tin người dùng nhập.
    // Giá trị mặc định là một object có 2 key là userName, password. Dùng key này đặt tên cho TextField bên dưới
    const [userLogin, setUserLogin] = useState({
        userName: "",
        password: "",
    });

    // Tạo hàm xử lý input của người dùng. khi người dùng input thì cập nhật lại state cục bộ đã khai ở trên.
    const handleChange = (event) => {
        setUserLogin((preState) => ({
            ...preState,
            [event.target.name]:
                event.target.type === "checkbox"
                    ? event.target.checked
                    : event.target.value,
        }));
    };

    // Tạo hàm xử lý khi user nhấn nút login.
    const handleLogin = () => {
        // login chỗ này chính là prop ở trên. khi call login này thì chính là
        login(userLogin);
    };


    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form>
                <FormInput
                    type="userName"
                    name="userName"
                    value={userLogin.userName}
                    handleChange={handleChange}
                    label="User name or Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={userLogin.password}
                    handleChange={handleChange}
                    label="Password"
                    required
                />
                <div className="buttons">
                    <CustomButton
                        type="submit"
                        onClick={handleLogin}
                        disabled={status === UserActionTypes.EMAIL_SIGN_IN_PROCESSING}
                    >
                        Sign in
                    </CustomButton>
                    <CustomButton type="button" isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
                {status === UserActionTypes.EMAIL_SIGN_IN_PROCESSING ? (<Grid item md={12} xs={12}><LinearProgress /></Grid>) : null}
                {/* {status === UserActionTypes.EMAIL_SIGN_IN_PROCESSING ? (<Box sx={{ display: 'flex' }}><CircularProgress /></Box>) : null} */}
            </form>
            <br/>
            <input type="text" placeholder="Current User" value={user.userName} name="" id="" />
        </div>
    )
}

// Tạo funtion mapStateToProp lấy các selector từ selector. createStructuredSelector phải được import ở trên
const mapStateToProp = createStructuredSelector({
    //  * user: key của object, tự đặt tên. Tên này sẽ trở thành prop của React component (Login page).
    //  * selectCurrentUser: được tạo và export từ file user.selector.js, phải được import ở trên
    //  * Thực hiện tương tự cho các thông tin khác từ store.
    user: selectCurrentUser,
    status: selectLoginStatus,
});

// Tạo function mapDispatchToProp để dispatch action vào store. dispatch ở đây là một parameter
const mapDispatchToProp = (dispatch) => ({
    // * login: Key của object, tự đặt tên. Tên này sẽ trở thành prop của React component.
    //   login ở đây chính là một function có nhận vào một parameter là loginInfo. Khi gọi login thì hàm này sẽ dispatch action signInStart
    //   vào store.
    // * signInStart: là action đã khai báo ở file user.action.js. Phải được import ở trên để sử dụng
    login: (loginInfo) => dispatch(signInStart(loginInfo)),
});
// dùng kết connect function truyền vào 2 parameter là mapStateToProp, mapDispatchToProp. connect phải được import ở trên.
// connect có thể truyền hoặc không truyền parameter.
// connect(null, mapDispatchToProp): chỉ cần dispatch action mà không cần lấy data từ store.
// connect(mapStateToProp, null): cần lấy data nhưng cần dispatch action vào store.
// connect(null, null): khi rảnh quá không có gì làm :).
export default connect(mapStateToProp, mapDispatchToProp)(SignIn);

