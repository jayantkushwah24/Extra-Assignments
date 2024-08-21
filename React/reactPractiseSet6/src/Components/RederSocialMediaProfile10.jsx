// 10. Create a React component that calls the socialMedia profile api and when the page is loaded
// show details of the user and a button follow along with the name of the user on the button. On
// click of that increase the followers count by one and disable the button.

import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch10";

export function RenderSocialMediaProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    fakeFetch("https://example.com/api/profile")
      .then(({ status, data }) => {
        if (status === 200) {
          setProfile(data.profile);
        } else {
          setError("failed to fetch");
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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleFollowBtn = () => {
    setProfile({ ...profile, followers: profile.followers + 1 });
    setIsFollowing(true);
  };

  return (
    <>
      {profile && (
        <div>
          <h1>{profile.name}</h1>
          <p>Age : {profile.age}</p>
          <p>Gender : {profile.gender}</p>
          <p>Email : {profile.email}</p>
          <p>Occupation : {profile.occupation}</p>
          <p>Followers : {profile.followers}</p>
          <p>Followed By : {profile.followedBy}</p>
          {isFollowing == false ? (
            <button onClick={handleFollowBtn}>Follow</button>
          ) : (
            <button>Following</button>
          )}
        </div>
      )}
    </>
  );
}
