import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fakeFetch } from "../Data/FakeFetch2";
export const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [favBooks, setFavBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fakeFetch("https://example.com/api/books")
      .then(({ status, data }) => {
        if (status === 200) {
          setBooks(data.books);
          setProfile(data.user);
        } else {
          setError("Failed to fetch data from the server.");
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err); // Log the error for debugging
        setError("An error occurred while fetching data.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setReadBooks(books.filter((book) => book.read === true));
  }, [books]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleMarkAsRead = (id, newBook) => {
    setBooks(
      books.map((books) => (books.id === id ? { ...books, read: true } : books))
    );
    setReadBooks([...readBooks, newBook]);
  };

  const handleAddToFavorite = (newBook) => {
    setFavBooks([...favBooks, newBook]);
  };

  return (
    <BookContext.Provider
      value={{
        books,
        handleMarkAsRead,
        favBooks,
        handleAddToFavorite,
        readBooks,
        profile,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

BookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
