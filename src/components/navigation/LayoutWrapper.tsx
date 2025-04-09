import { ReactNode } from "react";
import { themes } from "../../theme";
import { Layout } from "antd";
import AppSidebar from "./AppSidebar";
import AppNavbar from "./AppNavbar";
import { Content } from "antd/es/layout/layout";
import Footer from "./Footer";
import { useTheme } from "../../hooks/useTheme";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useLocation } from "react-router-dom";
import { routes } from "./routes";

type LayoutWrapperProps = {
    children: ReactNode
};

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
    const { theme } = useTheme();
    const { isMobile } = useWindowSize();
    const location = useLocation();

    const currentRoute = routes.find(route => location.pathname.startsWith(`/${route.key}`));
    const layoutType = currentRoute?.layout ?? 'with-nav';

    const showNavigation = layoutType === 'with-nav';

    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: themes[theme].backgroundColor }}>
            {showNavigation && (
                isMobile ? <AppSidebar theme={theme}/> : <AppNavbar theme={theme} />
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
