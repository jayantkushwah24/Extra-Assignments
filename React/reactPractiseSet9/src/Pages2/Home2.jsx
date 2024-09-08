import { useContext } from "react";
import { BookContext } from "../Context/BookContext2";
import { NavLink } from "react-router-dom";

export function Home() {
  const { books, handleMarkAsRead, handleAddToFavorite, favBooks } =
    useContext(BookContext);

  const isBookInFavorites = (id) => favBooks.some((book) => book.id === id);

  return (
    <>
      <h1>All Books</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {books.map(({ id, title, author, image, read }) => (
          <div
            key={id}
            style={{
              border: "2px solid black",
              margin: "5px",
              width: "220px",
              padding: "10px",
            }}
          >
            <img
              src={image}
              alt="img"
              style={{ width: "200px", height: "300px" }}
            />
            <p>{id}</p>
            <p>Title: {title}</p>
            <p>Author: {author}</p>
            <button
              onClick={() =>
                handleMarkAsRead(id, { id, title, author, image, read })
              }
              disabled={read}
            >
              {read ? "Already Read" : "Mark as Read"}
            </button>
            {isBookInFavorites(id) ? (
              <NavLink to="/favourite">
                <button>Go to Fav</button>
              </NavLink>
            ) : (
              <button
                onClick={() =>
                  handleAddToFavorite({ id, title, author, image, read })
                }
              >
                Add to Fav
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
