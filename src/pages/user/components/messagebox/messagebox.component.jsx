import React from 'react'
import './messagebox.styles.scss'
import {motion} from 'framer-motion'

import { Row, Col } from 'antd';
import ChatMessage from './chat-message/chatmessage.component';
import SidebarMess from './sidebar-message/sidebarmessage';

const MessageBox = () => {
    return (
        
        <motion.div
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
            >
            <div>
            <Row>
                <Col span={5}>
                    <SidebarMess />
                </Col>
                <Col span={19}>
                    <ChatMessage />
                </Col>
            </Row>
        </div>
        </motion.div>

    )
}

export default MessageBox