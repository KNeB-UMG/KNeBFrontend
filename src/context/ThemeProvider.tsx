import React, { useState, useEffect } from "react";

import { ThemeContext } from "./ThemeContext";

import themes from "../styles/themes/themes";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // get the theme from the localStorage or use the light theme as default
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem("KNeBtheme");

      if (stored === "dark") return themes.darkTheme;
      if (stored === "light") return themes.lightTheme;
    } catch {
      return themes.lightTheme;
    }
    return themes.lightTheme;
  });

  // toggle the theme and save the new theme to the localStorage
  const toggleTheme = () => {
    const newTheme = theme === themes.lightTheme ? themes.darkTheme : themes.lightTheme;

    setTheme(newTheme);
    localStorage.setItem("KNeBtheme", newTheme === themes.darkTheme ? "dark" : "light");
  };

  // apply theme to the root element so that it can be used in the CSS variables
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme === themes.darkTheme ? "dark" : "light");

    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--card-background", theme.cardBackground);
    root.style.setProperty("--text", theme.text);
    root.style.setProperty('--box-shadow', theme.boxShadow)
  }, [theme]);

  // provide the theme and toggleTheme function to the context
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
