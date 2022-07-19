import React from 'react'
import './form-user.styles.scss'
import styled from 'styled-components'
import { Button, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { AuthContext } from '../../../../context/AuthProvider';


const FormUser = () => {
    const { user: {
        displayName,
        photoURL
    }} = React.useContext(AuthContext)

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero>
            <section class="section about-section gray-bg" id="about">
            <div className="container emp-profile">
                    <form method="post">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-img">
                                    <img src={photoURL} alt='img' />
                                    <div className="file btn btn-lg btn-primary">
                                        Change Photo
                                        <input type="file" name="file" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="profile-head">
                                    <h5>
                                        {displayName}
                                    </h5>
                                    <h6>
                                        Role User and Admin
                                    </h6>
                                    <p className="proile-rating">Creation start date : <span>2022/02/20 13:33 AM</span></p>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a href="/" className="nav-link active">About</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <Link to={"/users/edit-user:id"}><Button className='profile-edit-btn' >Edit Profile</Button></Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-work">
                                    <p>INTERESTS</p>
                                    <span>Testing</span><br />
                                    <span>Testing</span><br />
                                    <span>Testing</span><br />
                                    <span>Testing</span><br />
                                    
                                    
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="tab-content profile-tab" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Id01</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Duy Huu Nguyen</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>duyng@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Gender</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Nam</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>+8494 8388 567</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Address </label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>590 CMT8</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>MaritalStatus</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>None</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Education </label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Super</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Work</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Developer FrontEnd & BackEnd</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Company</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Freelancer</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Position </label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>None</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>﻿
                

            </Hero>
        </motion.div>



    )
}

export default FormUser

const Hero = styled.div`
    /* margin-bottom: -15rem; */
    margin-bottom: -8rem;
`