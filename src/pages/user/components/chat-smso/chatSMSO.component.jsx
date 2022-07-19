import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../../../../firebase/config'

import { motion } from 'framer-motion'

import styled from 'styled-components'
import SidebarSMSO from './sidebar-chat-smso/sidebar.component'

const ChatSMSOnline = ({user = null, db = null}) => {


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
                        <SidebarSMSO/>
                        {/* This is ChatSMSOnline user */}
                        
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
    padding: 0rem 5rem;
`

const SessionDiv = styled.div`
    border-radius: 10px;
    background-color: #f5f5f5;
`