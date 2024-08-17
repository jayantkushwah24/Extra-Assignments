// 9. Use this URL - https://example.com/welcome to make a fake fetch call and display a welcome
// message to the user on the DOM. Welcome message (if provided) should be used else the
// default message of Welcome to the servershould be shown. Message should be only shown if
// the user is logged in

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!(url === "https://example.com/welcome")) {
        reject({
          status: 511,
          message: "Network auth required",
        });
      } else {
        resolve({
          status: 200,
          data: {
            logged: true,
          },
        });
      }
    }, 2000);
  });
};
const displayOutput = document.querySelector('#output')
fakeFetch('https://example.com/welcome')
  .then( (response) => {
    if (response.status == 200) {
      const pElement = document.createElement('p')
      pElement.textContent = "Welcome Jayant";
      displayOutput.appendChild(pElement);
    }
  })
  .catch( (error) => {
    if (error.status === 511) {
      displayOutput.textContent = `${error.message}`
    }
  })
// Output: As per the response from server
