import React from 'react';
import { NavLink } from "react-router-dom";

import { Space, Table, Tag, Button } from 'antd';
const columns = [
    {
        title: 'User ID',
        dataIndex: 'userId',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
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
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Marital Status',
        dataIndex: 'marital',
        key: 'marital',
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
        dataIndex: 'dateCreated',
        key: 'dateCreated',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Is Admin',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';

                    if (tag === 'Admin') {
                        color = 'volcano';
                    }

                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <div>
                    <Button
                        //   onClick={() => handleDeleteUser(record.id)}
                        style={{ marginRight: 10 }}
                        type="primary"
                        danger
                    >
                        Delete
                    </Button>
                    <NavLink to={`/admin/user/update-user/${record.id}`}>
                        <Button style={{ marginRight: 10 }} type="primary">
                            Update
                        </Button>
                    </NavLink>
                </div>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        userId:'001',
        name: 'Duy Nguyen',
        email: 'duyng@gmail.com',
        age: 18,
        address: '590 CMT8',
        gender: 'male',
        phone: '0948388567',
        marital: 'none',
        hobbies: 'none',
        education: 'none',
        work: 'none',
        company: 'none',
        position: 'none',
        dateCreated: '2022/07/15',
        tags: ['Admin', 'developer'],
    },
    {
        key: '2',
        userId:'002',
        name: 'Jimmy',
        email: 'Jimmy@gmail.com',
        age: 20,
        address: '60A Hoang Van Thu',
        gender: 'female',
        phone: '0923456789',
        marital: 'none',
        hobbies: 'none',
        education: 'FPT Aptech',
        work: 'developer',
        company: 'none',
        position: 'Junior',
        dateCreated: '2022/07/20',
        tags: ['User', 'developer'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['User'],
    },
];

const UserManagement = () => <Table columns={columns} dataSource={data} />;

export default UserManagement;