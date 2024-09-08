import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>Welcome To Video Library</h1>
      <h2>To browse all videos, click the below button or go to video page</h2>
      <button>
        {" "}
        <NavLink to="/videos">Explore Videos</NavLink>{" "}
      </button>
    </>
  );
}
