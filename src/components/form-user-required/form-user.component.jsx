import './form-user.styles.scss'
import { useDispatch } from "react-redux";

import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
} from 'antd';
import React, { useState } from 'react';
const { Option } = Select;
const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];
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

const FormUser = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="84">+84</Option>
                <Option value="85">+85</Option>
            </Select>
        </Form.Item>
    );
    const suffixSelector = (
        <Form.Item name="suffix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                {/* <Option value="USD">$</Option>
                <Option value="CNY">¥</Option> */}
            </Select>
        </Form.Item>
    );
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
    };

    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));
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
                prefix: '84',
            }}
            scrollToFirstError
        >
            <Form.Item
                name="username"
                label="User Name"
                rules={[
                    {
                        type: 'username',
                        message: 'The input is not valid User-Name!',
                    },
                    {
                        required: true,
                        message: 'Please input your User Name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
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
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
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
                name="age"
                label="Age"
                rules={[
                    {
                        required: true,
                        message: 'Please input Age!',
                    },
                ]}
            >
                <InputNumber
                    // addonAfter={suffixSelector}
                    style={{
                        width: '100%',
                    }}
                />
            </Form.Item>

            <Form.Item
                name="marialStatus"
                label="Marital Status"
                rules={[
                    {
                        required: true,
                        message: 'Please select Marial Status!',
                    },
                ]}
            >
                <Select placeholder="select your Marial Status">
                    <Option value="male">Married</Option>
                    <Option value="female">None</Option>
                    <Option value="other">Other</Option>
                    <Option value="bede">Bêđê nên ko kết hôn</Option>
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
                    <Option value="level1">Lớp mầm</Option>
                    <Option value="level2">Lớp mẫu giáo</Option>
                    <Option value="level3">Tốt nghiệp mẫu giáo trường làng</Option>
                    <Option value="level4">Bụi đời chợ lớn</Option>
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
                    <Option value="intern">Intern</Option>
                    <Option value="fresher">Fresher</Option>
                    <Option value="junior">Junior</Option>
                    <Option value="middle">Middle</Option>
                    <Option value="senior">Senior/Leader</Option>
                    <Option value="pm">Project Manager</Option>
                </Select>
            </Form.Item>

            {/* <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                <Row gutter={8}>
                    <Col span={12}>
                        <Form.Item
                            name="captcha"
                            noStyle
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the captcha you got!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Button>Get captcha</Button>
                    </Col>
                </Row>
            </Form.Item> */}

            <Form.Item
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
            </Form.Item>
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

export default FormUser;