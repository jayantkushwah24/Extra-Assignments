// 9. Create a React component that uses the useEffect hook to fetch the product data from the API
// endpoint using the fakeFetch function provided below. The component should use
// the useState hook to store the fetched data and a second state variable to store the sorted data.
// The sorted data should be sorted in descending order by rating.
// 10. Adding on to the previous question, Add a search bar to the component that allows users to filter
// the products by name. The search bar should update the list of displayed products in real-time
// as the user types. The search functionality should be case-insensitive.

import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch9";

export function RenderData() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fakeFetch("https://example.com/api/products")
      .then((response) => {
        if (response.status === 200) {
          const sortedProducts = response.data.products.sort(
            (a, b) => b.rating - a.rating
          );
          setProducts(sortedProducts);
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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>Products</h1>
      <input
        type="text"
        placeholder="Search for products"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ol>
        {filteredProducts.map(({ name, price, quantity, rating }, index) => (
          <li key={index}>
            <p>Name: {name}</p>
            <p>Price: ${price.toFixed(2)}</p>
            <p>Quantity: {quantity}</p>
            <p>Rating: {rating}</p>
            <hr />
          </li>
        ))}
      </ol>
    </>
  );
}
