import { useState } from "react";
import { Link } from "react-router-dom";

const API_KEY = "9938cbb4"; // OMDb API anahtarınızı buraya ekleyin

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);

    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );
    const data = await res.json();
    if (data.Search) setMovies(data.Search);
    else setMovies([]);
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Movie Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter movie name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn" type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      <div className="movies-grid">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID} className="movie-card">
            <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;