import { NavLink, Route, Routes } from "react-router-dom";
import { Notes } from "../Pages/Notes5";
import { Settings } from "../Pages/Settings5";
import { Profile } from "../Pages/Profile5";
import { useContext } from "react";
import { UserPreferencesContext } from "../Contexts/UserPreferencesContext5";

export function PreferencesForm() {
  const { color } = useContext(UserPreferencesContext);

  return (
    <div
      style={{
        backgroundColor: color === "Dark" ? "#333" : "#fff",
        color: color === "Dark" ? "#fff" : "#000",
      }}
    >
      <nav>
        <NavLink
          to="/profile"
          style={{ color: color === "Dark" ? "#fff" : "#000" }}
        >
          Profile
        </NavLink>
        {" || "}
        <NavLink
          to="/notes"
          style={{ color: color === "Dark" ? "#fff" : "#000" }}
        >
          Notes
        </NavLink>
        {" || "}
        <NavLink
          to="/settings"
          style={{ color: color === "Dark" ? "#fff" : "#000" }}
        >
          Settings
        </NavLink>
      </nav>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
