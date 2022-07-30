import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getOneUserStart } from '../../redux/user/user.action';
import './form-user.styles.scss'

import { createStructuredSelector } from "reselect";
import { selectUpdateRequiredUserStatus } from '../../redux/user/user.selector.js';
import { connect } from "react-redux";
import { updateRequiredUserStart } from '../../redux/user/user.action';

import { InfoCircleOutlined, MailOutlined, UserOutlined, UploadOutlined } from '@ant-design/icons';

import {
    AutoComplete,
    Button,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Select,
    Tooltip,
    Upload,
    message
} from 'antd';
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const FormUser = ({submitUpdateRequired, status}) => {
    const { oneUser } = useSelector(state => state.user)
    console.log("user one LIST:", oneUser);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOneUserStart());
    }, [])

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        submitUpdateRequired(values);
    };

    const prefixSelector = (
        <Form.Item name="isAdmin" noStyle>
            {/* <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="user">+84</Option>
            </Select> */}
        </Form.Item>
    );

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
      
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
      
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

    // const normFile = (e) => {
    //     console.log('Upload event:', e);
    //     if ((e)) {
    //         return e;
    //     }
    //     return e?.fileList;
    // };

    return (
        <div className="form-container">
            <h4 className="form-title">Please update your information</h4>
            <Form
            className='form-required'
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                isAdmin: 'user',
            }}
            scrollToFirstError
        >
            {/* <Form.Item
                name="avatar"
                label="Upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="longggg"
            >
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
            </Form.Item> */}
            
            <Form.Item
                name="userId"
                label="User Id"
            >
                <InputNumber
                    placeholder={oneUser.userId}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="Extra information">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                    
                />
            </Form.Item>
            {/* <Form.Item
                name="avatar"
                label="Avatar"
            >
                <Input
                    placeholder={oneUser.userId}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="Extra information">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                />
            </Form.Item> */}
            <Form.Item
                label="User Name"
                name="username"
            >
                <Input
                    placeholder={oneUser.username}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="Extra information">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                />
            </Form.Item>

            <Form.Item
                label="E-mail"
                name="email"
            >
                <Input
                    placeholder={oneUser.email}
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="Extra information">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
            >
                <Input
                    placeholder={oneUser.password}
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="Extra information">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                />
            </Form.Item>

            <Form.Item
                name="gender"
                label="Gender"
                rules={[
                    {
                        required: true,
                        message: 'Please select gender!',
                    },
                ]}
            >
                <Select placeholder="select your gender">
                    <Option value="Male">Male</Option>
                    <Option value="Female">Female</Option>
                    <Option value="Other">Other</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                    {
                        required: true,
                        message: 'Please input your phone number!',
                    },
                ]}
            >
                <Input
                    addonBefore={prefixSelector}
                    style={{
                        width: '100%',
                    }}
                />
            </Form.Item>

            <Form.Item
                name="address"
                label="Address"
                rules={[
                    {
                        required: true,
                        message: 'Please input Address',
                    },
                ]}
            >
                <Input.TextArea showCount maxLength={100} />
            </Form.Item>


            <Form.Item
                name="birthday"
                label="Age"
                rules={[
                    {
                        required: true,
                        message: 'Please input Age!',
                    },
                ]}
            >
                <InputNumber
                    style={{
                        width: '100%',
                    }}
                />
            </Form.Item>

            <Form.Item
                name="maritalStatus"
                label="Marital Status"
                rules={[
                    {
                        required: true,
                        message: 'Please select Marial Status!',
                    },
                ]}
            >
                <Select placeholder="select your Marial Status">
                    <Option value="Married">Married</Option>
                    <Option value="None">None</Option>
                    <Option value="Other">Other</Option>
                    <Option value="Bêđê nên ko kết hôn">Bêđê nên ko kết hôn</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="hobbies"
                label="Hobbies"
                rules={[
                    {
                        required: true,
                        message: 'Please input Hobbies',
                    },
                ]}
            >
                <Input.TextArea showCount maxLength={100} />
            </Form.Item>

            <Form.Item
                name="education"
                label="Education"
                rules={[
                    {
                        required: true,
                        message: 'Please select Education!',
                    },
                ]}
            >
                <Select placeholder="select your Marial Status">
                    <Option value="Lớp mầm">Lớp mầm</Option>
                    <Option value="Lớp mẫu giáo">Lớp mẫu giáo</Option>
                    <Option value="Tốt nghiệp mẫu giáo trường làng">Tốt nghiệp mẫu giáo trường làng</Option>
                    <Option value="Bụi đời chợ lớn">Bụi đời chợ lớn</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="work"
                label="Work"
                rules={[
                    {
                        type: 'text',
                        message: 'The input is not valid Work!',
                    },
                    {
                        required: true,
                        message: 'Please input your Work!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            
            <Form.Item
                name="company"
                label="Company"
                rules={[
                    {
                        type: 'text',
                        message: 'The input is not valid Company!',
                    },
                    {
                        required: true,
                        message: 'Please input your Company!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="position"
                label="Position"
                rules={[
                    {
                        required: true,
                        message: 'Please select Position!',
                    },
                ]}
            >
                <Select placeholder="select your Position">
                    <Option value="Intern">Intern</Option>
                    <Option value="Fresher">Fresher</Option>
                    <Option value="Junior">Junior</Option>
                    <Option value="Middle">Middle</Option>
                    <Option value="Senior">Senior/Leader</Option>
                    <Option value="PM">Project Manager</Option>
                </Select>
            </Form.Item>
            {/* <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                    I have read the <a href="/">agreement</a>
                </Checkbox>
            </Form.Item> */}
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
            <hr/>
        </Form>
        
        </div>
    );
};

// export default FormUser;

const mapStateToProp = createStructuredSelector({
    status: selectUpdateRequiredUserStatus,
});

const mapDispatchToProp = (dispatch) => ({
    submitUpdateRequired: (values) => dispatch(updateRequiredUserStart(values)),
});

export default connect(mapStateToProp, mapDispatchToProp)(FormUser);