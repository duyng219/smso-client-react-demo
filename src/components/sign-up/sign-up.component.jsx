import React, { useState} from 'react'
// import { useDispatch } from "react-redux";
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
// import { Notification } from '../antd/notification/notification.component';
import './sign-up.styles.scss'

import { createStructuredSelector } from "reselect";
import { selectRegisterStatus } from '../../redux/user/user.selector';
import { connect } from "react-redux";
import { signUpStart } from '../../redux/user/user.action';
import UserActionTypes from '../../redux/user/user.type';
import { Grid } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Loading from '../loading/loading';


const SignUp = ({ register, status }) => {

    const [userRegister, setUserRegister] = useState({
        userName: "",
        // confirmUsername: "",
        password: "",
        // confirmPassword: "",
    });

    // const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // if(userRegister.password !== userRegister.confirmPassword) {
        //     Notification("warning","passwords don't match" ,"top")
        //     return;
        // }if(userRegister.confirmUsername !== userRegister.confirmUsername) {
        //     Notification("warning","usernames don't match" ,"top")
        //     return;
        // }
        console.log(userRegister);
        register(userRegister);
    };

    const onChange = (e) => {
        setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
    };

    return (
        <div className="sign-up">
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form'>
                <FormInput
                    type='text'
                    name='userName'
                    value={userRegister.userName}
                    onChange={onChange}
                    label='User name'
                    required
                />
                {/* <FormInput
                    type='username'
                    name='confirmUsername'
                    value={userRegister.confirmUsername}
                    onChange={onChange}
                    label='Confirm User name'
                    required
                /> */}
                <FormInput
                    type='password'
                    name='password'
                    value={userRegister.password}
                    onChange={onChange}
                    label='Password'
                    required
                />
                {/* <FormInput
                    type='password'
                    name='confirmPassword'
                    value={userRegister.confirmPassword}
                    onChange={onChange}
                    label='Confirm Password'
                    required
                /> */}
                <CustomButton 
                    type='submit' 
                    onClick={handleSubmit}
                    disabled={status === UserActionTypes.SIGN_UP_PROCESSING}
                    >
                        SIGN UP
                    </CustomButton>
            </form>
            {/* {status === UserActionTypes.SIGN_UP_PROCESSING  ?  (<Grid item md={12} xs={12}><LinearProgress /></Grid>)  :  null} */}
            {status === UserActionTypes.SIGN_UP_PROCESSING  ?  (<Loading/>)  :  null}
        </div>
    )
}

const mapStateToProp = createStructuredSelector({
    status: selectRegisterStatus,
});

const mapDispatchToProp = (dispatch) => ({
    register: (registerInfo) => dispatch(signUpStart(registerInfo)),
});

export default connect(mapStateToProp, mapDispatchToProp)(SignUp);
