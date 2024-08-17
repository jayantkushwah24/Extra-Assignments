// 5. Given the products data. Build a React component to display the name of all products as an
// unordered list on the DOM. Order of items display can vary from the image shown below

import { products } from "../Data/ProductList";

function DisplayProduct() {
  let id = 1;
  return (
    <>
      <h1>Product Name : </h1>
      {products.map(({ name, quantity, sales }) => (
        <ul key={id++}>
          <li key={id++}>{name}</li>
        </ul>
      ))}
    </>
  );
}
export default DisplayProduct;
