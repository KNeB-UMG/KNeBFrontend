import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/auth/Login";
import LayoutWrapper from "./components/navigation/LayoutWrapper";
import { Events } from "./pages/Events";
import { ThemeProvider } from "./hooks/useTheme";
import CustomConfigProvider from "./CustomConfigProvider";
import Register from "./pages/auth/Register";
import { Provider } from "react-redux";
import { store } from "./store";
import Settings from "./pages/Settings";

const App: React.FC = () => {

    return (
        <Provider store={store}>
            <ThemeProvider>
                <CustomConfigProvider>
                    <Router>
                        <LayoutWrapper>
                            <Routes>
                                <Route path="/" element={<Main />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/events" element={<Events />} />
                                <Route path="/settings" element={<Settings />} />
                            </Routes>
                        </LayoutWrapper>
                    </Router>
                </CustomConfigProvider>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
