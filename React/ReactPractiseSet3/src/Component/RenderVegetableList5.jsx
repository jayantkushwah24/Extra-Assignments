// 5. Build a React component to display the list of all the vegetables and their pick date as ordered
// list. Create a button which says “Highlight Fresh Vegetables”. On click of the button change the
// color of the vegetable to green whose pick date is ‘2023-03-30’.

import { useState } from "react";
import { vegetables } from "../Data/VegetableList5";

export function RenderVegetableList() {
  const [highlight, setHighlight] = useState(false);
  function handleHighlight() {
    setHighlight(!highlight);
  }
  return (
    <>
      <ol>
        {vegetables.map(({ id, name, pickDate }) => (
          <li
            key={id}
            style={
              pickDate == "2023-03-30" ? { color: highlight && "green" } : null
            }
          >
            Name : {name}, Pick Date : {pickDate}
          </li>
        ))}
      </ol>
      <button onClick={handleHighlight}>Highlight Fresh Vegetables</button>
    </>
  );
}
