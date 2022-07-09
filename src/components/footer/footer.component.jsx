import React from 'react'
import fb from '../../assets/images/fb.png'
import ig from '../../assets/images/instagram1.png'
import li from '../../assets/images/linkedin1.png'
import tw from '../../assets/images/twitter.png'

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
            <div className="footer_bg">
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
                                            <li>
                                                <a href>
                                                    Contact Us
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
                                            <li>
                                                <a href>
                                                    Contact Us
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
                                                    sed do eiusmod
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
                                            <li>
                                                <a href>
                                                    Contact Us
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
                                                    adipiscing
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
            </div>
        </motion.div>

    )
}

export default Footer