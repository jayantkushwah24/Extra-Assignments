// 2. Create a React component that fetches user data from an API endpoint using useEffect hook
// and displays the user's name, email, and phone number on the screen using the useState hook.
// Add a button which toggles the display of the user's address (street, suite, city, zipcode).

import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch2";

export function RenderUserDetails() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddress, setShowAddress] = useState(false); 

  useEffect(() => {
    fakeFetch("https://example.com/api/user")
      .then(({ status, data }) => {
        if (status === 200) {
          setUserData(data);
        } else {
          setError("Failed to fetch user data.");
        }
      })
      .catch(() => {
        setError("An error occurred while fetching user data.");
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

  const toggleAddressDisplay = () => {
    setShowAddress(!showAddress);
  };

  return (
    <>
      <h1>User Details</h1>
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
        <p>Phone: {userData.phone}</p>
        <button onClick={toggleAddressDisplay}>
          {showAddress ? "Hide Address" : "Show Address"}
        </button>
        {showAddress && (
          <div>
            <p>Street: {userData.address.street}</p>
            <p>Suite: {userData.address.suite}</p>
            <p>City: {userData.address.city}</p>
            <p>Zipcode: {userData.address.zipcode}</p>
          </div>
        )}
      </div>
    </>
  );
}
