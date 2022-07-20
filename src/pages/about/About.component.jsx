import React from 'react'

import { Row, Col } from 'antd';
import styled from 'styled-components'

import FooterLayout from '../../components/footer/footer.component'

const items = [
    {
        key: '1',
        icon: <i className="fas fa-chart-pie"></i>,
        title: 'Members of group',
        content: <ul className="list-inline-ul">
            <li><i>Nguyen Trung Tuan</i></li>
            <li><i>Nguyen Huu Duy</i></li>
            <li><i>Ho Thanh Nam</i></li>
            <li><i>Nguyen Dinh Dai</i></li>
            <li><i>Le Hong Hoang Huy</i></li>
        </ul>,
    },
    {
        key: '2',
        icon: <i className="fas fa-desktop"></i>,
        title: 'Training Teacher',
        content:  <ul className="list-inline-ul">
                    <li><i>Mr. Ngo Phuoc Nguyen</i></li>
                    <li><i>Mr. Le Huu Tri</i></li>
                </ul>,
    },
    {
        key: '3',
        icon: <i className="fas fa-database"></i>,
        title: 'Training School',
        content: <ul className="list-inline-ul">
                    <li><i>FPT Aptech(InformationTechnology Technican)</i></li>
                </ul>,
    },
]

const About = () => {
    return (
        
            <Hero>
                    <div className="container">
                        <div id='about' className='block aboutBlock'>
                            <div className="">
                                <div className="titleHolder">
                                    <h2>About Us</h2>
                                    <p>About our membership and app content</p>
                                </div>
                                <div className="contentHolder">
                                    <p>As we understand that the Project of Online SMS has its environment that closely simulates the texting apps like Instagram and Messenger. <br/> It is a friendly play field for your social life, a convenient tool that allows you to</p>
                                    <ul className="list-inline-ul">
                                        <li><i>Register as a user with a personal contact number</i></li>
                                        <li><i>Edit own personal profiles</i></li>
                                        <li><i>Sending message to other users</i></li>
                                        <li><i>Add new friends through contact number</i></li>
                                        <li><i>Activation of the specific services</i></li>
                                        <li><i>Enhance our social life experience</i></li>
                                        <li><i>Credit card payment support.</i></li>
                                    </ul>
                                    <p>We are very grateful to our supervisor Mr. Le Huu Tri and other members of the group for their invaluable support during the project</p>
                                    <p>Apart from the few mistakes we made in the project, we hope to have more opportunities to increase our knowledge in the field of web development</p>
                                    <p>We are also very grateful for your information and the India Aptech “Demo” project, which helped us gain more practical experience in this project. As we gain more experience from this program, we will not stop learning and try to be as successful as possible in the future.</p>
                                </div>
                                <Row gutter={[16, 16]}>
                                    {items.map(item => {
                                        return (
                                            <Col md={{ span: 8 }} key={item.key}>
                                                <div className='content'>
                                                    <div className="icon">\
                                                        {item.icon}
                                                    </div>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.content}</p>
                                                </div>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </div>
                        </div>
                    </div>
                    <FooterLayout/>
                </Hero>

    )
}

export default About

const Hero = styled.div`
    margin-top: 1rem;
    margin-bottom: 2rem;
`