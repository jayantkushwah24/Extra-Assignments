// 8. Create a React component that calls the userProfile api and list the details of the user when the
// page loads. Create a button saying Update name and on click of that button, change the name of
// the user.

import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch8";

export function UpdateUserProfile() {
  const [profile, setProfile] = useState(null); // Initialize as null since we're expecting a single object
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fakeFetch("https://example.com/api/profile")
      .then(({ status, data }) => {
        if (status === 200) {
          setProfile(data.profiles);
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

  const handleUpdateName = () => {
    if (profile) {
      setProfile({ ...profile, name: "Jayant" });
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>User Profile</h1>
      {profile && (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Age: {profile.age}</p>
          <p>Gender: {profile.gender}</p>
          <p>Occupation: {profile.occupation}</p>
        </div>
      )}
      <button onClick={handleUpdateName}>Update Name</button>
    </>
  );
}
