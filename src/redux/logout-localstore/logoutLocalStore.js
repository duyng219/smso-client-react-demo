
import { Notification, NotificationDuration } from "../../components/antd/notification/notification.component";

export const handleLogoutfb = (() => {
    // const userInfo = JSON.parse(localStorage.getItem("smso-user-logged"));
    const userInfoFb = JSON.parse(localStorage.getItem("smso-user-logged-fb"));

        if (userInfoFb)  {
            localStorage.removeItem("smso-user-logged-fb");
            // setTimeout(function() {
                window.location.href = '/sign'
                // history.push("/sign")
            // }, 1000);
            // Notification("success", "Đăng xuất thành công!!!", "top")
        } else {
            Notification("error", "Not Found", "top")
        }
    }
);

export const handleLogoutGg = (() => {
    // const userInfo = JSON.parse(localStorage.getItem("smso-user-logged"));
    const userInfoGg = JSON.parse(localStorage.getItem("smso-user-logged-gg"));

        if (userInfoGg)  {
            localStorage.removeItem("smso-user-logged-gg");
            // setTimeout(function() {
                window.location.href = '/sign'
                // history.push("/sign")
            // }, 1000);
            // Notification("success", "Đăng xuất thành công!!!", "top")
        } else {
            Notification("error", "Not Found", "top")
        }
    }
);
