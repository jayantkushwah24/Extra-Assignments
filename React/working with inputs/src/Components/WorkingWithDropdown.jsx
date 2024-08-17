import { useState } from "react";

function WorkingWithDropdown() {
  const [color, setColor] = useState("");

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <>
      <h1 style={{ color: color}}>Jayant Kushwah</h1>
      <select onChange={handleChange}>
        <option value="black">Black</option>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
        <option value="brown">Brown</option>
        <option value="orange">Orange</option>
      </select>
    </>
  );
}
export default WorkingWithDropdown;
