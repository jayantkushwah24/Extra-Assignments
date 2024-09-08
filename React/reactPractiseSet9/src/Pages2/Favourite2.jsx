import { useContext } from "react";
import { BookContext } from "../Context/BookContext2";

export function Favourite() {
  const { favBooks } = useContext(BookContext);

  return (
    <>
      <h1>Favourite Books</h1>
      {Array.isArray(favBooks) && favBooks.length > 0 ? (
        <span style={{ display: "flex" }}>
          {favBooks.map(({ id, title, author, image }) => (
            <span key={id} style={{ border: "2px solid black", margin: "7px" }}>
              <img
                src={image}
                alt="img"
                style={{ width: "200px", height: "300px" }}
              />
              <p>{id}</p>
              <p>Title : {title}</p>
              <p>Author : {author}</p>
            </span>
          ))}
        </span>
      ) : (
        <p>No favorite books available.</p>
      )}
    </>
  );
}
