// 1. Create a React component that calls the product api and has the same number of buttons as the
// items in product. On Click of each button show the details of that card only. Example: In the
// below API we have three products and three buttons.

import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch1";

export function RenderProductDetails() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fakeFetch("https://example.com/api/products")
      .then(({ status, data }) => {
        if (status === 200) {
          setProducts(data.products);
        } else {
          setError("Failed to fetch");
        }
      })
      .catch(() => {
        setError("An error occurred");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleProductClick = (productName) => {
    const product = products.find((p) => p.name === productName);
    setSelectedProduct(product);
  };

  return (
    <>
      {products.map((product) => (
        <button
          key={product.name}
          onClick={() => handleProductClick(product.name)}
        >
          Show {product.name}
        </button>
      ))}

      {selectedProduct && (
        <div>
          <img src={selectedProduct.src} alt="Product" />
          <p>Name: {selectedProduct.name}</p>
          <p>Price: {selectedProduct.price}</p>
          <p>Description: {selectedProduct.desc}</p>
        </div>
      )}
    </>
  );
}
