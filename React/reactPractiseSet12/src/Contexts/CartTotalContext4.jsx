import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { items } from "../Data/ItemsData4";
export const CartTotalContext = createContext();

export function CartTotalProvider({ children }) {
  const [cartTotal, setCartTotal] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect( () => {
    if (cart) {
      const value = cart.reduce( (acc,value) => acc + value.price , 0);
      setCartTotal(value);
    }
  } , [cart])

  const handleAddToCart = (item) => {
    const isExists = cart.find((i) => item.id === i.id);
    if (!isExists) {
      const value = [...cart, item];
      setCart(value);
    }
  };

  const handleRemoveItem = (id) => {
    const value = cart.filter((item) => item.id !== id);
    setCart(value);
  };

  return (
    <CartTotalContext.Provider
      value={{ items, cartTotal, cart, handleAddToCart, handleRemoveItem }}
    >
      {children}
    </CartTotalContext.Provider>
  );
}
CartTotalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
