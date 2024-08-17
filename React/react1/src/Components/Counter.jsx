import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    return setCount((count) => count + 1);
  };
  const decrement = () => {
    return setCount((count) => count - 1);
  };
  const reset = () => {
    return setCount((count) => 0);
  };
  return (
    <>
      <div>
        <h1 style={{ color: count > 10 ? "red" : "black", display: "flex" }}>
          {count}
        </h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}
