// 4. Create a React component that fetches a list of users from an API endpoint
// using useEffect hook and displays the name, email, and website of each user on the screen
// using the useState hook. Add a dropdown which filters the users by company name.

import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch4";

export function RenderUsersByCompany() {
  const [userData, setUserData] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let index = 0;

  useEffect(() => {
    fakeFetch("https://example.com/api/users")
      .then(({ status, data }) => {
        if (status === 200) {
          setUserData(data);
          setFilteredUsers(data);
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
  const handleFilterUser = (event) => {
    const company = event.target.value;
    setSelectedCompany(company);
    if (company === "All") {
      setFilteredUsers(userData);
    } else {
      setFilteredUsers(userData.filter((user) => user.company == company));
    }
  };
  return (
    <>
      <p>Filter By Company</p>
      <select value={selectedCompany} onChange={handleFilterUser}>
        <option value="All">All</option>
        <option value="ABC Inc">ABC Inc</option>
        <option value="XYZ Corp">XYZ Corp</option>
        <option value="ACME Corp">ACME Corp</option>
      </select>
      <ul>
        {filteredUsers.map(({ name, email, website, company }) => (
          <li key={++index}>
            <p>{name}</p>
            <p>{email}</p>
            <p>{website}</p>
            <p>{company}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
