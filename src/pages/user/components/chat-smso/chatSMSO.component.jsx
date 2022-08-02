import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getFriendStart } from '../../../../redux/user/user.action';

import { db, auth } from '../../../../firebase/config'
import './chatSMO.scss'

import { motion } from 'framer-motion'

import styled from 'styled-components'
import SidebarSMSO from './sidebar-chat-smso/sidebar.component'
import ChatContent from './chat-content/chatcontent.component'
import EditArea from './edit-area/editarea.component'

const ChatSMSOnline = () => {
    const { allFriends } = useSelector(state => state.user)
    console.log("friend LIST:", allFriends);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFriendStart());
    }, [dispatch])

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero>
                <SessionDiv>
                    <PaddingDiv>
                        <div classname="container">
                            <div className="app">
                                <div className="wrapper">
                                    <div className='sidebar-container'>
                                        <SidebarSMSO/>
                                    </div>
                                    <div className='chat-container'>
                                        <ChatContent/>
                                    </div>
                                    <div className='edit-area-container'>
                                        <EditArea/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PaddingDiv>
                </SessionDiv>
            </Hero>
        </motion.div >
    )
}

export default ChatSMSOnline

const Hero = styled.div`
    margin-right: 1.5rem;
`

const PaddingDiv = styled.div`
    padding: 0rem 0rem 0rem 0rem;
`

const SessionDiv = styled.div`
    /* border-radius: 10px; */
    background-color: #f5f5f5;
`