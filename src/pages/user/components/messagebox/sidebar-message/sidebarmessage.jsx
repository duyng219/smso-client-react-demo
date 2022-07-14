import React from 'react'
import { Row, Col } from 'antd';
// import UserInfo from './UserInfo';
import RoomList from './roomlist.component';
import styled from 'styled-components';
import UserInfo from './userinfo.component.jsx';

const SidebarMess = () => {
    return (
        <SidebarStyled>
            <Row>
                <Col span={24}>
                    <UserInfo/>
                </Col>
                <Col span={24}>
                    <RoomList />
                </Col>
            </Row>
        </SidebarStyled>
    )
}

export default SidebarMess

const SidebarStyled = styled.div`
    /* background-color: #8EC5FC;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%); */

    /* background: #8e9eab;  
    background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab); 
    background: linear-gradient(to right, #eef2f3, #8e9eab);  */

    border-right: 0.5px solid rgb(230, 227, 227);
    /* background-color: rgba(248,249,250,0.1); */
    background-color: #9baec21a;
    border-top-left-radius: 15px 15px;
    border-bottom-left-radius: 15px 15px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    /* border-radius: 1rem; */
    color: white;
    height: 83vh;
    margin-bottom: -8rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
