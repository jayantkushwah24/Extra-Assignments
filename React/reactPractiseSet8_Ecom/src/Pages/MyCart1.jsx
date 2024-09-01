import { useContext } from "react";
import { CartContext } from "../App";

export function RenderMyCart() {
  const { cart , handleRemoveCartItem } = useContext(CartContext);
  
  return (
    <>
      <h1>My Cart</h1>
      <h2>Items : {cart.length}</h2>
      {cart.length > 0 ? (
        cart.map(({ id, name, description, price, quantity }) => (
          <div key={id}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={() => handleRemoveCartItem(id)}>Remove</button>
            <hr />
          </div>
        ))
      ) : (
        <p>No items in the cart.</p>
      )}
    </>
  );
}
