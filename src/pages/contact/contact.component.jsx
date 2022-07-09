import React from 'react'
import { motion } from 'framer-motion'

import styled from 'styled-components'
import './contact.styles.scss'

const Contact = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero>
        <section className="contact_section layout_padding">
          <div className="container contact_heading">
            <h2>
              Contact Us
            </h2>
            <p>
              psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
          </div>
          <div className="container">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputName4">Name</label>
                  <input type="text" className="form-control" id="inputName4" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">Email</label>
                  <input type="email" className="form-control" id="inputEmail4" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputNumber4">Phone number</label>
                  <input type="tel" className="form-control" id="inputNumber4" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputState">Select Service</label>
                  <select id="inputState" className="form-control">
                    <option selected />
                    <option>...</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputMessage">Message</label>
                <input type="text" className="form-control" id="inputMessage" placeholder />
              </div>
            </form></div>
          <div className="d-flex justify-content-center">
            <button type="submit" className>Send</button>
          </div>
        </section>
      </Hero>
    </motion.div >
  )
}

const Hero = styled.div`
margin-top: 2rem;
    margin-bottom: 4rem;
`



export default Contact