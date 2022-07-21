import React from 'react'
import styled from 'styled-components';

import { Button, Tooltip, Avatar, Form, Input, Alert } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import Message from './message.component';

const ChatMessage = () => {
    return (
        <WrapperStyled>
            <HeaderStyled>
                <div className='header__info'>
                    <p className='header__title'>Room 1</p>
                    <span className='header__description'>
                        This is room 1
                    </span>
                </div>
                <ButtonGroupStyled>
                    <Button
                        icon={<UserAddOutlined />}
                        type='text'
                    >
                        Add
                    </Button>
                    <Avatar.Group size='small' maxCount={2}>
                        <Tooltip >
                            <Avatar>A</Avatar>
                        </Tooltip>
                        <Tooltip >
                            <Avatar>B</Avatar>
                        </Tooltip>
                        <Tooltip >
                            <Avatar>C</Avatar>
                        </Tooltip>
                        <Tooltip >
                            <Avatar>D</Avatar>
                        </Tooltip>
                    </Avatar.Group>
                </ButtonGroupStyled>
            </HeaderStyled>
            <ContentStyled>
                <MessageListStyled>
                    <Message text="Test" photoURL={null} displayName="duyng" createdAt={11111}/>
                    <Message text="Test" photoURL={null} displayName="duyng" createdAt={11111}/>
                    <Message text="Test" photoURL={null} displayName="duyng" createdAt={11111}/>
                    <Message text="Test" photoURL={null} displayName="duyng" createdAt={11111}/>
                    <Message text="Test" photoURL={null} displayName="duyng" createdAt={11111}/>
                    <Message text="Test" photoURL={null} displayName="duyng" createdAt={11111}/>
                    <Message text="Test" photoURL={null} displayName="duyng" createdAt={11111}/>
                    <Message text="Test" photoURL={null} displayName="duyng" createdAt={11111}/>
                    <Message text="Test" photoURL={null} displayName="duyng" createdAt={11111}/>
                    <Message text="Test" photoURL={null} displayName="duyng" createdAt={11111}/>
                    <Message text="Test" photoURL={null} displayName="duyng" createdAt={11111}/>
                    <Message text="Test" photoURL={null} displayName="duyng" createdAt={11111}/>
                </MessageListStyled>
                <FormStyled>
                    <Form.Item>
                        <Input placeholder='Enter a message' bordered={false} autoComplete="off"/>
                    </Form.Item>
                    <Button>Send</Button>
                </FormStyled>
            </ContentStyled>
        </WrapperStyled>
    )
}

export default ChatMessage

const HeaderStyled = styled.div`

    border-right: 0.5px solid rgb(230, 227, 227);
    background-color: rgba(248,249,250,0.1);
    border-top-right-radius: 15px 15px;
    /* border-bottom-right-radius: 15px 15px; */
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    margin-right: 1.5rem;

    display: flex;
    justify-content: space-between;
    height: 56px;
    padding: 0 16px;
    align-items: center;
    border-bottom: 1px solid rgb(230, 230, 230);
    .header {
        &__info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        }
        &__title {
        margin: 0;
        font-weight: bold;
        }
        &__description {
        font-size: 12px;
        }
    }
`;

const ButtonGroupStyled = styled.div`
    display: flex;
    align-items: center;
`;

const WrapperStyled = styled.div`
    height: 50vh;
`;

const ContentStyled = styled.div`
    margin-right: 1.5rem;
    height: 77vh;
    display: flex;
    flex-direction: column;
    padding: 11px;
    justify-content: flex-end;

    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
    /* border-radius: 10px; */
    border-bottom-right-radius: 15px 15px;
`;

const FormStyled = styled(Form)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 2px 2px 0;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 12px;
    .ant-form-item {
        flex: 1;
        margin-bottom: 0;
    }
`;

const MessageListStyled = styled.div`
    max-height: 100%;
    overflow-y: auto;
`;
