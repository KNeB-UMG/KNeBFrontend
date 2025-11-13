interface ThemeInterface {
    primary: string;
    background: string;
    cardBackground: string;
    text: string;
    boxShadow: string,
}

const lightTheme: ThemeInterface = {
    primary: '#1677FF',
    background: '#F9F9F9',
    cardBackground: "#F9F9F9",
    text: '#131313',
    boxShadow: 'rgba(0, 0, 0, 0.3)'
}

const darkTheme: ThemeInterface = {
    primary: '#1677FF',
    background: '#001529',
    cardBackground: "#001d36",
    text: '#F3F3F3',
    boxShadow: 'rgba(0, 0, 0, 0.6)'
}

export default {
    lightTheme,
    darkTheme,
}