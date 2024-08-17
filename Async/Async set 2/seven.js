// 7. Use this URL - https://example.com/api/users to make a fake fetch call and handle errors if
// any. Show a proper message to the user on the DOM (Oops! Unexpected Error. Please try
// again.), as per the status received from the server. The error should be displayed in red colour. A
// fakeFetch has been provided.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/users") {
        reject({
          status: 500,
          message: "Internal Server Error",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
          },
        });
      }
    }, 2000);
  });
};
const displayOutput = document.querySelector("#output");
fakeFetch("https://example.com/api/users")
  .then((response) => {
    if (response.status === 200) {
      dispatchEvent.textContent = "success";
    }
  })
  .catch((error) => {
    if (error.status === 500) {
      const pElement = document.createElement("p");
      pElement.textContent = "Oops. Unexpected Error. Please try again.";
      pElement.setAttribute('style' , "color : red")
      displayOutput.appendChild(pElement);
    }
  });
// Output on the DOM should be (in red color):
// Oops. Unexpected Error. Please try again.
