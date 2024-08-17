import { useState } from "react";

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/transactions") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            transactions: [
              {
                id: "T1",
                amount: 10000,
                date: "20-03-2023",
                gateway: "Stripe",
              },
              {
                id: "T2",
                amount: 500,
                date: "31-03-2023",
                gateway: "GPay",
              },
              {
                id: "T3",
                amount: 20000,
                date: "36-03-2023",
                gateway: "Paytm",
              },
              {
                id: "T4",
                amount: 1200,
                date: "12-03-2023",
                gateway: "Stripe",
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Transactions not found.",
        });
      }
    }, 2);
  });
};

export function ApiCallOnButtonWithHighlight() {
  const [products, setProducts] = useState([]);
  const [highlight , setHighlight] = useState(false);

  const handleData = async () => {
    try {
      const { status, data } = await fakeFetch(
        "https://example.com/api/transactions"
      );
      if (status === 200) {
        setProducts(data.transactions);
      }
    } catch (error) {
      console.error(e);
    }
  };

  function handleHighlight(){
    setHighlight(!highlight);
  }

  return (
    <>
      <h1>My Transactions</h1>
      <button onClick={handleData}>Get Transaction Details</button>
      <button onClick={handleHighlight}>Highlight Amount Greater than 1000</button>
      {products.map(({ id, amount, date, gateway }) => {
        return (
          <div style={{border : highlight &&  amount > 1000 ? "4px solid orange" : "none", padding : '4px'}}>
            <h3>Amount : {amount}</h3>
            <h3>Data : {date}</h3>
            <p>Gateway : {gateway}</p>
          </div>
        );
      })}
    </>
  );
}
