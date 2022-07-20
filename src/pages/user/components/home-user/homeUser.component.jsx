import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import image1 from '../../../../assets/images/service1.png';
import image2 from '../../../../assets/images/service22.jpg';
import image3 from '../../../../assets/images/service33.png';
import image4 from '../../../../assets/images/service44.jpg';
import image5 from '../../../../assets/images/service55.png';
import image6 from '../../../../assets/images/service55.png';
import { Row, Col } from 'antd'
import { Card } from 'antd';
import history from '../../../../history';
import { Link } from 'react-router-dom'
import './homeUser.styles.scss'

import { Tabs } from 'antd';
const { TabPane } = Tabs;



const { Meta } = Card;


const HomeUser = () => {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero>
                <SessionDiv>
                    <PaddingDiv>
                        <div classname="container">
                            <div id='feature' className='block featureBlock bgGray'>
                                <div className='container-fluid'>
                                    <div className="titleHolder-user">
                                        {/* <h2>Key Features and Benefits</h2> */}
                                        <p>What services are available in our app!</p>
                                    </div>
                                    <Row gutter={[16, 16]}>
                                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                                            {/* <Link to={"/users"}> */}
                                            <Card 
                                                hoverable
                                                cover={<img alt="Item" src={image1} />}
                                            >
                                                <Meta title="News" s />
                                            </Card>
                                            {/* </Link> */}
                                        </Col>
                                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                                            <Link to={"/users"}>
                                                <Card 
                                                    hoverable
                                                    cover={<img alt="Item" src={image2} />}
                                                >
                                                    <Meta title="Read books" s />
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                                            <Link to={"/users"}>
                                                <Card 
                                                    hoverable
                                                    cover={<img alt="Item" src={image3} />}
                                                >
                                                    <Meta title="Watch movie" s />
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                                            <Link to={"/users"}>
                                                <Card 
                                                    hoverable
                                                    cover={<img alt="Item" src={image4} />}
                                                >
                                                    <Meta title="Play online games" s />
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                                            <Link to={"/users"}>
                                                <Card 
                                                    hoverable
                                                    cover={<img alt="Item" src={image5} />}
                                                >
                                                    <Meta title="Others.." s />
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                                            <Link to={"/users"}>
                                                <Card 
                                                    hoverable
                                                    cover={<img alt="Item" src={image6} />}
                                                >
                                                    <Meta title="Others.." s />
                                                </Card>
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </PaddingDiv>
                </SessionDiv>
            </Hero>
        </motion.div >
    )
}

export default HomeUser

const Hero = styled.div`
    margin-right: 1.5rem;
`

const PaddingDiv = styled.div`
    padding: 1rem 7rem;
`

const SessionDiv = styled.div`
    border-radius: 10px;
    background-color: #f5f5f5;
`