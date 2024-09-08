import { useContext } from "react";
import { BookContext } from "../Context/BookContext2";

export function Read() {
  const { readBooks } = useContext(BookContext);

  return (
    <>
      <h1>Read Books</h1>
      {Array.isArray(readBooks) && readBooks.length > 0 ? (
        <span style={{ display: "flex" }}>
          {readBooks.map(({ id, title, author, image }) => (
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
