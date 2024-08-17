import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
  },
  {
    id: 2,
    name: "Product 2",
    price: 5.99,
  },
  {
    id: 3,
    name: "Product 3",
    price: 15.99,
  },
  {
    id: 4,
    name: "Product 4",
    price: 7.99,
  },
  {
    id: 5,
    name: "Product 5",
    price: 12.99,
  },
];

function SortByPrices() {
  const [product, setProduct] = useState([...products]);

  function handleSortLowToHigh() {
    const sortedList = [...product].sort((a, b) => a.price - b.price);
    setProduct(sortedList);
  }
  function handleSortHightoLow() {
    const sortedList = [...product].sort((a, b) => b.price - a.price);
    setProduct(sortedList);
  }

  return (
    <>
      <h1>Product List</h1>
      Sort by Price : <button onClick={handleSortHightoLow}> High to Low</button>
      <button onClick={handleSortLowToHigh}>Low to High</button>
      {product.map(({ id, name, price }) => (
        <>
          <p key={id}>
            Name : {name} Price : {price}
          </p>
        </>
      ))}
    </>
  );
}

export default SortByPrices;
