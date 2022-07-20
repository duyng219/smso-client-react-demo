import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../../assets/logo/SMSo2.png'
import './header.styles.scss'

import userimg from '../../assets/images/user/65e06fe2f34b33156a5a.jpg'
import userimgfb from '../../assets/images/user/images1.png'

import history from "../../history";

import { Link } from 'react-router-dom'

import { NotificationDuration, Notification } from '../antd/notification/notification.component'
import { Dropdown, Menu, Avatar, Tooltip } from 'antd';

//ICON MUI
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import LogoutIcon from '@mui/icons-material/Logout';
import SelectLanguage from './languageSelect.component'

import { AuthContext } from '../../context/AuthProvider';
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { handleLogoutfb } from '../../redux/logout-localstore/logoutLocalStore'

const buttonRemove = styled.button`
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
`

const Header = () => {
    const dispatch = useDispatch();

    const { user: {
        displayName,
        photoURL
    }} = React.useContext(AuthContext)

    

    // const handleLogout =  () => {
    //     localStorage.removeItem("smso-user-logged");
    //     // history.push("/");
    //     window.location.href = '/'

    // };

    // const hanldeClick = (e) => {
    //     e.preventDefault()
    //     Notification("success", "Function Search", "top")
    // }


    const handleLog = async (e) => {
        e.preventDefault();
        dispatch(handleLogoutfb());
    };

    const menuAdmin = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <Link to={"/admin"}><AccountCircleIcon fontSize="small" />Profile</Link>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <Link to={"/settings"}><MiscellaneousServicesIcon fontSize="small"/> Settings</Link>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <button><LogoutIcon onClick={handleLog} fontSize="small"/>Log out</button>
                    ),
                },
            ]}
        />
    );

    const userInfo = JSON.parse(localStorage.getItem("smso-user-logged"));
    const userInfoFb = JSON.parse(localStorage.getItem("smso-user-logged-fb"));


    return (
        <div className="header">
            <Navbar bg="light" expand="lg" className="header" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="/"><img className='logo-bg' src={logo} alt="img" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <Link to={"/"}><Nav.Link href="#1">Home</Nav.Link></Link>
                            <Link to={"/about"}><Nav.Link href="#2">About us</Nav.Link></Link>
                            <Link to={"/contact"}><Nav.Link href="#3">Contact</Nav.Link></Link>
                            <Link to={"/users/form/:id"}><Nav.Link href="#4">Form</Nav.Link></Link>
                            <Link to={"/users"}><Nav.Link href="#8">usertest</Nav.Link></Link>
                            <Link to={"/admin"}><Nav.Link href="#8">admintest</Nav.Link></Link>
                            {/* <button onClick={handleLog}>logout</button> */}
                            
                        </Nav>
                    

                        <SelectLanguage />

                        {(!userInfo && !userInfoFb) && (
                            <Link to={"/sign"}><Nav.Link href="#5"><button className='customButton custom-signin' >Sign <br /> In</button></Nav.Link></Link>
                        )}

                        {/* {userInfo && (
                            <Nav.Link href="/"><button onClick={handleLogout} className='customButton custom-signin custom-logout' >Log out</button></Nav.Link>
                        )} */}

                        {userInfo?.userRoles[0] && (
                            <Link to={"/users"}>
                                <Nav.Link href="#6">
                                    <button className='button-user' >
                                        <div className="item-user">
                                            <img
                                                src={userimg}
                                                alt=""
                                                className="avatar-user"
                                            />
                                        </div>
                                    </button>
                                </Nav.Link>
                            </Link>
                        )}

                        {/* {(!userInfo && !userInfoFb) && (
                            <Link to={"/sign"}><Nav.Link href="#5"><button className='customButton custom-signin' >Sign <br/> In</button></Nav.Link></Link>
                        )} */}

                        {/* {userInfoFb && (
                            <Nav.Link href="/"><button onClick={handleLogoutfb} className='customButton custom-signin custom-logout' >Log out</button></Nav.Link>
                        )} */}

                        {userInfoFb?.email && (
                            <Dropdown
                                trigger={['click']}
                                overlay={menuAdmin}
                                placement="bottomRight"
                                arrow={{
                                    pointAtCenter: true,
                                }}
                            >
                                {/* <Link to={"/users"}> */}
                                <Nav.Link href="#6">
                                    <Tooltip placement="bottomRight" title={displayName}>
                                        <button className='button-user' >
                                            <Avatar src={photoURL} >
                                                {photoURL ? '' : displayName?.charAt(1)?.toUpperCase()}
                                            </Avatar>
                                        </button>
                                    </Tooltip>
                                </Nav.Link>
                                {/* </Link> */}
                            </Dropdown>
                        )}

                        {userInfo?.userRoles[1] && (
                            <Link to={"/admin-profile"}><Nav.Link href="#7"><button className='customButton' >Admin</button></Nav.Link></Link>
                        )}

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>

    )
}



const menuUsers = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        <AccountCircleIcon /> Profile
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        <MiscellaneousServicesIcon /> Settings
                    </a>
                ),
            },
            {
                key: '3',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        <LogoutIcon /> Logout
                    </a>
                ),
            },
        ]}
    />
);


export default Header

