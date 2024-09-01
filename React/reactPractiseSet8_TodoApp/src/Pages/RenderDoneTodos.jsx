import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

export function RenderDoneTodos() {
  const { getDoneTodos } = useContext(TodoContext);
  const doneTodos = getDoneTodos();

  return (
    <>
      <h1>Done Todos</h1>
      <p>Total Done: {doneTodos.length}</p>
      <ul>
        {doneTodos.map((todo) => (
          <li key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p>Status : {todo.isCompleted ? "Done" : "Not Done"}</p>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
}
