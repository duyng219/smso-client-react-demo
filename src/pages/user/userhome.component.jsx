import React, { useState } from 'react';
import { motion } from 'framer-motion'
import styled from 'styled-components'


import  './userhome.styles.scss'
import Navbar from './components/navbar/navbar.component'
import MessageBox from './components/messagebox/messagebox.component'

import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import MenuBookIcon from '@mui/icons-material/MenuBook';
import FeedIcon from '@mui/icons-material/Feed';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import HomeIcon from '@mui/icons-material/Home';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import ForumIcon from '@mui/icons-material/Forum';

import { Tabs } from 'antd';
import FormUser from './components/form-edit/form-user.component';

import history from '../../history';
import HomeUser from './components/home-user/homeUser.component';
import ChatSMSOnline from './components/chat-smso/chatSMSO.component';
import ServicesUser from './components/services-user/serviceUser.component';
import FooterLayout from '../../components/footer/footer.component';

import { Notification, NotificationDuration } from "../../components/antd/notification/notification.component";
import { delay } from "redux-saga/effects";

const UserHome = () => {
    const { TabPane } = Tabs;

    const userInfo = JSON.parse(localStorage.getItem("smso-user-logged"));
    const userInfoFb = JSON.parse(localStorage.getItem("smso-user-logged-fb"));

    if (!userInfo || !userInfoFb) {
        Notification("error", "Không có quyền truy cập", "top")
        setTimeout(function() {
            window.location.href = '/sign'
            // history.push("/sign")
        }, 1000);
    }

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero>
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
                    className="list-tabs-user"
                >
                    <TabPane
                        tab={
                            <span>
                                {<HomeIcon />}
                                Home user
                            </span>
                        }
                    // key="home-user"
                    >
                        <HomeUser />
                    </TabPane>

                    <TabPane
                        tab={
                            <span>
                                {<MarkUnreadChatAltIcon />}
                                Chat SMSO
                            </span>
                        }
                    key="message"
                    >
                        <ChatSMSOnline />
                    </TabPane>

                    <TabPane
                        tab={
                            <span>
                                {<ForumIcon />}
                                Chat SMSO All
                            </span>
                        }
                    key="message-all"
                    >
                        <MessageBox />
                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                {<PersonSearchIcon className="icon" />}
                                Add Friends
                            </span>
                        }
                        key="add-friends"
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
                        <FormUser />
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
                                Services
                            </span>
                        }
                        key="news"
                    >
                        <ServicesUser/>
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
                        Tab 8
                    </TabPane>
                </Tabs>
            </Hero>
            {/* <FooterLayout/> */}
        </motion.div >
    )
}

const Hero = styled.div`
    /* margin-bottom: -15rem; */
    margin-bottom: 10rem;
`

export default UserHome