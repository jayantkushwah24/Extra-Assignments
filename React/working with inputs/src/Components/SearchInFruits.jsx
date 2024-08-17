import React, { useState } from "react";

const fruits = [
  { name: "Apple", color: "Red", quantity: 10 },
  { name: "Banana", color: "Yellow", quantity: 5 },
  { name: "Orange", color: "Orange", quantity: 3 },
  { name: "Grape", color: "Purple", quantity: 7 },
];

function SearchInFruits() {
  const [fruitData, setFruitData] = useState();
  const [userInput , setUserInput] = useState();

  const handleUserInput = (event) =>{
    setUserInput(event.target.value)
  }

  const handleSearch = (event) => {
    const fruitData =  fruits.find((f) => f.name == userInput);
    setFruitData(fruitData);  
  };

  return (
    <React.Fragment>
      <label htmlFor="">Search for the fruits</label>
      <br />
      <input type="text" placeholder="Type here" onChange={handleUserInput} />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
      {fruitData ? (
        <div>
          <p>Name : {fruitData.name}</p>
          <p>Color : {fruitData.color}</p>
          <p>Quantity : {fruitData.quantity}</p>
        </div>
      ) : (
        <p>Not found</p>
      )}
    </React.Fragment>
  );
}
export default SearchInFruits;
