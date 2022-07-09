import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'



const User = () => {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero>
                <div>DDaay la page use</div>
        </Hero>

        </motion.div >
    )
}

const Hero = styled.div`
    margin-bottom: 50rem;
`

export default User