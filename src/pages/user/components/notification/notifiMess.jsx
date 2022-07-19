import React from 'react'
import { Dropdown, Menu } from 'antd';

//ICON MUI
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";



const NotificationMess = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        You have 1 new message
                    </a>
                ),
            },
            // {
            //     key: '2',
            //     label: (
            //         <a target="_blank" rel="noopener noreferrer" href="/">
            //             You have 1 new message
            //         </a>
            //     ),
            // },
            
        ]}
    />
);

const NotifiMessage = () => {
    return (
        <div>
            <Dropdown
                trigger={['click']}
                overlay={NotificationMess}
                placement="bottomRight"
                arrow={{
                    pointAtCenter: true,
                }}
            >
            <button className="btn-notification">
                        <div className="item">
                            <ChatBubbleOutlineOutlinedIcon className="icon notification-hover" />
                            <div className="counter">1</div>
                        </div>
                    </button>
            </Dropdown>
        </div>
    )
}

export default NotifiMessage