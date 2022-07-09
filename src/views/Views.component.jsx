import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Homepage from '../pages/homepage/homepage.component'
import About from '../pages/about/About.component'
import Contact from '../pages/contact/contact.component'
import Sign from '../pages/sign/Sign.component'
import FormUser from '../components/form-user-required/form-user.component'

import './View.styles.scss'

const View = () => {
    const location = useLocation()
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Homepage />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/sign' element={<Sign/>} />


                <Route path='/form' element={<FormUser/>} />



                {/* <Route path='/demologin' element={<LoginDemo/>} /> */}
                {/* <Route path='/recipe/:name' element={<Recipe/>}/> */}
            </Routes>
        </AnimatePresence>
    )
}

export default View