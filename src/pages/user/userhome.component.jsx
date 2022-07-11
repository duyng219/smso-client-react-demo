import React, { useState } from 'react';
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Sidebar from './components/sidebar/sidebar.component'

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
                        <Tabs tabPosition="left">

                            <TabPane
                                tab={
                                    <span>
                                        {<ChatIcon />}
                                        Message Box
                                    </span>
                                }
                                key="1"
                            >
                                Tab 1
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        {<PersonSearchIcon className="icon" />}
                                        Find around
                                    </span>
                                }
                                key="2"
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
                                key="3"
                            >
                                Tab 3
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        {<AutorenewIcon className="icon" />}
                                        Pending Status
                                    </span>
                                }
                                key="4"
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
                                key="5"
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
                                key="6"
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
                                key="7"
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
                                key="8"
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
                                key="9"
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
                                key="10"
                            >
                                Tab 10
                            </TabPane>
                        </Tabs>
                    </div>


                    <div className="user-container">
                        <Navbar />
                        <div className="user-widgets">
                        </div>
                    </div>

                </div>
            </Hero>
        </motion.div >
    )
}

const Hero = styled.div`
    /* margin-bottom: -15rem; */
    margin-bottom: 50rem;
`

export default UserHome