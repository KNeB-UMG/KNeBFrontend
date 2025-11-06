interface ThemeInterface {
    primary: string;
    background: string;
    cardBackground: string;
    text: string;
}

const lightTheme: ThemeInterface = {
    primary: '#1677FF',
    background: '#F9F9F9',
    cardBackground: "#F9F9F9",
    text: '#131313',
}

const darkTheme: ThemeInterface = {
    primary: '#1677FF',
    background: '#001529',
    cardBackground: "#001d36",
    text: '#F3F3F3',
}

export default {
    lightTheme,
    darkTheme,
}