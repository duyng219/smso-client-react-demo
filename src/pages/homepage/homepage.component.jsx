import React from 'react'
import './homepage.styles.scss'
import slideimg from '../../assets/images/slider-img.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import img from '../../assets/images/hero-bg.png'
import imgbg from '../../assets/images/banner-bg.png'
import imgbgsub from '../../assets/images/fun-facts-bg.png'

import styled from 'styled-components'
import AppAbout from './about'
import AppFeature from './feature'
import AppWorks from './works'
import AppContact from './contact'
import FooterLayout from '../../components/footer/footer.component'

import { BackTop, } from 'antd';
import Carousel from 'react-bootstrap/Carousel';


const Homepage = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BackTop />


      <Hero>
        <div className="hero_area">
          <section className=" slider_section ">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-5 col-md-6">
                        <div className="slider_detail-box">
                          <h2>
                            Chat group anytime, anywhere
                            with Messages online teamwork will
                                
                          
                            becomes easier.
                          </h2>
                          <p>
                            The simplest way to collaborate remotely.
                          </p>
                          <div className="btn-box">
                            <Link className="btn-1" to="/sign">Getting Started</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="slider_img-box">
                          <img src={slideimg} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Hero>

      
      {/* <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgbgsub}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgbgsub}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgbgsub}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}

      <AppAbout />
      <AppFeature />
      <AppWorks />
      <AppContact />
      <FooterLayout />
    </motion.div>
  )
}

export default Homepage

const Hero = styled.div`
    & {
      /* margin-bottom: 50rem; */
      height: 104vh;
      /* background: -webkit-gradient(linear, left top, right top, from(#864ddf), to(#203376)); */
      /* background: linear-gradient(to right, #864ddf, #203376); */
      background-image: url(${imgbg});
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }

    &::before  {
      content: "";
      position: absolute;
      width: 58%;
      height: 86%;
      background-image: url(${img});
      background-size: 100% 100%;
      background-repeat: no-repeat;
      top: 47px;
      right: 0;
  }
`;