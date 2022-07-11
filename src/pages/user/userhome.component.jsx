import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Sidebar from './components/sidebar/sidebar.component'

import './userhome.styles.scss'
import Navbar from './components/navbar/navbar.component'



const UserHome = () => {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero>
                <div className="home-user">
                    <Sidebar/>
                    <div className="user-container">
                        <Navbar/>
                        container
                    </div>
                </div>
            </Hero>
        </motion.div >
    )
}

const Hero = styled.div`
    margin-bottom: 50rem;
`

export default UserHome