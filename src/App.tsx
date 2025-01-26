import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import { ThemeType } from './theme';
import LayoutWrapper from './components/navigation/LayoutWrapper';
import locale from 'antd/es/locale/pl_PL';
import { ConfigProvider } from 'antd';
import { EventsPage } from './pages/EventsPage.tsx';

const App: React.FC = () => {
    const [theme, setTheme] = useState<ThemeType>('light');
    const [isSidebar, setIsSidebar] = useState<boolean>(true);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSidebar(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <ConfigProvider locale={locale}>
            <Router>
                <LayoutWrapper isSidebar={isSidebar} theme={theme} toggleTheme={toggleTheme}>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/events" element={<EventsPage />} />
                    </Routes>
                </LayoutWrapper>
            </Router>
        </ConfigProvider>
    );
};

export default App;