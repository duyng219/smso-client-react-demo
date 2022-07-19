import React, { useState } from 'react';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import './navbar.styles.scss'
import NotifiAll from '../notification/notifi';
import NotifiMessage from '../notification/notifiMess';

// import { Modal } from 'antd';


const Navbar = () => {

    return (
        <div className="navbar-user">
            <div className="wrapper">
                <div className="search ">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon className="icon notification-hover" />
                </div>
                <div className="items">
                    <div className="item">
                        <DarkModeOutlinedIcon
                            className="icon notification-hover"
                        // onClick={() => dispatch({ type: "TOGGLE" })}
                        />
                    </div>
                    
                    <NotifiAll/>
                    <NotifiMessage/>
                    
                    
                    <div className="item">
                        <ListOutlinedIcon className="icon notification-hover" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
