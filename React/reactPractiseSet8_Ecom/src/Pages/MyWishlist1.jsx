import { useContext } from "react";
import { CartContext } from "../App";

export function RenderMyWishlist() {
  const { wishlist , handleRemoveWishlistItem } = useContext(CartContext);

  return (
    <>
      <h1>My Wishlist</h1>
      <h2>Items : {wishlist.length}</h2>
      {wishlist.length > 0 ? (
        wishlist.map(({ id, name, description, price, quantity }) => (
          <div key={id}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={() => handleRemoveWishlistItem(id)}>Remove</button>
            <hr />
          </div>
        ))
      ) : (
        <p>No items in the wishlist.</p>
      )}
    </>
  );
}
