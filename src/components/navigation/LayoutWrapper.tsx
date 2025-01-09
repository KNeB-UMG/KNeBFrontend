import { ReactNode, useState } from "react";
import { themes, ThemeType } from "../../theme";
import { Layout } from "antd";
import AppSidebar from "./AppSidebar";
import AppNavbar from "./AppNavbar";
import { Content } from "antd/es/layout/layout";
import Footer from "./Footer";


type LayoutWrapperProps = {
    isSidebar: boolean;
    theme: ThemeType;
    toggleTheme: () => void;
    children: ReactNode
};

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ isSidebar, theme, toggleTheme, children }) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: themes[theme].backgroundColor }}>
            {isSidebar ? (
                <AppSidebar
                    theme={theme}
                    collapsed={collapsed}
                    toggleCollapse={toggleCollapse}
                    toggleTheme={toggleTheme}
                />
            ) : (
                <AppNavbar theme={theme} toggleTheme={toggleTheme} />
            )}
            <Layout>
                <Content style={{ backgroundColor: themes[theme].backgroundColor }}>
                    {children}
                </Content>
                <Footer />
            </Layout>
        </Layout>
    );
};

export default LayoutWrapper;
