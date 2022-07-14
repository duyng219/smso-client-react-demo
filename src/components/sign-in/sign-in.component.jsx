import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import './sign-in.styles.scss'

import { Grid } from "@mui/material";
import { connect } from "react-redux";
import { signInStart } from "../../redux/user/user.action";
import { createStructuredSelector } from "reselect";
import LinearProgress from "@mui/material/LinearProgress";
import {
    selectCurrentUser,
    selectLoginStatus,
} from "../../redux/user/user.selector";
import UserActionTypes from "../../redux/user/user.type";

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import firebase, { auth } from '../../firebase/config';
import { Button } from "antd";
const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const SignIn = ({ user, login, status }) => {
    console.log(status);
    const [userLogin, setUserLogin] = useState({
        userName: "",
        password: "",
    });

    const handleChange = (event) => {
        setUserLogin((preState) => ({
            ...preState,
            [event.target.name]:
                event.target.type === "checkbox"
                    ? event.target.checked
                    : event.target.value,
        }));
    };

    const handleLogin = () => {
        login(userLogin);
    };


    const handleFbLogin = () => {
        auth.signInWithPopup(fbProvider);
    }
    
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
            <Button type="button" onClick={handleFbLogin}>Sign in with Facebook</Button>
            <input type="text" placeholder="Current User" value={user.userName} name="" id="" />
        </div>
    )
}


const mapStateToProp = createStructuredSelector({
    user: selectCurrentUser,
    status: selectLoginStatus,
});

const mapDispatchToProp = (dispatch) => ({
    login: (loginInfo) => dispatch(signInStart(loginInfo)),
});

export default connect(mapStateToProp, mapDispatchToProp)(SignIn);

