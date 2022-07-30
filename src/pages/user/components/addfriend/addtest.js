import React from 'react'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectAllUser } from '../../../../redux/user/user.selector';
import { getUserStart } from '../../../../redux/user/user.action';
import { useEffect } from 'react';

const AddTEST = ({ listUser, getUsers }) => {
    console.log(listUser);

    useEffect(() => {
        getUsers();
    }, [])
    return (
        <div>AddF</div>
    )
}
const mapStateToProp = createStructuredSelector({
    listUser: selectAllUser,
});
const mapDispatchToProp = (dispatch) => ({
    getUsers: () => dispatch(getUserStart()),
});
export default connect(mapStateToProp, mapDispatchToProp)(AddTEST);


