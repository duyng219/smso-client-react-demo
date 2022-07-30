import React, { useEffect, useState } from 'react'
import { createStructuredSelector } from "reselect";
import { connect, useDispatch, useSelector } from "react-redux";
import { selectAllUser } from '../../../../redux/user/user.selector';
import { getUserStart } from '../../../../redux/user/user.action';

import { Space, Table, Tag, Button } from 'antd';
import { AddFriendUser } from '../../../../redux/user/user.saga';
import { identity } from 'lodash';




const AddFriend = () => {
    let addInfo = {
        userId: '',
        friendRequest: true,
        isFriend: true,
    }

    const { allUsers } = useSelector(state => state.user)
    console.log("user LIST:", allUsers);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserStart());
    }, [dispatch])

    const handleAddFriend = (id) => {
        if(id)
        {
            addInfo.userId = id;
            console.log(addInfo);
        }
        dispatch(AddFriendUser(addInfo))

    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'userId',
            key: 'userId',
        },
        {
            title: 'Name',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        // {
        //     title: 'Tags',
        //     key: 'tags',
        //     dataIndex: 'tags',
        //     render: (_, { tags }) => (
        //         <>
        //             {tags.map((tag) => {
        //                 let color = tag.length > 5 ? 'geekblue' : 'green';
    
        //                 if (tag === 'loser') {
        //                     color = 'volcano';
        //                 }
    
        //                 return (
        //                     <Tag color={color} key={tag}>
        //                         {tag.toUpperCase()}
        //                     </Tag>
        //                 );
        //             })}
        //         </>
        //     ),
        // },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <div>
                    <Button
                                onClick={() => handleAddFriend(record.userId)}
                                style={{ marginRight: 10 }}
                                type="primary"
                                info
                            >
                                Addfriend
                            </Button>
                    </div>
                </Space>
            ),
        },
    ];

    return (
        <Table columns={columns} dataSource={allUsers} />
    )
}

export default AddFriend


