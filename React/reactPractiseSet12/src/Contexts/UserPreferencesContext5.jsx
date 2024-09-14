import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const UserPreferencesContext = createContext();

export function UserPreferencesProvider({ children }) {
  const [font, setFont] = useState("20px");
  const [color, setColor] = useState("white");

  const handleSetFontSize = (value) => {
    if (value === "small") {
      setFont("10px");
    } else if (value === "medium") {
      setFont("20px");
    } else if (value === "large") {
      setFont("30px");
    }
  };
  const handleChangeColor = (value) => {
    if (value === "white") {
      setColor("white");
    } else if (value === "black"){
      setColor("black");
    }
  };

  return (
    <>
      <UserPreferencesContext.Provider
        value={{ handleChangeColor, handleSetFontSize, font, color }}
      >
        {children}
      </UserPreferencesContext.Provider>
    </>
  );
}
UserPreferencesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
