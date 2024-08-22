// 6. Create a React component that fetches a list of movies from an API endpoint
// using useEffect hook and displays the title, year, and genre of each movie on the screen using
// the useState hook. Add a dropdown which filters the movies by genre.

import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch6";

export function RenderMovieList() {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let index = 0;

  useEffect(() => {
    fakeFetch("https://example.com/api/movies")
      .then((response) => {
        if (response.status === 200) {
          setMovies(response.data);
          setFilteredMovies(response.data);
        } else {
          setError("failed to fetch");
        }
      })
      .catch(() => {
        setError("an error occurred");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  const filterMovieByGenre = (event) => {
    const genre = event.target.value;
    setSelectedGenre(genre);
    if (genre === "All") {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(movies.filter((movie) => movie.genre === genre));
    }
  };
  return (
    <>
      <h1>Movies</h1>
      <p>Filter by genre</p>
      <select value={selectedGenre} onChange={filterMovieByGenre}>
        <option value="All">All</option>
        <option value="Crime">Crime</option>
        <option value="Drama">Drama</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>
      <ul>
        {filteredMovies &&
          filteredMovies.map(({ title, year, genre }) => (
            <li key={++index}>
              <p>{title}</p>
              <p>{year}</p>
              <p>{genre}</p>
              <hr />
            </li>
          ))}
      </ul>
    </>
  );
}
