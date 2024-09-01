
import { NavLink } from "react-router-dom";

export function RenderHomePage() {
  return (
    <>
      <h1>Welcome Jayant</h1>
      <NavLink to="/questions">Show Question List</NavLink>
    </>
  );
}
