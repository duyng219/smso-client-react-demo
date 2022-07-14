import React, { useState } from 'react';
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { NavLink } from "react-router-dom";

import './userhome.styles.scss'
import Navbar from './components/navbar/navbar.component'
import MessageBox from './components/messagebox/messagebox.component'

import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import ChatIcon from '@mui/icons-material/Chat';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FeedIcon from '@mui/icons-material/Feed';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

import { Tabs } from 'antd';
import FormEditUser from './components/form-edit/form-edit-user.component';
import FormUser from './components/form-edit/form-user.component';

import history from '../../history';

const UserHome = () => {
    const { TabPane } = Tabs;

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero>
                {/* <div className="user-home">
                    <Sidebar/>
                    <div className="user-container">
                        <Navbar/>
                        <div className="user-widgets">
                            <MessageBox/>
                        </div>
                    </div>
                </div> */}
                <div className="user-home">
                    <div className='user-sidebar'>
                        
                    </div>


                    <div className="user-container">
                        <Navbar />
                        <div className="user-widgets">
                        </div>
                    </div>

                </div>
                <Tabs 
                    tabPosition="left"
                    onChange={key => {
                        history.push(`/users/${key}`);
                    }}
                >

                            <TabPane
                                tab={
                                    <span>
                                        {<ChatIcon />}
                                        Message Box
                                    </span>
                                }
                                // key="1"
                            >
                                <MessageBox/>
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        {<PersonSearchIcon className="icon" />}
                                        Find around
                                    </span>
                                }
                                key="find"
                            >
                                Tab 2
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        {<AccountCircleOutlinedIcon className="icon" />}
                                        Profile
                                    </span>
                                }
                                key="profile"
                            >
                                <FormUser/>
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        {<AutorenewIcon className="icon" />}
                                        Pending Status
                                    </span>
                                }
                                key="pending-status"
                            >
                                Tab 4
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        {<NotificationsNoneIcon className="icon" />}
                                        Notifications
                                    </span>
                                }
                                key="notification"
                            >
                                Tab 5
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        {<FeedIcon className="icon" />}
                                        News
                                    </span>
                                }
                                key="news"
                            >
                                Tab 6
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        {<MenuBookIcon className="icon" />}
                                        Funny story
                                    </span>
                                }
                                key="funny-story"
                            >
                                Tab 7
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        {<SettingsSystemDaydreamOutlinedIcon className="icon" />}
                                        System Health
                                    </span>
                                }
                                key="systen-health"
                            >
                                Tab 8
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        {<PsychologyOutlinedIcon className="icon" />}
                                        Logs
                                    </span>
                                }
                                key="logs"
                            >
                                Tab 9
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        {<SettingsApplicationsIcon className="icon" />}
                                        Settings
                                    </span>
                                }
                                key="settings"
                            >
                                Tab 10
                            </TabPane>
                        </Tabs>
            </Hero>
        </motion.div >
    )
}

const Hero = styled.div`
    /* margin-bottom: -15rem; */
    margin-bottom: 10rem;
`

export default UserHome