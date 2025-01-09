import { Header } from "antd/es/layout/layout";
import { themes, ThemeType } from "../../theme";
import { Button, Menu, Space } from "antd";
import { routes } from "./routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AppNavbarProps = {
    theme: ThemeType;
    toggleTheme: () => void;
};

const AppNavbar: React.FC<AppNavbarProps> = ({ theme, toggleTheme }) => {
    return (
        <Header
            style={{
                backgroundColor: themes[theme].primaryColor,
                color: themes[theme].textColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Space>
                <Menu
                    theme={theme}
                    mode="horizontal"
                    style={{
                        backgroundColor: "transparent",
                        color: themes[theme].textColor,
                        borderBottom: "none",
                    }}
                >
                    {routes.map((route) => (
                        <Menu.Item
                            key={route.key}
                            icon={
                                <FontAwesomeIcon style={{ color: themes[theme].textColor }} icon={route.icon} />
                            }
                        >
                            {route.label}
                        </Menu.Item>
                    ))}
                </Menu>
            </Space>
            <Button
                type="text"
                onClick={toggleTheme}
                style={{ color: themes[theme].textColor }}
            >
                Toggle Theme
            </Button>
        </Header>
    );
};


export default AppNavbar;