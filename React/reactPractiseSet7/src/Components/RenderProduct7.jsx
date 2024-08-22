// 7. Create a React component that fetches a list of products from an e-commerce API endpoint
// using useEffect hook and displays the product name, description, price, and quantity on the
// screen using the useState hook. Add a button which allows the user to sort the products by price
// (lowest to highest).
// 8. Adding on to the previous question, There should be three buttons for this purpose: "Low to
// High", "High to Low", and "Reset". When the user clicks on "Low to High", the products should
// be sorted by price in ascending order. When the user clicks on "High to Low", the products
// should be sorted by price in descending order. When the user clicks on "Reset", the products
// should be displayed in their original order.

import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch7";

export function RenderProductList() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fakeFetch("https://example.com/api/products")
      .then((response) => {
        if (response.status === 200) {
          setProducts(response.data.products);
          setSortedProducts(response.data.products);
        } else {
          setError("Failed to fetch products");
        }
      })
      .catch(() => {
        setError("An error occurred while fetching products");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const sortByPriceLowtoHigh = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setSortedProducts(sortedProducts);
  };
  const sortByPriceHighToLow = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setSortedProducts(sortedProducts);
  };
  const reset = () => {
    setSortedProducts(products);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>Products</h1>
      <button onClick={sortByPriceLowtoHigh}>Low to High</button>
      <button onClick={sortByPriceHighToLow}>High to Low</button>
      <button onClick={reset}>Reset</button>
      <ul>
        {sortedProducts &&
          sortedProducts.map(
            ({ name, description, price, quantity }, index) => (
              <li key={index}>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>${price.toFixed(2)}</p>
                <p>Quantity: {quantity}</p>
              </li>
            )
          )}
      </ul>
    </>
  );
}
