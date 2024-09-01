import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleAddItemToCart = (item) => {
    setCart([...cart, item]);
  };
  const handleAddItemToWishlist = (item) => {
    setWishlist([...wishlist, item]);
  };

  const handleRemoveCartItem = (id) => {
    setCart(cart.filter((item) => item.id != id));
  };
  const handleRemoveWishlistItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id != id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        handleAddItemToCart,
        handleAddItemToWishlist,
        handleRemoveCartItem,
        handleRemoveWishlistItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Define the PropTypes for the CartProvider
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
