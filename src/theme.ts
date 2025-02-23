export const themes = {
  light: {
    primaryColor: "#1677FF",
    secondaryColor: "#E6F4FF",
    backgroundColor: "#FFFFFF",
    textColor: "#000000",
    hoverColor: "#1677FF",
    spacing: {
      xss: "4px",
      xs: "8px",
      md: "12px",
      lg: "16px",
      hg: "20px",
    },
    boxShadow: "0px 4px 19.9px 0px #00000040",
    antd: {
      components: {
        Typography: {
          colorText: "#000000",
        },
      },
    },
  },
  dark: {
    primaryColor: "#1677FF",
    secondaryColor: "#001529",
    backgroundColor: "#001529",
    textColor: "#FFFFFF",
    hoverColor: "#FFFFFF",
    spacing: {
      xss: "4px",
      xs: "8px",
      md: "12px",
      lg: "16px",
      hg: "20px",
    },
    boxShadow: "0px 4px 19.9px 0px rgba(255, 255, 255, 0.25)",
    antd: {
      components: {
        Typography: {
          colorText: "#FFFFFF",
        },
      },
    },
  },
};

export type ThemeType = 'light' | 'dark';
