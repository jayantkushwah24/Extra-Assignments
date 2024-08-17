import { useEffect, useState } from "react";

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/wishlist") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            wishlist: [
              { name: "Colors", price: 100, quantity: 4 },
              { name: "Laptop", price: 5000, quantity: 1 },
              { name: "TV", price: 2000, quantity: 2 },
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

function UseEffectSuccessOnView() {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    try {
      const data = await fakeFetch("https://example.com/api/wishlist");
      setProducts(data.data.wishlist);
      console.log(data.data.wishlist);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    getData()
  }, []);
  
  return (
    <>
      <h1>Wishlist</h1>
      {products.map(({ name, price, quantity }) => {
        return <div style={{border : "1px solid grey", margin : '5px'}}>
          <p>Product Name : {name}</p>
          <p>Price : {price}</p>
          <p>Quantity : {quantity}</p>
        </div>
      })}
    </>
  );
}
export default UseEffectSuccessOnView;