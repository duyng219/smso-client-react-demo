import React from "react";
import { Button, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import UserManagement from "./UserManagement/UserManagement.component";
// import { notiFunc } from "../../utils/settings/notification/notiFunc";

import { motion } from 'framer-motion'
import styled from 'styled-components'
import HomeAdmin from "./Home/homeadmin.component";
import FooterLayout from "../../components/footer/footer.component";
import ServiceManagement from "./ServiceManagement/ServiceManagement.component";


const AdminHome = () => {
    const { TabPane } = Tabs;
    const userInfo = JSON.parse(localStorage.getItem("hoasen-user-logged"));

    // if (!userInfo || !userInfo.user.isAdmin) {
    //     notiFunc("error", "Không có quyền truy cập");
    //     return <Redirect to="/" />;
    // }
    const Demo = () => {

    }

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
                        <NavLink to="/admin/user/add-user">
                            <Button style={{ marginBottom: 15 }} type="dash" danger>
                                Add new user
                            </Button>
                        </NavLink>
                        <UserManagement />
                    </TabPane>
                    <TabPane style={{ marginTop: 15 }} tab="Service Management" key="3">
                        <NavLink to="/admin/product/create-product">
                            <Button style={{ marginBottom: 15 }} type="dash" danger>
                                Add new services
                            </Button>
                        </NavLink>
                        <ServiceManagement />
                    </TabPane>

                    <TabPane style={{ marginTop: 15 }} tab="Other Management" key="4">
                        <NavLink to="/admin/user/add-user">
                            <Button style={{ marginBottom: 15 }} type="dash" danger>
                                Add new
                            </Button>
                        </NavLink>
                        {/* <TypeOfProductManagement /> */}
                    </TabPane>
                </Tabs>
            </Hero>
            <FooterLayout/>
        </motion.div>
    );
};

export default AdminHome;

const Hero = styled.div`
    margin: 1rem 2rem 0rem 2rem;
`
