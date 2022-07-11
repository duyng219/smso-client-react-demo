import React, { useState } from 'react';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import './navbar.styles.scss'

import { Button, Modal } from 'antd';

const Navbar = () => {
    const [modal1Visible, setModal1Visible] = useState(false);
    return (
        <div className="navbar-user">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon" />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon
                            className="icon"
                            // onClick={() => dispatch({ type: "TOGGLE" })}
                        />
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className="icon" />
                    </div>
                    <button className="btn-notification" onClick={() => setModal1Visible(true)}>
                        <div className="item">
                            <NotificationsNoneOutlinedIcon className="icon notification-hover" />
                            <div className="counter">1</div>
                        </div>
                    </button>
                    
                    <Modal
                        title="Notifications"
                        style={{
                        top: 110,
                        right: -550,
                        }}
                        visible={modal1Visible}
                        onOk={() => setModal1Visible(false)}
                        onCancel={() => setModal1Visible(false)}
                    >
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                    </Modal>

                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon" />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar