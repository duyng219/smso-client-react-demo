import React, { useEffect, useState } from 'react'
import { createStructuredSelector } from "reselect";
import { connect, useDispatch, useSelector } from "react-redux";
import { getOneUserStart } from '../../redux/user/user.action';
import { UserRegisterService } from '../../redux/user/user.saga';
import { motion } from 'framer-motion'
import { List, Card, Button } from "antd";

import styled from 'styled-components'
import './services.styles.scss'
import FooterLayout from '../../components/footer/footer.component'

const data = [
    {
        title: "Basic",
        content: [
            {
                price: "Free",
                time: "10 Days",
                option: "1 Service",
                support: "24/7 support",
                backup: "Safe, reliable backup",
                access: "Access from anywhere",
            },
        ],
    },
    {
        title: "Basic++",
        content: [
            {
                price: "$9.99",
                time: "1 Month",
                option: "3 Services",
                support: "24/7 support",
                backup: "Safe, reliable backup",
                access: "Access from anywhere",
            },
        ],
    },
    {
        title: "Premium",
        content: [
            {
                price: "$19.99",
                time: "3 months",
                option: "All Services",
                support: "24/7 support",
                backup: "Safe, reliable backup",
                access: "Access from anywhere",
            },
        ],
    },
];

const Services = () => {
    const { oneUser } = useSelector(state => state.user)
    let getIdUser = oneUser.userId;

    const createRegiserService = {
        serviceRegisterId: 1,
        serviceRegisterName: "Register",
        service: true,
        userId: getIdUser,
    }

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOneUserStart());
    }, [])
    
    const hanldeSubmit = () => {
        dispatch(UserRegisterService(createRegiserService));
    }

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero>
                <div className='container'>
                    <PaddingDiv>
                        <div id="pricing" className="block pricingBlock bgGray">
                            <div className="container-fluid">
                                <div className="titleHolder">
                                    <h2>Choose a services to fit your needs</h2>
                                    <p>Debitis itaque minima dolorum fuga aperiam inventore, quidem enim</p>
                                </div>
                                <List
                                    grid={{
                                        gutter: 16,
                                        xs: 1,
                                        sm: 1,
                                        md: 3,
                                        lg: 3,
                                        xl: 3,
                                        xxl: 3,
                                    }}
                                    dataSource={data}
                                    renderItem={(item) => (
                                        <List.Item>
                                            <Card onClick={hanldeSubmit} title={item.title}>
                                                <p className="large">{item.content[0].price}</p>
                                                <p>{item.content[0].time}</p>
                                                <p>{item.content[0].option}</p>
                                                <p>{item.content[0].support}</p>
                                                <p>{item.content[0].backup}</p>
                                                <p>{item.content[0].access}</p>
                                                <Button type='primary' size="large"><i className="fab fa-telegram-plane"></i>Get Started</Button>
                                            </Card>
                                        </List.Item>
                                    )}
                                />
                            </div>
                        </div>

                    </PaddingDiv>
                </div>
            </Hero>
            <FooterLayout />
        </motion.div >
    )
}

const Hero = styled.div`
    margin: 3rem 0rem 0rem 0rem;
`

const PaddingDiv = styled.div`
    padding: 0rem 0rem;
`

const SessionDiv = styled.div`
    border-radius: 10px;
    background-color: #f5f5f5;
`

export default Services