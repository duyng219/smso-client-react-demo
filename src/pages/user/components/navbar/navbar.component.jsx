import React, { useState } from 'react';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import './navbar.styles.scss'

// import { Modal } from 'antd';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Navbar = () => {

    const [modal1Visible, setModal1Visible] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="navbar-user">
            <div className="wrapper">
                <div className="search ">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon className="icon notification-hover" />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon notification-hover" />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon
                            className="icon notification-hover"
                        // onClick={() => dispatch({ type: "TOGGLE" })}
                        />
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className="icon notification-hover" />
                    </div>
                    {/* onClick={() => setModal1Visible(true)} */}
                    <button className="btn-notification" onClick={handleShow}>
                        <div className="item">
                            <NotificationsNoneOutlinedIcon className="icon notification-hover" />
                            <div className="counter">1</div>
                        </div>
                    </button>

                    <Modal  size="sm" show={show} onHide={handleClose} style={{
                        top: 85,
                        left: 685,
                        }}>
                        <Modal.Header >
                            <Modal.Title>Notifications</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a!</Modal.Body>
                        <Modal.Body>Woohoo, you're reading this text in a!</Modal.Body>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {/* <Modal className="modal-notification"
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
                    </Modal> */}

                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon notification-hover" />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon notification-hover" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar