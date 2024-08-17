// 3. Use this URL - https://example.com/login to make a fake fetch call and show the status like it is
// authenticated or not with a message in the DOM. Use HTML, CSS & JS template in REPL

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/login") {
        resolve({
          status: 200,
          data: {
            auth: true,
          },
        });
      } else {
        reject({
          status: 404,
          message: "Status not found",
        });
      }
    }, 2000);
  });
};
const displayOutput = document.querySelector('#output')
fakeFetch('https://example.com/login')
  .then( (response) => {
    if (response.status === 200) {
      if (response.data.auth) {
        displayOutput.textContent = 'Verified'
      }else{
        displayOutput.textContent = "Not Verified"
      }
    }
  })
  .catch( (error) => {
    displayOutput.textContent = error.message
  })
// Output on the DOM should be:
// Verified
