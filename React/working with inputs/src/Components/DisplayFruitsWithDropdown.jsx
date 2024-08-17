import { useState } from "react";

const fruits = [
  { id: 1, category: "Apple", name: "Apple Shimla" },
  { id: 2, category: "Apple", name: "Kashmiri Apple" },
  { id: 3, category: "Apple", name: "Ambri Apple" },
  { id: 4, category: "Banana", name: "Banana Robusta" },
  { id: 5, category: "Banana", name: "Raw Banana Green" },
  { id: 6, category: "Orange", name: "Orange Indian" },
  { id: 7, category: "Orange", name: "Orange USA" },
  { id: 8, category: "Grapes", name: "Grapes Black" },
  { id: 9, category: "Grapes", name: "Grapes Seedless" },
  { id: 10, category: "Mango", name: "Badami" },
  { id: 11, category: "Mango", name: "Alphonso" },
  { id: 12, category: "Mango", name: "Ratnagiri" },
];

function DisplayFruitsWithDropdown() {
  const [categoryFruits, setCategory] = useState([]);

  const handleCategory = (event) => {
    const filterByCategory = event.target.value === "All" ? fruits : fruits.filter(
      (c) => c.category === event.target.value
    );
    setCategory(filterByCategory);
  };

  return (
    <>
      <h1>Get Fruit's Category</h1>
      <select name="" id="" onChange={handleCategory}>
        <option value="">Select an option</option>
        <option value="All">All</option>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Orange">Orange</option>
        <option value="Grapes">Grapes</option>
        <option value="Mango">Mango</option>
      </select>
      <div>
        {categoryFruits.map(({ id, category, name }) => (
          <p>{name}</p>
        ))}
      </div>
    </>
  );
}
export default DisplayFruitsWithDropdown;
