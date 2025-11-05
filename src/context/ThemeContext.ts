import React from "react";

import themes from "../styles/themes/themes";

export const ThemeContext = React.createContext({
  theme: themes.lightTheme,
  toggleTheme: () => {},
});

export default ThemeContext;


