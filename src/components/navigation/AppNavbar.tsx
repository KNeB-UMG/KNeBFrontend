import { Header } from "antd/es/layout/layout";
import { Menu } from "antd";
import { routes } from "./routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeType } from "../../theme";
import StandardToggleTheme from "../standard/StandardToggleTheme";
import StandardKnebLogo from "../standard/StandardKnebLogo";

type AppNavbarProps = {
    theme: ThemeType;
};

const AppNavbar = ({ theme }: AppNavbarProps) => {
    const menuItems = routes
        .filter(route => route.navigationDisplay !== false)
        .map(route => ({
            label: route.label,
            key: route.key,
            icon: route.icon ? <FontAwesomeIcon icon={route.icon} /> : undefined,
        }));

    return (
        <Header
            style={{
                position: "absolute",
                top: 30,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                zIndex: 1000,
                backgroundColor: "transparent",
            }}
        >
            <Menu
                mode="horizontal"
                theme={theme}
                items={[
                    {
                        key: 'logo',
                        label: (<StandardKnebLogo size="small"/>),
                        icon: null,
                    },
                    ...menuItems,
                    {
                        key: 'toggle-theme',
                        label: (<StandardToggleTheme />),
                        icon: null,
                    },
                ]}
                style={{
                    borderRadius: "50px",
                    padding: "0 30px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                }}
            />
        </Header>
    );
};

export default AppNavbar;
