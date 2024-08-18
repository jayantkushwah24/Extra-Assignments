// 4. Create a React component that fetches a user’s data from an API endpoint using useEffect hook
// and displays the data (name, image, likes, comments) on the screen using the useState hook.
// Pass heading (”User Profile”) and width and height for image as props to the component.

import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch4";

export function RenderUserProfile({ heading, h, w }) {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let id = 0;

  useEffect(() => {
    fakeFetch("https://example.com/api/user")
      .then(({ status, message, data }) => {
        if (status === 200) {
          setProfile(data);
        } else {
          setError("Failed to fetch");
        }
      })
      .catch(() => {
        setError("an error occurred");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>error...</p>;
  }

  return (
    <>
      <h1>{heading}</h1>
      <div>
        <img
          src={profile.image}
          alt={profile.name}
          style={{ height: h, width: w }}
        />
        <h3>Name : {profile.name}</h3>
        <h3>Likes: {profile.likes}</h3>
        <h3>Comments: {profile.comments}</h3>
      </div>
    </>
  );
}
