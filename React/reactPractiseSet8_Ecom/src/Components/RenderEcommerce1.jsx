// 1. Create an e-commerce App in React with different routes for:
// Product listing page - fakeFetch has been provided. Fetch the data and display on the
// product listing page.
// cart page
// wish list page
// A 404 page should be displayed when user enters wrong url
// 2. In the above question, in your product listing page add a “Add to Cart” button along with each
// product. On click of the button, add that item to your cart. The added product should be visible in
// the My Cart page. Show the total number of items available in the cart at the top of the page. Do
// this using context
// 3. In the question above, add a “Remove from cart” button in the My Cart page for each product.
// // On click of this button, the product should be removed from the cart.
// 4. In the above question, in your product listing page add a “Add to Wishlist” button along with
// each product. On click of the button, add that item to your Wishlist page. The added product
// should be visible in the My Wishlist page. Show the total number of items available in the
// Wishlist at the top of the page. Do this using context.
// 5. In the question above, add a “Remove from Wishlist” button in the My Wishlist page for each
// product. On click of this button, the product should be removed from the Wishlist.

import { Link, Route, Routes } from "react-router-dom";
import { RenderMyCart } from "../Pages/MyCart1";
import { RenderMyWishlist } from "../Pages/MyWishlist1";
import { Home } from "../Pages/Home1";

export function RenderEcommerceApp() {
  return (
    <>
      <h1>Product Listing Page</h1>
      <Link to="/">Home</Link>
      {" ||  "}
      <Link to="/cart">My Cart</Link>
      {" || "}
      <Link to="/wishlist">My Wishlist</Link>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<RenderMyWishlist />} />
        <Route path="/cart" element={<RenderMyCart />} />
        <Route path="*" element={<h2>404: Page Not Found</h2>} />
      </Routes>
    </>
  );
}
