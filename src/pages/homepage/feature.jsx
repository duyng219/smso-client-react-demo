import React from 'react'

import image1 from '../../assets/images/service1.png';
import image2 from '../../assets/images/service22.jpg';
import image3 from '../../assets/images/service33.png';
import image4 from '../../assets/images/service44.jpg';
import image5 from '../../assets/images/service55.png';
import image6 from '../../assets/images/service55.png';

import { Row, Col } from 'antd'
import { Card } from 'antd';
import styled from 'styled-components';

import { Link } from 'react-router-dom'

import { useDispatch } from "react-redux";
import { ProcessRouter } from '../../redux/process-router/processrouter.action';


const { Meta } = Card;

const AppFeature = () => {
    
    const dispatch = useDispatch();

    const handleRouter = async (e) => {
        e.preventDefault();
        dispatch(ProcessRouter());
    };
    

    return (
        <Hero>
            <div className="container">
            <div id='feature' className='block featureBlock bgGray'>
            <div className='container-fluid'>
                <div className="titleHolder">
                    <h2>Key Features and Benefits</h2>
                    <p>What services are available in our app!</p>
                </div>
                <Row gutter={[16, 16]}>
                    <Col xs={{ span: 24}} sm={{ span: 12}} md={{ span: 8}}>
                        {/* <Link to={"/users"}> */}
                        <Card onClick={handleRouter}
                            hoverable
                            cover={<img alt="Item" src={image1}/>}
                        >
                            <Meta title="News"s/>
                        </Card>
                        {/* </Link> */}
                    </Col>
                    <Col xs={{ span: 24}} sm={{ span: 12}} md={{ span: 8}}>
                        <Link to={"/users"}>
                            <Card onClick={handleRouter}
                                hoverable
                                cover={<img alt="Item" src={image2}/>}
                            >
                                <Meta title="Read books"s/>
                            </Card>
                        </Link>
                    </Col>
                    <Col xs={{ span: 24}} sm={{ span: 12}} md={{ span: 8}}>
                        <Link to={"/users"}>
                            <Card onClick={handleRouter}
                                hoverable
                                cover={<img alt="Item" src={image3}/>}
                            >
                                <Meta title="Watch movie"s/>
                            </Card>
                        </Link>
                    </Col>
                    <Col xs={{ span: 24}} sm={{ span: 12}} md={{ span: 8}}>
                        <Link to={"/users"}>
                            <Card onClick={handleRouter}
                                hoverable
                                cover={<img alt="Item" src={image4}/>}
                            >
                                <Meta title="Play online games"s/>
                            </Card>
                        </Link>
                    </Col>
                    <Col xs={{ span: 24}} sm={{ span: 12}} md={{ span: 8}}>
                        <Link to={"/users"}>
                            <Card onClick={handleRouter}
                                hoverable
                                cover={<img alt="Item" src={image5}/>}
                            >
                                <Meta title="Others.."s/>
                            </Card>
                        </Link>
                    </Col>
                    <Col xs={{ span: 24}} sm={{ span: 12}} md={{ span: 8}}>
                        <Link to={"/users"}>
                            <Card onClick={handleRouter}
                                hoverable
                                cover={<img alt="Item" src={image6}/>}
                            >
                                <Meta title="Others.."s/>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
        </div>
        </Hero>
    )
}


export default AppFeature

const Hero = styled.div`
    margin-bottom: 8rem;
`