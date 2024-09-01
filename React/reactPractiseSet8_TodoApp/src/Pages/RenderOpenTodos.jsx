import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

export function RenderOpenTodos() {
  const { getOpenTodos } = useContext(TodoContext);
  const openTodos = getOpenTodos(); 

  return (
    <>
      <h1>Open Todos</h1>
      <p>Total Open Todos: {openTodos.length}</p>
      <ol>
        {openTodos.map(({ id, title, description , isCompleted }) => (
          <li key={id}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Status: {isCompleted ? "Done" : "Not Done"}</p>
            <hr />
          </li>
        ))}
      </ol>
    </>
  );
}
