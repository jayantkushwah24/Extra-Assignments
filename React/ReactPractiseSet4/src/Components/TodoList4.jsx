// 4. Given an array of todoItems:
// a. Build a React component that takes the todoItems as props and list all the todo tasks.
// b. if isDone is true then show the item with a strikethrough.
// c. Add a X button against each item and remove that task from the list on click of the button.

import { useState } from "react";

export function TodoList({ todoItems }) {
  const [todo , setTodo] = useState(todoItems);
  const removeItem = (id) =>{
    setTodo( todo.filter( (item) => item.id != id));
  }
  return (
    <>
      {todo.map(({ id, task, isDone }) => (
        <div style={{ display: "flex" }}>
          {" "}
          <p style={{ textDecoration: isDone && "line-through" }}>{task}</p>
          <button onClick={() => removeItem(id)}>X</button>
        </div>
      ))}
    </>
  );
}
