import { notification } from "antd";

export function useNotification() {
    const showNotification = (description: string | JSX.Element, type: "success" | "info" | "warning" | "error", message?:string | JSX.Element,) => {
        notification[type]({
            message: message || "Powiadomienie",
            description: description || "Operacja powiodła się",
            placement: "topLeft",
            duration: 4,
        });
    };

    return { showNotification };
}
