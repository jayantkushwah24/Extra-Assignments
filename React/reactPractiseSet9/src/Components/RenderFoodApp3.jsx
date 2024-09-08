// 3. Create an online food ordering app in React, with the following routes.
// a. Home page - Home page should say “Welcome to neoG Food Ordering App” and it should
// have a button, that navigates to menu page.
// b. Menu page:
// Menu page should display all the items from the menu. Fake fetch has been provided.
// Menu page should have a search bar to search for an item
// Menu page should have filters of isVeg , isSpicy and sort by price (both ascending and descending).
// Each item should have the button to add that item to cart. On click of the button, that food
// item should be added to cart, for ordering it. Do this using context. If the item already exists in
// the cart, make the button text as go to cart on the menu page.
// c. Cart Page
// Cart page should show all the food items that were added to cart, the total price of all the
// items in cart, and the total time required to deliver all the products in minutes.
// There should be an option to apply coupon which reduces the total cost by 5Rs of the total amount.

import { NavLink, Route, Routes } from "react-router-dom";
import { Menu } from "../Pages3/Menu3";
import { Cart } from "../Pages3/Cart3";
import { Home } from "../Pages3/Home3";

export function RenderFoodApp() {
  return (
    <>
      
      <nav>
        <NavLink to="/">Home</NavLink>
        {" || "}
        <NavLink to="/menu">Menu</NavLink>
        {" || "}
        <NavLink to="/cart">Cart</NavLink>
      </nav>
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
      
    </>
  );
}
