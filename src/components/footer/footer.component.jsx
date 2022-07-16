import React from 'react'
import fb from '../../assets/images/fb.png'
import ig from '../../assets/images/instagram1.png'
import li from '../../assets/images/linkedin1.png'
import tw from '../../assets/images/twitter.png'

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { motion } from 'framer-motion'

import './footer.styles.scss'

const Footer = () => {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="footer-container">
                <div className="footer-container-sub">
                    <div className="copyright">
                        <p className="copyright-p">© 2022 - Group 03</p>
                    </div>
                    <div className="social">
                        <a href="/" className="support">Contact Us</a>
                        <a href="/" className="face">f</a>
                        <a href="/" className="tweet">t</a>
                        <a href="/" className="linked">in</a>
                    </div>
                </div>
            </div>
        </motion.div>

    )
}

export default Footer