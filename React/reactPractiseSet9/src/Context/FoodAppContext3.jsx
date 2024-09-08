import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fakeFetch } from "../Data/FakeFetch3";
export const FoodAppContext = createContext();

export function FoodAppProvider({ children }) {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fakeFetch("https://example.com/api/menu")
      .then(({ status, data }) => {
        if (status === 200) {
          setMenu(data.menu);
        } else {
          setError("Failed to fetch data from the server.");
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err); // Log the error for debugging
        setError("An error occurred while fetching data.");
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

  const handleAddToCart = (newItem) => {
    let isAlreadyExists = cart.find((item) => item.id === newItem.id);

    if (isAlreadyExists) {
      // Update the quantity of the existing item
      setCart(
        cart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add the new item with an initial quantity of 1
      setCart([...cart, { ...newItem, quantity: 1 }]);
    }
  };

  return (
    <FoodAppContext.Provider value={{ menu, cart, handleAddToCart }}>
      {children}
    </FoodAppContext.Provider>
  );
}

FoodAppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
