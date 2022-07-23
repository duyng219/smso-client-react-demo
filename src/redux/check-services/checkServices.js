import { NotifiCheckService, Notification } from "../../components/antd/notification/notification.component";

export const CheckService = (() => {
    const userInfo = JSON.parse(localStorage.getItem("smso-user-logged"));
    const userInfoFb = JSON.parse(localStorage.getItem("smso-user-logged-fb"));
    const userInfoGg = JSON.parse(localStorage.getItem("smso-user-logged-gg"));
        if (userInfoFb || userInfoGg || userInfo) {
            NotifiCheckService("info", "Alert", "topRight")
        } else {
            Notification("error", "Not Found", "top")
        }
    }
);