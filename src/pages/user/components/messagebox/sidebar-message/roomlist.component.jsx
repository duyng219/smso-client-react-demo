import React from 'react'
import { Collapse, Typography, Button } from 'antd'
import styled, { StyleSheetManager } from 'styled-components';
import { PlusSquareOutlined } from '@ant-design/icons';

const { Panel } = Collapse

const PanelStyled = styled(Panel)` //Overrides css component
    &&& {
        .ant-collapse-header,
        p {
        color: #333;
        }
        .ant-collapse-content-box {
        padding: 0 40px;
        }
        .add-room {
        color: white;
        padding: 0;
        }
    }
`;

const LinkStyled = styled(Typography.Link)`
    display: block;
    margin-bottom: 5px;
    color: white;
`;

const RoomList = () => {
    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <PanelStyled header="List Room" key='1'>
                <LinkStyled>Room 1</LinkStyled>
                <LinkStyled>Room 2</LinkStyled>
                <LinkStyled>Room 3</LinkStyled>
                <ButtonCustom
                    type='text'
                    icon={<PlusSquareOutlined />}
                    className='add-room'
                    // onClick={handleAddRoom}
                    >
                    Thêm phòng
                </ButtonCustom>
            </PanelStyled>
        </Collapse>
    )
}

export default RoomList

const ButtonCustom = styled(Button)`
    background-color: gray;
    border-radius: 10px;
`