// 1. Use this URL - https://example.com/post/comments to make a fake fetch call and list out all the
// emails of users on the DOM in ordered list. A fakeFetch has been provided.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/post/comments") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { email: "xyz@gmail.com", commentBody: "Well done keep it up" },
            {
              email: "hello@outlook.com",
              commentBody: "Good going a lot to learn from you awesome",
            },
            {
              email: "ram99@gmail.com",
              commentBody: "Anyone from Vadodara here",
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "No Commentes found.",
        });
      }
    }, 2000);
  });
};
const displayOutput = document.querySelector("#output");
fakeFetch("https://example.com/post/comments")
  .then((response) => {
    if (response.status == 200) {
      const olElement = document.createElement("ol");
      response.data.forEach((obj) => {
        const liElement = document.createElement("li");
        liElement.textContent = obj.email;
        olElement.appendChild(liElement);
      });
      displayOutput.appendChild(olElement);
    }
  })
  .catch((error) => console.log(error));
// Output on the DOM should be:
// 1. xyz@gmail.com
// 2. hello@outlook.com
// 3. ram99@gmail.com
