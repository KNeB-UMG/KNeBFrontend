import Sider from 'antd/es/layout/Sider';
import React from 'react'
import { themes, ThemeType } from '../../theme';
import { Button, Menu } from 'antd';
import { routes } from './routes';


type AppSidebarProps = {
    theme: ThemeType;
    collapsed: boolean;
    toggleCollapse: () => void;
    toggleTheme: () => void;
};

const AppSidebar: React.FC<AppSidebarProps> = ({ theme, collapsed, toggleCollapse, toggleTheme }) => {
    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={toggleCollapse}
            style={{
                backgroundColor: themes[theme].backgroundColor,
                color: themes[theme].textColor,
                minHeight: '100vh',
            }}
        >
            <Menu
                theme={theme}
                mode="inline"
                items={routes}
                style={{
                    backgroundColor: themes[theme].backgroundColor,
                    color: themes[theme].textColor,
                }}
            />
            <Button
                type="text"
                onClick={toggleTheme}
                style={{ color: themes[theme].textColor, marginTop: 16 }}
            >
                Toggle Theme
            </Button>
        </Sider>
    );
};

export default AppSidebar;
