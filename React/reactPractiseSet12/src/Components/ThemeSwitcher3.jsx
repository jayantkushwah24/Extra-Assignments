import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext3";

export function ThemeSwitcher() {
  const { handleChangeTheme, theme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme }}>
      <h1>Theme Switcher</h1>
      <h2>Current Theme : {theme}</h2>
      <button onClick={handleChangeTheme}>
        Change Theme
      </button>
    </div>
  );
}
