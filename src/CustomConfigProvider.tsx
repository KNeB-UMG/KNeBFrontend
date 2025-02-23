import React from "react";
import { ConfigProvider } from "antd";
import locale from "antd/es/locale/pl_PL";
import { useTheme } from "./hooks/useTheme";
import { themes } from "./theme";

const CustomConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { theme } = useTheme();

    return (
        <ConfigProvider
            locale={locale}
            theme={{
                token: {
                    colorPrimary: themes[theme]?.primaryColor,
                    colorText: themes[theme]?.textColor,
                    colorBgBase: themes[theme]?.backgroundColor,
                },
                components: themes[theme]?.antd?.components,
            }}
        >
            {children}
        </ConfigProvider>
    );
};

export default CustomConfigProvider;
