import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import { Space, Table, Tag, Button } from 'antd';

import { getServiceStart, getCategoryServiceStart } from '../../../redux/user/user.action';
import { deleteService, deleteCategoryService } from '../../../redux/user/user.saga';



const ServiceManagement = () => {
  const { serviceUser, categoryServiceUser } = useSelector(state => state.user)

  console.log("Service Category LIST:", categoryServiceUser);
  console.log("Service LIST:", serviceUser);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategoryServiceStart());
    dispatch(getServiceStart());
  }, [dispatch])

  const handleDeleteService = (id) => {
    dispatch(deleteService(id))
  }
  const handleDeleteCategory = (id) => {
    dispatch(deleteCategoryService(id))
  }

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
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
            <div>
                <Button
                    onClick={() => handleDeleteCategory(record.categoryId)}
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
      render: (_, record) => (
        <Space size="middle">
          <div>
            <Button
              onClick={() => handleDeleteService(record.serviceId)}
              style={{ marginRight: 10 }}
              type="primary"
              danger
            >
              Delete
            </Button>
          </div>
        </Space>
      ),
    },
  ];

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
      <p style={{ fontWeight: 200, fontSize: 13, textAlign: 'center' }}>(*Admin needs to delete the sub Services of the Category found by id and then delete the Category Service*)</p>
      <hr />
    </>
  )
}

export default ServiceManagement;