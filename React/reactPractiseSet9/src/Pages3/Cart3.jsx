import { useContext, useEffect, useState } from "react";
import { FoodAppContext } from "../Context/FoodAppContext3";

export function Cart() {
  const { cart } = useContext(FoodAppContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDeliveryTime, setTotalDeliveryTime] = useState(0);

  useEffect(() => {
    if (cart) {
      setTotalPrice(
        cart.reduce((acc, value) => acc + value.price * value.quantity, 0)
      );
      setTotalDeliveryTime(
        cart.reduce((acc, value) => acc + value.delivery_time, 0)
      );
    }
  }, [cart]);

  const handleApplyCoupon = () => {
    setTotalPrice(totalPrice - 5);
  };

  return (
    <>
      <h1>Cart Items</h1>
      <p>Total Price : ${totalPrice}</p>
      <p>Total Delivery Time : {totalDeliveryTime} mins</p>
      <button onClick={handleApplyCoupon}>Apply Coupon</button>
      <span style={{ display: "flex", flexWrap: "wrap" }}>
        {cart.length > 0 ? (
          cart.map(
            ({
              id,
              name,
              description,
              price,
              image,
              delivery_time,
              quantity,
            }) => (
              <span
                key={id}
                style={{
                  height: "420px",
                  width: "320px",
                  margin: "10px",
                  border: "2px solid black",
                }}
              >
                <img
                  src={image}
                  alt="img"
                  style={{ height: "200px", width: "250px" }}
                />
                <h3>Name: {name}</h3>
                <p>Description: {description}</p>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <p>Delivery Time: {delivery_time} min</p>
              </span>
            )
          )
        ) : (
          <h3>No Items in the Cart</h3>
        )}
      </span>
    </>
  );
}
