// 6. Consider the products data from previous question and display all the product details as
// unordered list for which the number of sales is more than the quantity

import { products } from "../Data/ProductList";

function DisplayProductSalesIsMoreThanQuantity() {
  return (
    <>
      <h1>Product Name </h1>
      {products.map(({ name, quantity, sales }) =>
        sales > quantity ? (
          <p>
            Name : {name} , Quantity : {quantity} , Sales : {sales}
          </p>
        ) : (
          <p></p>
        )
      )}
    </>
  );
}
export default DisplayProductSalesIsMoreThanQuantity;
