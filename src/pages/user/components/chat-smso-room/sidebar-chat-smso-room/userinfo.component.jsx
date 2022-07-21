import React from 'react';
import { Button, Avatar, Typography } from 'antd';
import styled from 'styled-components';

import { auth,db } from '../../../../../firebase/config'
import { AuthContext } from '../../../../../context/AuthProvider';

const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(82, 38, 83);
    .username {
        color: black;
        margin-left: 5px;
    }
`;

export default function UserInfo() {

    
    
    const { user: {
        displayName,
        photoURL
    }} = React.useContext(AuthContext)
    
    return (
        <WrapperStyled>
            <div>
                <Avatar src={photoURL} >
                    {photoURL ? '' : displayName?.charAt(1)?.toUpperCase()}
                </Avatar>
                <Typography.Text className='username'>{displayName}</Typography.Text>
            </div>
            <Button onClick={() => auth.signOut()}>
                Log out fb
            </Button>
        </WrapperStyled>
    );
}