// 2. Create a React component that calls the todo api and display the todos in an unordered list and
// show the todos as a list. The todo should display a heading with a little description of what that
// todo is about. Under that, it should display all the tasks to be done as a list.

import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch2";

export function RenderTodo() {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let index = 0;

  useEffect(() => {
    fakeFetch("https://example.com/api/todos")
      .then(({ status, data }) => {
        if (status === 200) {
          setTodo(data.todos);
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
      <ul style={{ listStyle: "none" }}>
        {todo.map(({ title, desc, todos }) => (
          <div key={++index}>
            <li>
              {" "}
              <h2>
                {title} : {desc}
              </h2>{" "}
            </li>
            <ol key={++index}>
              {todos.map((todo) => (
                <li key={++index}>{todo}</li>
              ))}
            </ol>
            <hr />
          </div>
        ))}
      </ul>
    </>
  );
}
