import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import img from '../../assets/images/welcome.png'

import './about.styles.scss'

import { Link} from 'react-router-dom'

const About = () => {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero>
                <section className="welcome_section layout_padding">
                    <div className="container">
                        <div className="custom_heading-container">
                            <h2>
                                Welcome To Application
                            </h2>
                        </div>
                        <div className="layout_padding2">
                            <div className="img-box">
                                <img src={img} alt="img" />
                            </div>
                            <div className="detail-box">
                                <p>
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                </p>
                                <div className="btn-box1">
                                    <Link className="btn-1" to="/">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </Hero>

        </motion.div >
    )
}

const Hero = styled.div`
    margin-bottom: 0rem;
`

export default About