import { useContext, useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch1";
import { Link } from "react-router-dom";
import { CartContext } from "../App";

export function Home() {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { handleAddItemToCart , handleAddItemToWishlist } = useContext(CartContext);

  useEffect(() => {
    fakeFetch("https://example.com/api/products")
      .then(({ status, data }) => {
        if (status === 200) {
          setProduct(data.products);
        } else {
          setError("failed to fetch");
        }
      })
      .catch(() => {
        setError("404 : Page Not Found");
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
  return (
    <>
      <h1>Home</h1>
      {products.map((item) => {
        const { id, name, description, price } = item;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price : {price}</p>
            <Link>Visit Item</Link>
            <br />
            <button onClick={() => handleAddItemToCart(item)}>Add to cart</button>
            <button onClick={() => handleAddItemToWishlist(item)}>Add to wishlist</button>
            <hr />
          </div>
        );
      })}
    </>
  );
}
