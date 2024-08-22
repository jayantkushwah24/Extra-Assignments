// 3. Create a React component that fetches a list of movies from an API endpoint
// using useEffect hook and displays the title, year, and rating of each movie on the screen using
// the useState hook. Add a dropdown which filters the movies by year. You can keep 5 dropdown
// values - 2005 to 2010.

import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch3";

export function RenderMovie() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedYear, setSelectedYear] = useState("All");

  useEffect(() => {
    fakeFetch("https://example.com/api/movies")
      .then(({ status, data }) => {
        if (status === 200) {
          setMovies(data);
          setFilteredMovies(data); // Initialize with all movies
        } else {
          setError("Failed to fetch movies.");
        }
      })
      .catch(() => {
        setError("An error occurred while fetching movies.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleFilterMovies = (event) => {
    const year = event.target.value;
    setSelectedYear(year);
    if (year === "All") {
      setFilteredMovies(movies); // Show all movies if "All" is selected
    } else {
      const filtered = movies.filter((movie) => movie.year === parseInt(year));
      setFilteredMovies(filtered);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>Movies</h1>
      <p>Filter by Year</p>
      <select value={selectedYear} onChange={handleFilterMovies}>
        <option value="All">All</option>
        <option value="2005">2005</option>
        <option value="2006">2006</option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
      </select>
      <ul>
        {filteredMovies.map(({ title, year, rating }, index) => (
          <li key={index}>
            <p>Title: {title}</p>
            <p>Year: {year}</p>
            <p>Rating: {rating}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
