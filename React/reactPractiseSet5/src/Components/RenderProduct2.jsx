// 2. Create a React component that fetches products data from an API endpoint
// using useEffect hook and display products (name, price, quantity) as a list on the screen using
// the useState hook.
// a. Add a button, on click of which it displays only the items with more than 20 as quantity.
// 3. In the above question after you have listed all the items, add a button which says “Filter by
// Price”. On click of the button, display only the items with price less than 100.

import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch2";

export function RenderUserProduct() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let id = 0;

  useEffect(() => {
    fakeFetch("https://example.com/api/products")
      .then((response) => {
        if (response.status === 200) {
          setProduct(response.data.products);
        } else {
          setError("an error occurred while fetching");
        }
      })
      .catch(() => {
        setError("error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error...</p>;
  }

  const handleFilterProducts = (quan) => {
    setProduct(product.filter((product) => product.quantity > quan));
  };

  const handleFilterByPrice = (price) => {
    setProduct(product.filter((product) => product.price < price));
  };

  return (
    <>
      <h1>Products</h1>
      <button onClick={() => handleFilterProducts(20)}>
        Show products with quantity more than 20
      </button>
      <button onClick={() => handleFilterByPrice(100)}>Filter by Price</button>
      <ul>
        {product.map(({ name, price, quantity }) => (
          <li key={++id}>
            {name} - Rs.{price} - Quantity: {quantity}
          </li>
        ))}
      </ul>
    </>
  );
}
