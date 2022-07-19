import React from 'react'
import { Collapse, Typography, Button } from 'antd'
import styled, { StyleSheetManager } from 'styled-components';
import { PlusSquareOutlined } from '@ant-design/icons';
import useFirestore from '../../../../../hooks/useFirestore';
import { AuthContext } from '../../../../../context/AuthProvider';
import { AppContext } from '../../../../../context/AppProvider';

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
    const { rooms } = React.useContext(AppContext)
    console.log({rooms});

    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <PanelStyled header="List Room" key='1'>
            {
                rooms.map(room => <LinkStyled key={room.id}>{room.name}</LinkStyled>)
            }
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