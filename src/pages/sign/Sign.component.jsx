import React from 'react'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

import {motion} from 'framer-motion'
import './Sign.styles.scss'

const Sign = () => {
    return (
        
        <motion.div
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
            >
                <div className='sign-in-and-sign-up'>
                    <SignIn/>
                    <SignUp/>
                </div>
        </motion.div>
    )
}

export default Sign