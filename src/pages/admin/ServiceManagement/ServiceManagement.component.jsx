import React,  { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import { Space, Table, Tag } from 'antd';

import { getServiceStart, getCategoryServiceStart } from '../../../redux/user/user.action';

const columnsCategoryService = [
  {
    title: 'Category Id',
    dataIndex: 'categoryId',
    key: 'categoryId',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Category Name',
    dataIndex: 'categoryName',
    key: 'categoryName',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: (_, { tags }) => (
  //     <>
  //       {tags.map((tag) => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';

  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }

  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

const columnsService = [
    {
      title: 'Service Id',
      dataIndex: 'serviceId',
      key: 'serviceId',
    },
    {
      title: 'Name Service',
      dataIndex: 'serviceName',
      key: 'serviceName',
    },
    {
      title: 'Price Service',
      dataIndex: 'servicePrice',
      key: 'servicePrice',
    },
    {
      title: 'Category Id',
      dataIndex: 'categoryId',
      key: 'categoryId',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <a>Delete</a>,
    },
  ];

const ServiceManagement = () => {
  const { serviceUser, categoryServiceUser } = useSelector(state => state.user)

    console.log("Service Category LIST:", categoryServiceUser);
    console.log("Service LIST:", serviceUser);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategoryServiceStart());
        dispatch(getServiceStart());
    }, [dispatch])

    return (
        <>
            <div>Category Service</div>
            <Table columns={columnsCategoryService} dataSource={categoryServiceUser} />
            <div>Service</div>
            <Table
              columns={columnsService}
              expandable={{
                expandedRowRender: (record) => (
                  <p
                    style={{
                      margin: 0,
                    }}
                  >
                    {record.description}
                  </p>
                ),
                rowExpandable: (record) => record.name !== 'Not Expandable',
              }}
              dataSource={serviceUser}
            />
            <hr />
            <hr />
        </>
    )
}

export default ServiceManagement;