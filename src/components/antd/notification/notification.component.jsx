import { notification, Button  } from "antd";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Link } from 'react-router-dom'

// export const NotificationRight = (type, message, description = "") => {
//     notification[type]({
//         message: message,
//         description: description,
//     });
// };

export const Notification = (type, message, placement, description = "") => {
    notification[type]({
        message:  message,
        placement: placement,
        description: description,
        style: {
            marginTop: 50,
        },
    });
};

export const NotificationDuration = (type, message, placement, description, duration = "") => {
    notification[type]({
        message:  message,
        placement: placement,
        description: description,
        duration: duration,
        style: {
            marginTop: 50,
        },
    });
};

export const NotifiCheckService = (type, message, placement = "") => {
    notification[type]({
        message: message,
        placement: placement,
        description: (
                <span>Your account has not registered for the service, please register 
                    <Button type="link" size="small"><a href="/services">Click here!</a></Button> 
                </span>
            ),
        style: {
            marginTop: 50,
        },
    });
};


