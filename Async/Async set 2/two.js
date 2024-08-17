// 2. Use this URL - https://example.com/winner-team to make a fake fetch call to the get names of
// winner group members and show a nice message on the DOM congratulating all of them.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/winner-team") {
        resolve({
          status: 200,
          data: {
            message: "Success",
            data: ["Jhon", "Raju", "Anjali", "Sakshi"],
          },
        });
      } else {
        reject({
          status: 404,
          message: "No Users found.",
        });
      }
    }, 2000);
  });
};
const displayOutput = document.querySelector('#output')
fakeFetch('https://example.com/winner-team')
  .then( (response) => {
    if (response.status == 200) {
      const members = response.data.data.join(", ");
      displayOutput.textContent = `Congratulations to the members of the winning team: ${members}. Great work!`;
    }
  })
  .catch((error) => {
    displayOutput.textContent = error.message;
  });
// Output on the DOM should be:
// Congratulations to the members of the winning team: Jhon, Raju, Anjali, Sakshi. Great work!
