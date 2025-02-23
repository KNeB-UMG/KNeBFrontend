import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import LayoutWrapper from "./components/navigation/LayoutWrapper";
import { EventsPage } from "./pages/EventsPage";
import { ThemeProvider } from "./hooks/useTheme";
import CustomConfigProvider from "./CustomConfigProvider";

const App: React.FC = () => {
    
    return (
        <ThemeProvider>
            <CustomConfigProvider>
                <Router>
                    <LayoutWrapper>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/events" element={<EventsPage />} />
                        </Routes>
                    </LayoutWrapper>
                </Router>
            </CustomConfigProvider>
        </ThemeProvider>
    );
};

export default App;
