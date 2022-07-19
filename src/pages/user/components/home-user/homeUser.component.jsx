import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import image1 from '../../../../assets/images/modern-design.jpg';
import image2 from '../../../../assets/images/clean-design.jpg';
import image3 from '../../../../assets/images/great-support.jpg';
import image4 from '../../../../assets/images/easy-customise.jpg';
import image5 from '../../../../assets/images/unlimited-features.jpg';
import image6 from '../../../../assets/images/advanced-option.jpg';
import { Row, Col } from 'antd'
import { Card } from 'antd';
import history from '../../../../history';
import { Link } from 'react-router-dom'

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
                        <div className="container">
                        <div id='feature' className='block featureBlock bgGray'>
                            <div className='container-fluid'>
                                <div className="titleHolder">
                                    <h2>Key Features and Benefits</h2>
                                    <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
                                </div>
                                <Row gutter={[16, 16]}>
                                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                                        <Link to={"users/news"}>
                                        <Card
                                                hoverable
                                                cover={<img alt="Item" src={image1} />}
                                            >
                                                <Meta title="Modern Design" s />
                                            </Card>
                                        </Link>
                                            
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                                        <Card
                                            hoverable
                                            cover={<img alt="Item" src={image2} />}
                                        >
                                            <Meta title="Clean and Elegant" s />
                                        </Card>
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                                        <Card
                                            hoverable
                                            cover={<img alt="Item" src={image3} />}
                                        >
                                            <Meta title="Great Support" s />
                                        </Card>
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                                        <Card
                                            hoverable
                                            cover={<img alt="Item" src={image4} />}
                                        >
                                            <Meta title="Easy to customise" s />
                                        </Card>
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                                        <Card
                                            hoverable
                                            cover={<img alt="Item" src={image5} />}
                                        >
                                            <Meta title="Unlimited Features" s />
                                        </Card>
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                                        <Card
                                            hoverable
                                            cover={<img alt="Item" src={image6} />}
                                        >
                                            <Meta title="Advanced Options" s />
                                        </Card>
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
    padding: 0rem 5rem;
`

const SessionDiv = styled.div`
    border-radius: 10px;
    background-color: #f5f5f5;
`