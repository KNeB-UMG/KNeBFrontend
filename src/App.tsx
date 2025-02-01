import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import LayoutWrapper from "./components/navigation/LayoutWrapper";
import locale from "antd/es/locale/pl_PL";
import { ConfigProvider } from "antd";
import { EventsPage } from "./pages/EventsPage";
import { ThemeProvider } from "./hooks/useTheme";

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <ConfigProvider locale={locale}>
                <Router>
                    <LayoutWrapper>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/events" element={<EventsPage />} />
                        </Routes>
                    </LayoutWrapper>
                </Router>
            </ConfigProvider>
        </ThemeProvider>
    );
};

export default App;
