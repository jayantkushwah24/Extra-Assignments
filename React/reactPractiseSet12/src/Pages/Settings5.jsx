import { useContext } from "react";
import { UserPreferencesContext } from "../Contexts/UserPreferencesContext5";

export function Settings() {
  const { handleSetFontSize, handleChangeColor } = useContext(UserPreferencesContext);

  return (
    <>
      <h1>Preference Form</h1>

      {/* Font Size Selector */}
      <label>Font Size : </label>
      <select onChange={(e) => handleSetFontSize(e.target.value)}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      {" "}

      {/* Color Scheme Selector */}
      <label>Color Scheme : </label>
      <select onChange={(e) => handleChangeColor(e.target.value)}>
        <option value="white">Light</option>
        <option value="black">Dark</option>
      </select>
    </>
  );
}
