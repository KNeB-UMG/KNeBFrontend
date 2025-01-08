import Sider from "antd/es/layout/Sider";
import React from "react";
import { themes, ThemeType } from "../../theme";
import { Button, Flex, Menu, Tooltip } from "antd";
import { routes } from "./routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type AppSidebarProps = {
    theme: ThemeType;
    collapsed: boolean;
    toggleCollapse: () => void;
    toggleTheme: () => void;
};

const AppSidebar: React.FC<AppSidebarProps> = ({
    theme,
    collapsed,
    toggleCollapse,
    toggleTheme,
}) => {
    return (
        <>
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: collapsed ? "80px" : "200px",
                    height: "100%",
                    backgroundColor: themes[theme].backgroundColor,
                    color: themes[theme].textColor,
                    zIndex: 1000,
                    transition: "width 0.3s",
                }}
            >
                <Sider
                    collapsible
                    collapsed={collapsed}
                    trigger={null}
                    style={{
                        backgroundColor: "transparent",
                        color: themes[theme].textColor,
                        minHeight: "100vh",
                    }}
                >
                    <Flex justify="center" style={{ padding: "16px 0" }}>
                        <Button
                            type="text"
                            icon={<FontAwesomeIcon icon={faBars} size="2x" />}
                            onClick={toggleCollapse}
                            style={{ color: themes[theme].textColor }}
                        />
                    </Flex>
                    <Menu
                        mode="inline"
                        style={{
                            backgroundColor: "transparent",
                        }}
                    >
                        {routes.map((route) => (
                            <Menu.Item
                                key={route.key}
                                icon={
                                    <Tooltip
                                        title={collapsed ? route.tooltip : null}
                                        placement="right"
                                    >
                                        <div>
                                            <FontAwesomeIcon style={{ color: themes[theme].textColor }} icon={route.icon} />
                                        </div>
                                    </Tooltip>
                                }
                            >
                                {collapsed ? null : route.label}
                            </Menu.Item>
                        ))}
                    </Menu>
                    <Button
                        type="text"
                        onClick={toggleTheme}
                        style={{
                            color: themes[theme].textColor,
                            marginTop: 16,
                        }}
                    >
                        Toggle Theme
                    </Button>
                </Sider>
            </div>
            {collapsed ? null : (
                <div
                    onClick={toggleCollapse}
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
        </>
    );
};

export default AppSidebar;