// 5. Given an array of todoItems:
// a. Build a React component that takes the todoItems as props and list all the todo tasks.
// b. Add a "Mark as Done" button against each item and toggle isDone property value between
// true and false on click of the button. If isDone is true change the color of that task to red with a
// strikethrough and if it is false remove the strikethrough and the red color.

import { useState } from "react";

export function TodoListMarkasdone({ todoItems }) {
  const [todo, setTodo] = useState(todoItems);
  const handleDone = (id) => {
    setTodo((prevTask) =>
      prevTask.map((task) =>
        task.id == id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <>
      {todo.map(({ id, task, isDone }) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <p
            style={{
              textDecoration: isDone && "line-through",
              color: isDone && "red",
              marginRight: "10px",
            }}
          >
            {task}
          </p>{" "}
          <button onClick={() => handleDone(id)}>
            {isDone ? "Undo" : "Mark as done"}
          </button>
        </div>
      ))}
    </>
  );
}
