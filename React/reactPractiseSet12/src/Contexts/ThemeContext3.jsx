import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("white");

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "white" ? "black" : "white"));
  };

  return (
    <ThemeContext.Provider value={{ handleChangeTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
