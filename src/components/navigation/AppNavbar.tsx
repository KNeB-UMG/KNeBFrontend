import { Header } from "antd/es/layout/layout";
import { themes, ThemeType } from "../../theme";
import { Button } from "antd";

type AppNavbarProps = {
    theme: ThemeType;
    toggleTheme: () => void;
};

const AppNavbar: React.FC<AppNavbarProps> = ({ theme, toggleTheme }) => {
    return (
        <Header
            style={{
                backgroundColor: themes[theme].primaryColor,
                color: themes[theme].textColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <div style={{ color: themes[theme].textColor }}>Application Navbar</div>
            <Button
                type="text"
                onClick={toggleTheme}
                style={{ color: themes[theme].textColor }}
            >
                Toggle Theme
            </Button>
        </Header>
    );
};


export default AppNavbar;