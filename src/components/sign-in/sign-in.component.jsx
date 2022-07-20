import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import LinearProgress from "@mui/material/LinearProgress";
import { Grid } from "@mui/material";
import { Button } from "antd";
import './sign-in.styles.scss'

import UserActionTypes from "../../redux/user/user.type";
import { signInStart } from "../../redux/user/user.action";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser, selectLoginStatus, } from "../../redux/user/user.selector";

import firebase, { auth, db } from '../../firebase/config';
import { addDocument } from "../../firebase/services";
import Loading from "../loading/loading";

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';



const googleProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();

const SignIn = ({ user, login, status }) => {

    // LOGIN WITH API
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


    // LOGIN WITH FACEBOOK
    const handleFbLogin = async () => {
        const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);

        // Check data and import in to firebase or post api
        if (additionalUserInfo?.isNewUser) {
            // db.collection('users').add({
            //     displayName: user.displayName,
            //     email: user.email,
            //     photoURL: user.photoURL,
            //     uid: user.displayName,
            //     providerId: additionalUserInfo.providerId,
            // })

            addDocument('users', {
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    uid: user.displayName,
                    providerId: additionalUserInfo.providerId,
            })
            console.log({ additionalUserInfo })
            localStorage.setItem("smso-user-logged-fb", JSON.stringify(additionalUserInfo.profile));
            window.location.href = '/'

        }
    }

    //LOGIN WITH GOOGLE
    const signInWithGoogle = async () => {
        const { additionalUserInfo, user } = await auth.signInWithPopup(googleProvider);

        // Check data and import in to firebase or post api
        if (additionalUserInfo?.isNewUser) {
            addDocument('users', {
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    uid: user.displayName,
                    providerId: additionalUserInfo.providerId,
            })
            console.log({ additionalUserInfo })
            localStorage.setItem("smso-user-logged-gg", JSON.stringify(additionalUserInfo.profile));
            window.location.href = '/'

        }
    }
    const signOut = async () => {
        try {
            await firebase.auth().signOut();
        } catch (error) {
            console.log(error.message);
        }
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

                    <div className="Container-signInFbOrGg">
                        <p>Sign in with Facebook or Google</p>
                        <div className="signInFbOrGg">
                            <Button type="button" onClick={signInWithGoogle}><GoogleIcon type="button"></GoogleIcon></Button>
                            <Button type="button" onClick={handleFbLogin}><FacebookIcon type="button"></FacebookIcon></Button>
                        </div>
                    </div>
                    
                </div>
                {/* {status === UserActionTypes.EMAIL_SIGN_IN_PROCESSING ? (<Grid item md={12} xs={12}><LinearProgress /></Grid>) : null} */}

                {status === UserActionTypes.EMAIL_SIGN_IN_PROCESSING ? (<Loading/>) : null}

                {/* {status === UserActionTypes.EMAIL_SIGN_IN_PROCESSING ? (<Box sx={{ display: 'flex' }}><CircularProgress /></Box>) : null} */}
            </form>
            {/* <br /> */}
            {/* <Button type="button" onClick={handleFbLogin}>Sign in with Facebook</Button>


            <Button style={{ padding: '20px', fontSize: '15px', borderRadius: '0', fontWeight: '600' }} onClick={signOut}>Sign Out</Button> */}
            {/* <input type="text" placeholder="Current User" value={user.userName} name="" id="" /> */}
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

