import { ReactNode } from "react";
import { themes } from "../../theme";
import { Layout } from "antd";
import AppSidebar from "./AppSidebar";
import AppNavbar from "./AppNavbar";
import { Content } from "antd/es/layout/layout";
import Footer from "./Footer";
import { useTheme } from "../../hooks/useTheme";
import { useWindowSize } from "../../hooks/useWindowSize";

type LayoutWrapperProps = {
    children: ReactNode
};

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {

    const { theme } = useTheme()
    const { isMobile } = useWindowSize()

    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: themes[theme].backgroundColor }}>
            {isMobile ? (
                <AppSidebar theme={theme}/>
            ) : (
                <AppNavbar theme={theme} />
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
