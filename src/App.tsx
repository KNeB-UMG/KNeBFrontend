import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/auth/Login";
import LayoutWrapper from "./components/navigation/LayoutWrapper";
import { Events } from "./pages/Events";
import { ThemeProvider } from "./hooks/useTheme";
import CustomConfigProvider from "./CustomConfigProvider";

const App: React.FC = () => {
    
    return (
        <ThemeProvider>
            <CustomConfigProvider>
                <Router>
                    <LayoutWrapper>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/events" element={<Events />} />
                        </Routes>
                    </LayoutWrapper>
                </Router>
            </CustomConfigProvider>
        </ThemeProvider>
    );
};

export default App;
