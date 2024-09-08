import { useContext } from "react";
import { BookContext } from "../Context/BookContext2";

export function Profile() {
  const { profile } = useContext(BookContext);
  return (
    <>
      <h1>Profile</h1>
      <img
        src={profile.img}
        alt="img"
        title="Profile"
        style={{ height: "400px", width: "400px" }}
      />
      <h2>Name : {profile.name}</h2>
      <p>Bio : {profile.bio}</p>
    </>
  );
}
