import React from 'react'
import { Navbar, Container, Nav, FormControl, Form } from 'react-bootstrap'
import logo from '../../assets/logo/images-removebg-preview.png'
import './header.styles.scss'

import userimg from '../../assets/images/user/65e06fe2f34b33156a5a.jpg'

import history from "../../history";


import { Link } from 'react-router-dom'


const Header = () => {
    const userInfo = JSON.parse(localStorage.getItem("smso-user-logged"));

    const handleLogout = async () => {
        await localStorage.removeItem("smso-user-logged");
        history.push("/");
    };

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

                            {/* <Nav.Link href="#1">
                                <Link to={"/"}>
                                    Home
                                </Link>
                            </Nav.Link> */}


                            <Link to={"/about"}><Nav.Link href="#2">About us</Nav.Link></Link>
                            {/* <Nav.Link href="#2">
                                <Link to={"/about"}>
                                    About us
                                </Link>
                            </Nav.Link> */}


                            <Link to={"/contact"}><Nav.Link href="#3">Contact</Nav.Link></Link>
                            <Link to={"/users/form/:id"}><Nav.Link href="#5">Form</Nav.Link></Link>
                            {/* <Nav.Link href="#3">
                                <Link to={"/contact"}>
                                    Contact
                                </Link>
                            </Nav.Link> */}


                            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown> */}
                            {/* <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link> */}


                            {/* <Nav.Link href="#4">
                                <Link to={"/sign"}>
                                    Sign
                                </Link>
                            </Nav.Link> */}

                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <button className='customButton' >Search</button>
                        </Form>





                        {!userInfo && (
                            <Link to={"/sign"}><Nav.Link href="#4"><button className='customButton custom-signin' >Sign In</button></Nav.Link></Link>
                        )}

                        {userInfo && (
                            <Nav.Link href="/"><button onClick={handleLogout} className='customButton custom-signin custom-logout' >Log out</button></Nav.Link>
                        )}

                        {userInfo?.userRoles[0] && (
                            <Link to={"/users"}>
                                <Nav.Link href="#4">
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
                        {userInfo?.userRoles[1] && (
                            <Link to={"/admin-profile"}><Nav.Link href="#4"><button className='customButton' >Admin</button></Nav.Link></Link>
                        )}
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>

    )
}


export default Header

