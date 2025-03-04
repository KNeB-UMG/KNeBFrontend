import { notification } from "antd";

export function useNotification() {
    const showNotification = (message: string | JSX.Element, type: "success" | "info" | "warning" | "error") => {
        notification[type]({
            message: "Powiadomienie",
            description: message,
            placement: "bottomLeft",
            duration: 4,
        });
    };

    return { showNotification };
}
