import { useContext } from "react";
import { UserPreferencesContext } from "../Contexts/UserPreferencesContext5";

export function Notes() {
  const { font } = useContext(UserPreferencesContext);

  return (
    <>
      <h1 style={{ fontSize: font }}>Notes</h1>
      <p style={{ fontSize: font }}>
        Today, I worked on implementing a theme switcher in my React app using
        useContext for global state management. I encountered an error due to
        the improper wrapping of the ThemeProvider around the component tree.
        After fixing it, the switcher worked perfectly, allowing users to toggle
        between light and dark themes.
      </p>
    </>
  );
}
