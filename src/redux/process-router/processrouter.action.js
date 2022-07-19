
import { Notification, NotificationDuration } from "../../components/antd/notification/notification.component";

export const ProcessRouter = (() => {
    const userInfo = JSON.parse(localStorage.getItem("smso-user-logged"));
    const userInfoFb = JSON.parse(localStorage.getItem("smso-user-logged-fb"));
    try {
        if (!userInfo || !userInfoFb) {
            Notification("error", "Không có quyền truy cập", "top")
            setTimeout(function() {
                window.location.href = '/sign'
                // history.push("/sign")
            }, 1000);
        } else {
            window.location.href = '/users'
        }
        } catch (error) {
            Notification("error", error.response.data.message);
    }
});