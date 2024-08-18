// 6. Create a React component that fetches chat data from an API endpoint using useEffect hook
// and display chat data (name and chat message) as a list on the screen using the useState hook.
// a. Show “Loading Chats…” until your data displays on the DOM.

import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch6";

export function RenderChatData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let id = 0;

  useEffect(() => {
    fakeFetch("https://example.com/api/userchat")
      .then(({ status, message, data }) => {
        if (status === 200) {
          setData(data);
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
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error...</p>;
  }

  return (
    <>
      <ul>
        {data.map(({ name, messages }) => (
          <>
            <li>
              <h1>{name}</h1>
            </li>
            {messages.map((message) => (
              <li key={++id}>
                {message.from} : {message.message}
              </li>
            ))}
          </>
        ))}
      </ul>
    </>
  );
}
