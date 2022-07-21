import { NotifiCheckService, Notification } from "../../components/antd/notification/notification.component";

export const CheckService = (() => {
    const userInfoFb = JSON.parse(localStorage.getItem("smso-user-logged-fb"));
        if (userInfoFb) {
            NotifiCheckService("info", "Alert", "topRight")
        } else {
            Notification("error", "Not Found", "top")
        }
    }
);