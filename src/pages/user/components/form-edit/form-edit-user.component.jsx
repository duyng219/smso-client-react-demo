import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import './form-edit-user.styles.scss'

import styled from 'styled-components'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const FormEditUser = () => {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="container rounded bg-white mt-4 mb-5">
                                <div className="row">
                                    <SessionDiv>
                                        <PaddingDiv>
                                            <div className="col-md-12 padding-center border-right">
                                                <div className="">
                                                    <div className="p-10 py-4">
                                                        <h4 className="text-center">Profile Settings</h4>
                                                        <hr />
                                                        <div className="row mt-3">

                                                            <div className="col-md-2">
                                                                <label className="labels">User Id</label>
                                                                <input type="text" className="form-control" readOnly="true" placeholder="Id" />
                                                            </div>

                                                            <div className="col-md-10">
                                                                <label className="labels">Name</label>
                                                                <input type="text" className="form-control" placeholder="Nguyen Huu Duy" />
                                                            </div>

                                                        </div>

                                                        <div className="row ">

                                                            <div className="col-md-12">
                                                                <label className="labels">Email</label>
                                                                <input type="text" className="form-control" placeholder="enter email" />
                                                            </div>

                                                            <div className="col-md-12">
                                                                <label className="labels">Gender</label>
                                                                <input type="text" className="form-control" placeholder="enter render" />
                                                            </div>

                                                            <div className="col-md-12">
                                                                <label className="labels">Phone</label>
                                                                <input type="text" className="form-control" placeholder="enter phone" />
                                                            </div>

                                                            <div className="col-md-12 ">
                                                                <label className="labels">Marital Status</label>
                                                                <input type="text" className="form-control" placeholder="enter material status" />
                                                            </div>

                                                            <div className="col-md-12 ">
                                                                <label className="labels">Interests</label>
                                                                <input type="text" className="form-control" placeholder="enter interest" />
                                                            </div>

                                                        </div>

                                                        <div className="row mt-4">
                                                            <div className="col-md-6">
                                                                <label className="labels">Education</label>
                                                                <input type="text" className="form-control" placeholder="enter education" />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label className="labels">Company</label>
                                                                <input type="text" className="form-control" placeholder="enter company" />
                                                            </div>
                                                        </div>

                                                        <div className="row ">
                                                            <div className="col-md-6">
                                                                <label className="labels">Work</label>
                                                                <input type="text" className="form-control" placeholder="enter work" />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label className="labels">Position</label>
                                                                <input type="text" className="form-control" placeholder="enter position" />
                                                            </div>
                                                        </div>

                                                        <div className="mt-5 text-center">
                                                            <Link to={"/users"}><button className="btn btn-secondary profile-button mx-2" type="button"><KeyboardReturnIcon /> Cancel & Back</button></Link>
                                                            <button className="btn btn-primary profile-button mx-2" type="button">Save Profile</button>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </PaddingDiv>
                                    </SessionDiv>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Hero>
        </motion.div >

    )
}

export default FormEditUser

const Hero = styled.div`
    /* margin-bottom: -15rem; */
    margin-bottom: 8rem;
`

const PaddingDiv = styled.div`
    padding: 0rem 10rem;
`

const SessionDiv = styled.div`
    border-radius: 10px;
    background-color: #f5f5f5;
`