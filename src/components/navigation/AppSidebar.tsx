import { useState } from "react";
import { themes, ThemeType } from "../../theme";
import { Button, Menu, Tooltip, Layout, Flex } from "antd";
import { routes } from "./routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import StandardToggleTheme from "../standard/StandardToggleTheme";

const { Sider } = Layout;

type AppSidebarProps = {
    theme: ThemeType;
};

const AppSidebar = ({ theme }: AppSidebarProps) => {
    const [expanded, setExpanded] = useState(false);

    const toggleSidebar = () => {
        setExpanded(!expanded);
    };

    const filteredRoutes = routes.filter(route => route.navigationDisplay !== false);

    return (
        <Layout>
            <Sider
                collapsed={!expanded}
                collapsible
                trigger={null}
                width={200}
                theme="light"
                style={{
                    backgroundColor: expanded ? themes[theme].backgroundColor : "transparent",
                    position: "fixed",
                    zIndex: 1000,
                }}
            >
                <Button
                    type="text"
                    icon={<FontAwesomeIcon icon={faBars} size="2x" />}
                    onClick={toggleSidebar}
                    style={{ color: themes[theme].textColor, margin: "16px" }}
                />
                {expanded && (
                    <>
                        <Menu mode="inline" theme="light">
                            {filteredRoutes.map(route => (
                                <Menu.Item
                                    key={route.key}
                                    icon={
                                        (route.tooltip && route.icon) ? (
                                            <Tooltip title={route.tooltip} placement="right">
                                                <FontAwesomeIcon
                                                    style={{ color: themes[theme].textColor }}
                                                    icon={route.icon}
                                                />
                                            </Tooltip>
                                        ) : (
                                            route.icon &&
                                            <FontAwesomeIcon
                                                style={{ color: themes[theme].textColor }}
                                                icon={route.icon}
                                            />
                                        )
                                    }
                                >
                                    {route.label}
                                </Menu.Item>
                            ))}
                        </Menu>
                        <Flex align="center" justify="center">
                            <StandardToggleTheme />
                        </Flex>
                    </>
                )}
            </Sider>
            {expanded && (
                <div
                    onClick={toggleSidebar}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: 999,
                        cursor: "pointer",
                    }}
                />
            )}
        </Layout>
    );
};

export default AppSidebar;
