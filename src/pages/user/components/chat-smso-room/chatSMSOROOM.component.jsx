import React from 'react'
import './chatSMSOROOM.styles.scss'
import {motion} from 'framer-motion'
import styled from 'styled-components'

import { Row, Col } from 'antd';
import ChatMessage from './chat-content-room/chatmessage.component';
// import SidebarMess from './sidebar-message/sidebarmessage';
import SidebaSMSOROOM from './sidebar-chat-smso-room/sidebaroom.component';
import FormChatRoom from './chat-content-room/formchatROOM.component';
import EditAreaRoom from './edit-area-room/editareaRoom.component';

const ChatSMSOROOM = () => {
    return (
        
        <motion.div
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
            >
            {/* <div>
                <Row>
                    <Col span={5}>
                        <SidebarMess />
                    </Col>
                    <Col span={19}>
                        <ChatMessage />
                    </Col>
                </Row>
            </div> */}
            <SessionDiv>
                    <PaddingDiv>
                        <div classname="container">
                            <div className="app">
                                <div className="wrapper">
                                    <div className='sidebar-container'>
                                        <SidebaSMSOROOM/>
                                    </div>
                                    <div className='chat-container'>
                                        <FormChatRoom/>
                                    </div>
                                    <div className='edit-area-container'>
                                        <EditAreaRoom/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PaddingDiv>
                </SessionDiv>
        </motion.div>

    )
}

export default ChatSMSOROOM

const Hero = styled.div`
    margin-right: 1.5rem;
`

const PaddingDiv = styled.div`
    padding: 0rem 0rem 0rem 0rem;
`

const SessionDiv = styled.div`
    border-radius: 10px;
    background-color: #f5f5f5;
`