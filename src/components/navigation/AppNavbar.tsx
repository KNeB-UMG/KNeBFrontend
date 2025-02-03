import { Header } from "antd/es/layout/layout";
import { themes, ThemeType } from "../../theme";
import { Menu } from "antd";
import { routes } from "./routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StandardToggleTheme from "../standard/StandardToggleTheme";

type AppNavbarProps = {
    theme: ThemeType;
};

const AppNavbar = (props: AppNavbarProps) => {
    return (
        <Header
            style={{
                backgroundColor: themes[props.theme].primaryColor,
                color: themes[props.theme].textColor,
            }}
        >
                <Menu
                    theme={props.theme}
                    mode="horizontal"
                    style={{
                        backgroundColor: "transparent",
                        color: themes[props.theme].textColor,
                    }}
                    items={[
                        ...routes.map((route) => ({
                            label: route.label,
                            key: route.key,
                            icon: <FontAwesomeIcon icon={route.icon} />,
                        })),
                        {
                            key: 'toggle-theme',
                            label: (<StandardToggleTheme />),
                            icon: null,
                        },
                    ]}
                />
        </Header>
    );
};


export default AppNavbar;