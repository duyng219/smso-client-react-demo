import React from 'react'
import './sidebar.styles.scss'
import { Link } from 'react-router-dom'

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

const Sidebar = () => {
    return (
        <div className="sidebar-user">
            <div className="top">
                <span className="logo"><SentimentVerySatisfiedIcon className="icon"/></span>
            </div>
            {/* <hr /> */}
            {/* <div className="center">
                <ul>

                    <p className="title">MAIN</p>
                    <li>
                        <ChatIcon className="icon" />
                        <span>Message Box</span>
                    </li>

                    <Link to="/user/search" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonSearchIcon className="icon" />
                            <span>Find around</span>
                        </li>
                    </Link>

                    <p className="title">LISTS</p>
                    <Link to="/users/profile" style={{ textDecoration: "none" }}>
                        <li>
                            <AccountCircleOutlinedIcon className="icon" />
                            <span>Profile</span>
                        </li>
                    </Link>

                    <p className="title">CONTACT LIST</p>
                    <li>
                        <AutorenewIcon className="icon" />
                        <span>Pending Status</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon" />
                        <span>Notifications</span>
                    </li>

                    <p className="title">SERVICE</p>
                    <li>
                        <FeedIcon className="icon" />
                        <span>News</span>
                    </li>
                    <li>
                        <MenuBookIcon className="icon" />
                        <span>Funny story</span>
                    </li>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div
                    className="colorOption"
                    // onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div
                    className="colorOption"
                    // onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div> */}
        </div>
    )
}

export default Sidebar