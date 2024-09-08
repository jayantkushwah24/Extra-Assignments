// 2. Create a books app in React. It should have the following routes:
// a. Home page - This renders all the books coming from the api. Fake fetch has been provided
// below
// b. Favorites Page
// There would be a button along with each of the book of Add to Fav. On clicking that, the book
// should be added to favourites. Do this using context. And if the book already exists in
// favourites, the button should be texted Go to Fav - The navbar item should show the count of
// books in favourites.
// c. Read page
// There will be button of Mark as read. On clicking it, the book will be added to Read page. Do
// this using context. If already exists, the button should be texted Already read
// d. Profile page - It should display the user details coming from the result of the api.

import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "../Pages2/Home2";
import { Favourite } from "../Pages2/Favourite2";
import { Read } from "../Pages2/Read2";
import { Profile } from "../Pages2/Profile2";
import { useContext } from "react";
import { BookContext } from "../Context/BookContext2";

export function RenderBookApp() {
  const { favBooks, readBooks } = useContext(BookContext);
  return (
    <>
      <nav>
        <NavLink to="/">All Books</NavLink>
        {" || "}
        <NavLink to="/favourite">Favourites({favBooks.length})</NavLink>
        {" || "}
        <NavLink to="/read">Read({readBooks.length})</NavLink>
        {" || "}
        <NavLink to="/profile">Profile</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/read" element={<Read />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}
