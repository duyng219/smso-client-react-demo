import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import UserManagement from "./UserManagement/UserManagement.component";
// import { notiFunc } from "../../utils/settings/notification/notiFunc";
import { postCategoryService, postService } from '../../redux/user/user.saga';

import { Button, Tabs, Modal, Checkbox, Form, Input, InputNumber } from "antd";
import { QuestionCircleOutlined, AppstoreAddOutlined } from '@ant-design/icons';

import { motion } from 'framer-motion'
import styled from 'styled-components'
import HomeAdmin from "./Home/homeadmin.component";
import FooterLayout from "../../components/footer/footer.component";
import ServiceManagement from "./ServiceManagement/ServiceManagement.component";


const AdminHome = () => {
    const dispatch = useDispatch()
    const { TabPane } = Tabs;
    const userInfo = JSON.parse(localStorage.getItem("hoasen-user-logged"));

    // if (!userInfo || !userInfo.user.isAdmin) {
    //     notiFunc("error", "Không có quyền truy cập");
    //     return <Redirect to="/" />;
    // }

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const [isModalVisibleService, setIsModalVisibleService] = useState(false);

    const showModalService = () => {
        setIsModalVisibleService(true);
    };

    const handleOkService = () => {
        setIsModalVisibleService(false);
    };

    const handleCancelService = () => {
        setIsModalVisibleService(false);
    };

    const onFinishService = (values) => {
        console.log('Received values of form: ', values);
        dispatch(postService(values))
    };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        dispatch(postCategoryService(values))
    };

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero>
                <Tabs tabPosition="left">
                    <TabPane style={{ marginTop: 15 }} tab="Home" key="1">
                        <NavLink to="/admin/user/add-user">
                            {/* <Button style={{ marginBottom: 15 }} type="dash" danger>
                        Add new
                    </Button> */}
                        </NavLink>
                        <HomeAdmin />
                    </TabPane>
                    <TabPane style={{ marginTop: 15 }} tab="User Management" key="2">
                        {/* <NavLink to="/admin/user/add-user">
                            <Button style={{ marginBottom: 15 }} type="dash" primary>
                                Add new user
                            </Button>
                        </NavLink> */}
                        <UserManagement />
                    </TabPane>
                    <TabPane style={{ marginTop: 15 }} tab="Service Management" key="3">
                        <Button style={{ marginBottom: 15 }} type="dash" primary onClick={showModal}>
                            Add new Category Service
                        </Button>
                        <Button style={{ marginBottom: 15 }} type="dash" primary onClick={showModalService}>
                            Add new Service
                        </Button>
                        <ServiceManagement />
                    </TabPane>

                    <TabPane style={{ marginTop: 15 }} tab="Other Management" key="4">
                        <NavLink to="/admin/user/add-user">
                            <Button style={{ marginBottom: 15 }} type="dash" primary>
                                Add new
                            </Button>
                        </NavLink>
                        {/* <TypeOfProductManagement /> */}
                    </TabPane>
                </Tabs>

                <Modal title="Add Category new" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <Form
                        name="normal_login"
                        className="login-form"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="categoryName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Category Name!',
                                },
                            ]}
                        >
                            <Input prefix={<AppstoreAddOutlined className="site-form-item-icon" />} placeholder="Category name" />
                        </Form.Item>
                        <Form.Item
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input description Category!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<QuestionCircleOutlined className="site-form-item-icon" />}
                                placeholder="Description category"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Add
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>

                <Modal title="Add Category new" visible={isModalVisibleService} onOk={handleOkService} onCancel={handleCancelService}>
                    <Form
                        name="normal_login"
                        className="login-form"
                        onFinish={onFinishService}
                    >
                        <Form.Item
                            name="serviceName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Service Name!',
                                },
                            ]}
                        >
                            <Input prefix={<AppstoreAddOutlined className="site-form-item-icon" />} placeholder="Service name of category" />
                        </Form.Item>

                        <Form.Item
                            name="urlLinkService"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input url Link Service!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<QuestionCircleOutlined className="site-form-item-icon" />}
                                placeholder="Url Link service of category"
                            />
                        </Form.Item>

                        <Form.Item
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input description Service!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<QuestionCircleOutlined className="site-form-item-icon" />}
                                placeholder="Description service of category"
                            />
                        </Form.Item>

                        <Form.Item
                            name="urlImage"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input url image Service!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<QuestionCircleOutlined className="site-form-item-icon" />}
                                placeholder="Url image service"
                            />
                        </Form.Item>



                        <Form.Item
                            name="servicePrice"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input service price!',
                                },
                            ]}
                        >
                            <InputNumber
                                style={{
                                    width: 350,
                                }}
                                prefix="$"
                                placeholder="Service price"
                            />
                        </Form.Item>

                        <Form.Item
                            name="categoryId"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input category ID!',
                                },
                            ]}
                        >
                            <InputNumber
                                style={{
                                    width: 350,
                                }}
                                prefix={<AppstoreAddOutlined className="site-form-item-icon" />}
                                placeholder="Category ID..."
                            />
                            
                        </Form.Item>
                        <p style={{ fontWeight: 200, fontSize: 13 }}>(*You need to fill in the correct category id that you created*)</p>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Add
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>

            </Hero>
            <FooterLayout />
        </motion.div>
    );
};

export default AdminHome;

const Hero = styled.div`
    margin: 1rem 2rem 0rem 2rem;
`
