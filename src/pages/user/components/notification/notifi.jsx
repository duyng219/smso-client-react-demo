import React from 'react'
import { Dropdown, Menu } from 'antd';

//ICON MUI
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";


const Notifications = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        You have 1 new notification
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        You have 1 new notification
                    </a>
                ),
            },
            // {
            //     key: '3',
            //     label: (
            //         <a target="_blank" rel="noopener noreferrer" href="/">
            //             You have 1 new notification
            //         </a>
            //     ),
            // },
        ]}
    />
);

const NotifiAll = () => {
    return (
        <div>
            <Dropdown
                trigger={['click']}
                overlay={Notifications}
                placement="bottomRight"
                arrow={{
                    pointAtCenter: true,
                }}
            >
            <button className="btn-notification">
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon notification-hover" />
                        <div className="counter">2</div>
                    </div>
                    </button>
            </Dropdown>
        </div>
    )
}

export default NotifiAll