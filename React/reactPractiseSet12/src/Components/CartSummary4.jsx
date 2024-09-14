import { useContext } from "react";
import { CartTotalContext } from "../Contexts/CartTotalContext4";

export function CartSummary() {
  const { items, cartTotal, cart , handleAddToCart , handleRemoveItem } = useContext(CartTotalContext);

  return (
    <>
      <h1>Shopping Cart Summary</h1>
      <h2>Cart Total : {cartTotal} </h2>
      {cart ? (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <p style={{ display: "inline" }}>
                {item.name} - ${item.price}
              </p>{" "}
              <button onClick={() => handleRemoveItem(item.id)}>Remove Item</button>
            </div>
          ))}
        </div>
      ) : (
        <div>No Item in the Cart</div>
      )}
      <h2>Available Items</h2>
      {items.map((item) => (
        <div key={item.id}>
          <p style={{ display: "inline" }}>
            {item.name} - ${item.price}
          </p>{" "}
          <button onClick={() => handleAddToCart(item)}> Add to Cart</button>
        </div>
      ))}
    </>
  );
}
