import React, { useEffect } from 'react'
import { createStructuredSelector } from "reselect";
import { connect, useDispatch, useSelector } from "react-redux";
import { getOneUserStart } from '../../../../redux/user/user.action';


import './form-user.styles.scss'
import styled from 'styled-components'
import { Button, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { AuthContext } from '../../../../context/AuthProvider';


const FormUser = () => {


    const { oneUser } = useSelector(state => state.user)
    console.log("user one LIST:", oneUser);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOneUserStart());
    }, [])
    const { user: {
        displayName,
        photoURL
    } } = React.useContext(AuthContext)

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
                                            <span>{oneUser.isAdmin}</span>
                                        </h6>
                                        <p className="proile-rating">Creation start date : <span>{oneUser.dateCreate}</span></p>
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
                                        <span>{oneUser.hobbies}</span><br />
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
                                                    <p>{oneUser.userId}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Name</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{oneUser.username}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Email</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{oneUser.email}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Gender</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{oneUser.gender}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Phone</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{oneUser.phone}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Address </label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{oneUser.address}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>MaritalStatus</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{oneUser.maritalStatus}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Education </label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{oneUser.education}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Work</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{oneUser.work}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Company</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{oneUser.company}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Position </label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{oneUser.position}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>


            </Hero>
        </motion.div>



    )
}

export default FormUser

const Hero = styled.div`
    /* margin-bottom: -15rem; */
    margin-bottom: -8rem;
`