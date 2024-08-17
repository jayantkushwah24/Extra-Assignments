// 3. Given an array of items:
// a. Build a React component that displays a list of items. Display fruits in orange color and
// vegetables in green color.
// b. Create two buttons to filter the items by their category using the useState hook.

import { useState } from "react";
import { itemList } from "../Data/ItemList3";

export function RenderItems() {
  const [categoryName, setCategoryName] = useState("All");

  const handleCategoryChange = (category) => {
    setCategoryName(category);
  };

  // Filter the items based on the selected category
  const filteredItems =
    categoryName === "All"
      ? itemList
      : itemList.filter(({ category }) => category === categoryName);

  return (
    <>
      <button onClick={() => handleCategoryChange("All")}>All</button>
      <button onClick={() => handleCategoryChange("Fruit")}>Fruits</button>
      <button onClick={() => handleCategoryChange("Vegetable")}>
        Vegetable
      </button>

      <ul>
        {filteredItems.map(({ id, name, category }) => (
          <li
            key={id}
            style={{ color: category === "Fruit" ? "orange" : "green" }}
          >
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}
