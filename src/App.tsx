import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import EventsCalendar from './components/events/EventsCalendar.tsx';
import LoginPage from './pages/LoginPage';
import { ThemeType } from './theme';
import LayoutWrapper from './components/navigation/LayoutWrapper';
import { ConfigProvider } from 'antd';
import pl from 'antd/lib/locale/pl_PL';

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
        <ConfigProvider locale={pl}>
        <Router>
            <LayoutWrapper isSidebar={isSidebar} theme={theme} toggleTheme={toggleTheme}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/events" element={<EventsCalendar />} />
                </Routes>
            </LayoutWrapper>
        </Router>
        </ConfigProvider>
    );
};

export default App;