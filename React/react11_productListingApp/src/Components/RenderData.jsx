import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

export function RenderData() {
  const { Products } = useContext(ProductContext);

  return (
    <>
      <div style={{ display: "flex" }}>
        {Products.map(
          ({ id, name, image, deliveryTime, price, inStock }) => (
            <div
              key={id}
              style={{
                border: "2px solid black",
                width: "19%",
                margin: "0px 7px",
              }}
            >
              <img src={image} alt="img" style={{ width: "100%" }} />
              <h2>{name}</h2>
              <p>Price : ${price}</p>
              <p>{inStock ? "In Stock" : "Out of Stock"}</p>
              <p>Delivery Time : {deliveryTime} days </p>
            </div>
          )
        )}
      </div>
    </>
  );
}
