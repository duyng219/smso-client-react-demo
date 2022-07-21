import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Homepage from '../pages/homepage/homepage.component'
import About from '../pages/about/About.component'
import Contact from '../pages/contact/contact.component'
import Sign from '../pages/sign/Sign.component'
import FormUser from '../components/form-user-required/form-user.component'

import './View.styles.scss'
import SubForm from '../components/subForm/subForm.component'
import UserHome from '../pages/user/userhome.component'
import FormEditUser from '../pages/user/components/form-edit/form-edit-user.component'
import AdminHome from '../pages/admin/adminhome.component'
import Services from '../pages/services/services.component'

const View = () => {
    const location = useLocation()
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path='/'/>
                    <Route index element={<Homepage />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/sign' element={<Sign/>} />

                    <Route path='/users' element={<UserHome/>}/>
                        <Route path='users/form/:id' element={<FormUser/>}/>
                        
                    {/* <Route path='/form' element={<FormUser/>} /> */}
                    <Route path='/form/subForm' element={<SubForm/>} />
                    <Route path='/services' element={<Services/>} />


                    <Route path='/users/edit-user:id' element={<FormEditUser/>} />
                    <Route path='/admin' element={<AdminHome/>} />


                {/* <Route path='/demologin' element={<LoginDemo/>} /> */}
                {/* <Route path='/recipe/:name' element={<Recipe/>}/> */}
            </Routes>
        </AnimatePresence>
    )
}

export default View