import React from 'react'

import UserActionTypes from '../../redux/user/user.type'

import { Grid } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Process = ({status}) => {
    return (
        <div>
            {status === UserActionTypes.SIGN_UP_PROCESSING  ?  (<Grid item md={12} xs={12}><LinearProgress /></Grid>)  :  null}
            {status === UserActionTypes.EMAIL_SIGN_IN_PROCESSING ? (<Grid item md={12} xs={12}><LinearProgress /></Grid>) : null}
            {status === UserActionTypes.EMAIL_SIGN_IN_PROCESSING ? (<Box sx={{ display: 'flex' }}><CircularProgress /></Box>) : null}
        </div>
    )
}

export default Process