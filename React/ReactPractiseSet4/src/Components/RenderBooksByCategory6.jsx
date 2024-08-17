// 6. Given an array of books:
// a. Build a React component that displays the title and author of each book.
// b. Add buttons to filter the books by genre using the useState hook.

import { useState } from "react";
import { books } from "../Data/BooksList6";

export function RenderBooks() {
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleList = (genre) => {
    if (genre === "All Genre") {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(books.filter((book) => book.genre === genre));
    }
  };
  return (
    <>
      <button onClick={() => handleList("All Genre")}>All genre</button>
      <button onClick={() => handleList("Classic")}>Classic</button>
      <button onClick={() => handleList("Dystopian")}>Dystopian</button>
      <button onClick={() => handleList("Young Adult")}>Young Adult</button>
      {filteredBooks.map(({ id, title, author }) => (
        <div key={id}>
          <h1>{title}</h1>
          <h2>{author}</h2>
        </div>
      ))}
    </>
  );
}
