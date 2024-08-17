// 6. Use this URL - https://example.com/api/productlist to make a fake fetch call and print the total
// price of all the products. A fakeFetch has been provided

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/productlist") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { itemName: "Shoes", price: 100, quantity: 2 },
            { itemName: "Hat", price: 350, quantity: 1 },
            { itemName: "Tshirt", price: 410, quantity: 5 },
          ],
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
const displayOutput = document.querySelector('#output')
fakeFetch('https://example.com/api/productlist')
  .then( ({status,message,data}) => {
    if (status === 200) {
      const total = data.reduce( (acc,{itemName,price,quantity}) => {
        return acc + (price * quantity);
      },0)
      displayOutput.textContent = `Total : INR ${total}`
    }
  })
  .catch( (error) => {
    if (error.status === 404) {
      displayOutput.textContent = error.message;
    }
  })
// Output on the DOM should be:
// Total: INR 2600
