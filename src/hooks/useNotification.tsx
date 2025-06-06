import { notification } from "antd";

type NotificationProps = {
  description: string | JSX.Element;
  type: "success" | "info" | "warning" | "error";
  message?: string | JSX.Element;
  placement?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  duration?: number
};

export function useNotification() {
  const showNotification = ({ type, message, description, placement, duration }: NotificationProps) => {
    notification[type]({
      message: message || "Powiadomienie",
      description: description || "Operacja powiodła się",
      placement: placement || "topLeft",
      duration: duration || 4,
    });
  };

  return { showNotification };
}
