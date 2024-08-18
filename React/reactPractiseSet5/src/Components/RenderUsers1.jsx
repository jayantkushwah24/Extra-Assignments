// 1. Create a React component where all the users are fetched using fake fetch and listed on the
// DOM. Show the online users in green color and the offline users in red color.
import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch1";
export function RenderUser() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  let id = 0;

  useEffect(() => {
    fakeFetch("https://example.com/api/users/status")
      .then((response) => {
        if (response.status === 200) {
          setUsers(response.data.users);
        } else {
          setError("failed to fetch user");
        }
      })
      .catch(() => {
        setError("An error occurred");
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
      <h1>Online Users</h1>
      <ol>
        {users.map(({ name, status }) => (
          <li key={++id}
          style={{color: status === "Online" ? "green" : "red"}}
          >
            {name} - {status}
          </li>
        ))}
      </ol>
    </>
  );
}
