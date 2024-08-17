// 8. Build a React component called MyGadgets that receives an array of products as a prop.
// Render each product's name, description, and price as an ordered list. Create a button below all
// the listings which says “Highlight Expensive Gadget” and on click of the button add a lightgreen
// backgroundColor to the items which has a price more than 50000.

import { useState } from "react";

export function MyGadgets({ arrOfProduct }) {
  const [highlight, setHighlight] = useState(false);
  const handleHighlight = () => {
    setHighlight(true);
  };
  return (
    <>
      <ol>
        {arrOfProduct.map(({ id, name, description, price }) => (
          <li
            key={id}
            style={{
              backgroundColor:
                highlight && price > 50000 ? "lightgreen" : "none",
            }}
          >
            Name: {name}, Description: {description}, Price: {price}
          </li>
        ))}
      </ol>

      <button onClick={handleHighlight}>Highlight Expensive Gadget</button>
    </>
  );
}
