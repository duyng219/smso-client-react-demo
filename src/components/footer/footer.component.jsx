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
            {/* <div className="footer_bg">
                <section className="info_section layout_padding2-bottom">
                    <div className="container">
                        <h3 className>
                            Footer
                        </h3>
                    </div>
                    <div className="container info_content">
                        <div>
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <div className="d-flex">
                                        <h5>
                                            Useful Link
                                        </h5>
                                    </div>
                                    <div className="d-flex ">
                                        <ul>
                                            <li>
                                                <a href>
                                                    About Departments
                                                </a>
                                            </li>
                                            <li>
                                                <a href>
                                                    Services
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="ml-3 ml-md-5">
                                            <li>
                                                <a href>
                                                    Loram ipusm
                                                </a>
                                            </li>
                                            <li>
                                                <a href>
                                                    Loram ipusm
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="d-flex">
                                        <h5>
                                            The Services
                                        </h5>
                                    </div>
                                    <div className="d-flex ">
                                        <ul>
                                            <li>
                                                <a href>
                                                    About Departments
                                                </a>
                                            </li>
                                            <li>
                                                <a href>
                                                    Services
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="ml-3 ml-md-5">
                                            <li>
                                                <a href>
                                                    adipiscing elit,
                                                </a>
                                            </li>
                                            <li>
                                                <a href>
                                                    tempor incididunt
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="d-flex">
                                        <h5>
                                            Contact Us
                                        </h5>
                                    </div>
                                    <div className="d-flex ">
                                        <ul>
                                            <li>
                                                <a href>
                                                    About Departments
                                                </a>
                                            </li>
                                            <li>
                                                <a href>
                                                    Services
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="ml-3 ml-md-5">
                                            <li>
                                                <a href>
                                                    consectetur
                                                </a>
                                            </li>
                                            <li>
                                                <a href>
                                                    elit, sed do eiusmod
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-baseline">
                            <div className="social-box">
                                <a href>
                                    <img src={fb} alt="img" />
                                </a>
                                <a href>
                                    <img src={tw} alt="img" />
                                </a>
                                <a href>
                                    <img src={li} alt="img" />
                                </a>
                                <a href>
                                    <img src={ig} alt="img" />
                                </a>
                            </div>
                            <div className="form_container mt-5">
                                <form action>
                                    <label htmlFor="subscribeMail">
                                        Newsletter
                                    </label>
                                    <input type="email" placeholder="Enter Your email" id="subscribeMail" />
                                    <button type="submit">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container-fluid footer_section">
                    <p>
                        © 2022 All Rights Reserved By Group 03
                    </p>
                </section>
            </div> */}


            {/* <div class="footer-basic">
                <footer>
                    <div class="social">
                        <a href="/" className="iconCustom"><FacebookIcon/></a>
                        <a href="/" className="iconCustom"><InstagramIcon/></a>
                        <a href="/" className="iconCustom"><TwitterIcon/></a>
                        <a href="/" className="iconCustom"><LinkedInIcon/></a>
                    </div>
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="/">Home</a></li>
                        <li class="list-inline-item"><a href="/">Services</a></li>
                        <li class="list-inline-item"><a href="/">About</a></li>
                        <li class="list-inline-item"><a href="/">Terms</a></li>
                        <li class="list-inline-item"><a href="/">Privacy Policy</a></li>
                    </ul>
                    <p class="copyright">Company Group 03 © 2018</p>
                </footer>
            </div> */}

            <div class="footer-container">
            <div class="footer-container-sub">
                <div className="copyright">
                    <p class="copyright-p">© 2022 - Group 03</p>
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