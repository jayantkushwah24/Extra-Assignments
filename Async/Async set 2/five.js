// 5. Use this URL - https://example.com/photo to make a fake fetch call and show an image on the
// DOM using the photo link received in the response.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/photo") {
        resolve({
          status: 200,
          data: {
            photo: {
              link: "https://picsum.photos/200/300",
              title: "Random Image",
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
const displayOutput = document.querySelector('#output');
fakeFetch('https://example.com/photo')
  .then( ({status,data}) => {
    if (status === 200) {
      const {link , title} = data.photo ;
      const h1Element = document.createElement('h1');
      h1Element.textContent = title;
      displayOutput.appendChild(h1Element);
      const imgElement = document.createElement('img');
      imgElement.setAttribute('src' , link);
      displayOutput.appendChild(imgElement)
    }
  })
  .catch( (error) => {
    if (error.status === 404) {
      displayOutput.textContent = error.message;
    }
  })
