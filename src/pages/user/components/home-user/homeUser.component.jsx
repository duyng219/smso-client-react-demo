import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

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
import { getServiceStart } from '../../../../redux/user/user.action';
import { Link } from 'react-router-dom'
import './homeUser.styles.scss'

import { Tabs } from 'antd';
import { CheckService } from '../../../../redux/check-services/checkServices';
import { NotifiCheckService } from '../../../../components/antd/notification/notification.component';
import { Button, notification } from 'antd';
const { TabPane } = Tabs;



const { Meta } = Card;


const HomeUser = () => {
    const userService = JSON.parse(localStorage.getItem("user-resgister-service"));

    const NotifiCheckService = (type, message, placement = "") => {
        notification[type]({
            message: message,
            placement: placement,
            description: (
                    <span>Your account has not registered for the service, please register 
                        <Button type="link" size="small"><a href="/services">Click here!</a></Button> 
                    </span>
                ),
            style: {
                marginTop: 50,
            },
        });
    };
    const { serviceUser } = useSelector(state => state.user)
    
    console.log("Service LIST:", serviceUser);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getServiceStart());
    }, [dispatch])


    const CheckSer = () => {
        // dispatch(CheckService());
        if (!userService) {
            NotifiCheckService("info", "Alert", "topRight")
        } else if(userService){
            NotifiCheckService("success", "Successfully registered", "topRight")
            setTimeout(() => {
                window.location.href = serviceUser?.[0]?.urlLinkService
            }, 3000);
            // console.log("Service link",serviceUser?.[0]?.urlLinkService);
        }
    };

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
                                        <h6>What services are available in our app!</h6> 
                                        <hr />
                                    </div>


                                    <Row gutter={[16, 16]}>
                                        {serviceUser.map(item => (
                                            
                                            <Col key={item.serviceId}  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                                            {/* <Link to={"/users"}> */}
                                            <Card 
                                                onClick={CheckSer}
                                                hoverable
                                                cover={<img alt="Item" src={item.urlImage} />}
                                            >
                                                <Meta title={item.serviceName} s />
                                            </Card>
                                            {/* </Link> */}
                                        </Col>
                                        ))}
                                        
                                    </Row>
                                    <hr />
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