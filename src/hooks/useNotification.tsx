import { notification } from "antd";

export function useNotification() {
    const showNotification = (message: string | JSX.Element, type: "success" | "info" | "warning" | "error") => {
        notification[type]({
            message: "Notification",
            description: message,
            placement: "topLeft",
            duration: 4,
        });
    };

    return { showNotification };
}
