import { useContext } from "react";
import { UserPreferencesContext } from "../Contexts/UserPreferencesContext5";

export function Profile() {
  const { font } = useContext(UserPreferencesContext);

  return (
    <>
      <h1 style={{ fontSize: font }}>Profile</h1>
      <h2 style={{ fontSize: font }}>Name : Jayant Kushwah</h2>
      <h2 style={{ fontSize: font }}>Role : Software Engineer</h2>
    </>
  );
}
