import { useState } from "react";

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/products") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            products: [
              { name: "Pen", price: 30, quantity: 100 },
              { name: "Pencil", price: 50, quantity: 50 },
              { name: "Paper", price: 20, quantity: 30 },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found.",
        });
      }
    }, 2000);
  });
}; 

export function ApiCallOnButtonClick() {
  const [products, setProducts] = useState([]); // Step I: declaring state variable

  const handleData = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/products"
      );
      if (status === 200) {
        setProducts(data.products);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h1>My Products</h1>
      <button onClick={handleData}>Click</button>
      {products.map(({ id,name, price, quantity }) => {
        return (
          <p key={id}>
            {name} -- INR: {price} -- {quantity}
          </p>
        );
      })}
    </>
  );
}
