import React,  { useEffect, useState } from 'react';
import { createStructuredSelector } from "reselect";
import { connect, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { Space, Table, Tag, Button, Modal } from 'antd';


import { getUserStart } from '../../../redux/user/user.action.js';
import { deleteUser } from '../../../redux/user/user.saga.js';



const UserManagement = () => {
    const { allUsers } = useSelector(state => state.user)

    console.log("user LIST:", allUsers);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserStart());
    }, [dispatch])

    const handleDeleteUser = (id) => {
        dispatch(deleteUser(id))
    }

    const columns = [
        {
            title: 'User ID',
            dataIndex: 'userId',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'username',
            key: 'username',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Age',
            dataIndex: 'birthday',
            key: 'birthday',
        },
        {
            title: 'Marital Status',
            dataIndex: 'maritalStatus',
            key: 'maritalStatus',
        },
        {
            title: 'Hobbies',
            dataIndex: 'hobbies',
            key: 'hobbies',
        },
        {
            title: 'Education',
            dataIndex: 'education',
            key: 'education',
        },
        {
            title: 'Work',
            dataIndex: 'work',
            key: 'work',
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
        },
        {
            title: 'Position',
            dataIndex: 'position',
            key: 'position',
        },
        {
            title: 'Date Created',
            dataIndex: 'dateCreate',
            key: 'dateCreate',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Is Admin',
            key: 'isAdmin',
            dataIndex: 'isAdmin',
            render: (text) => <Tag color = 'geekblue'>{text}</Tag>,
            // render: (_, { isAdmin }) => (
            //     <>
            //         {isAdmin.map((tag) => {
            //             let color = tag.length > 5 ? 'geekblue' : 'green';
    
            //             if (tag === 'admin') {
            //                 color = 'volcano';
            //             }
    
            //             return (
            //                 <Tag color={color} key={tag}>
            //                     {tag.toUpperCase()}
            //                 </Tag>
            //             );
            //         })}
            //     </>
            // ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <div>
                        <Button
                            onClick={() => handleDeleteUser(record.userId)}
                            style={{ marginRight: 10 }}
                            type="primary"
                            danger
                        >
                            Delete
                        </Button>
                        {/* <NavLink to={`/admin/user/update-user/${record.id}`}>
                            <Button style={{ marginRight: 10 }} type="primary">
                                Update
                            </Button>
                        </NavLink> */}
                    </div>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Table columns={columns} dataSource={allUsers} />
            
        </>

    )
}

export default UserManagement;