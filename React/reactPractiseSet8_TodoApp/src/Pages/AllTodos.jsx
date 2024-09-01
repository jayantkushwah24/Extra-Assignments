import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

export function RenderAllTodos() {
  const { todos , handleAddToDone } = useContext(TodoContext);
  return (
    <>
      <h1>All Todos</h1>
      <ol>
        {todos &&
          todos.map(({ id, title, description, isCompleted }) => (
            <li key={id}  >
              <h2 style={{ textDecoration: isCompleted && "line-through"}}>{title}</h2>
              <p style={{ textDecoration: isCompleted && "line-through"}}>{description}</p>
              <p>Status : {isCompleted ? "Done" : "Not Done"}</p>
              <button onClick={() => handleAddToDone(id)}>Mark as done</button>
              <hr />
            </li>
          ))}
      </ol>
    </>
  );
}