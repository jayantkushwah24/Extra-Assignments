// 4. Use this URL - https://example.com/order/status/OR00A12 to make a fake fetch call and show
// the order status using the user name on the DOM.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/order/status/OR00A12") {
        resolve({
          status: 200,
          data: {
            order: {
              orderId: "OR00A12",
              status: "delivery pending",
              userName: "Kajal Kumari",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "No order found",
        });
      }
    }, 2000);
  });
};
const displayOutput = document.querySelector("#output");
fakeFetch("https://example.com/order/status/OR00A12")
  .then(({ status, data }) => {
    if (status === 200) {
      const { status: orderStatus, userName } = data.order;
      displayOutput.textContent = `Hello ${userName} your order status is ${orderStatus}`;
    }
  })
  .catch((error) => {
    if (error.status === 404) {
      displayOutput.textContent = `${error.message}`;
    }
  });
// Output on the DOM should be:
// Hello Kajal Kumari your order status is delivery pending.
