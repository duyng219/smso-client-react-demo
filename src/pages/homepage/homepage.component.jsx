import React from 'react'
import './homepage.styles.scss'
import slideimg from '../../assets/images/slider-img.png'
import {motion} from 'framer-motion'
import { Link} from 'react-router-dom'

import img from  '../../assets/images/hero-bg.png'

import styled from 'styled-components'

const Homepage = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
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
                          <h1>
                            SMS Online <br /> Trò chuyện nhóm cho toàn cầu.
                            Với SMSO làm việc theo nhóm sẽ
                            <br />
                            trở nên dễ dàng hơn.
                          </h1>
                          <p>
                            Cách đơn giản nhất để cộng tác nhóm từ xa.
                          </p>
                          <div className="btn-box">
                          
                            <Link className="btn-1" to="/sign">Getting Started</Link>
                              
                          
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
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
    </motion.div>
  )
}

export default Homepage

const Hero = styled.div`
    & {
      margin-bottom: 50rem;
      height: 84vh;
      background: -webkit-gradient(linear, left top, right top, from(#864ddf), to(#203376));
      background: linear-gradient(to right, #864ddf, #203376);
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