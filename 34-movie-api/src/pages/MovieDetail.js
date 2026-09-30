import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = "YOUR_OMDB_API_KEY";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
      const data = await res.json();
      setMovie(data);
      setLoading(false);
    };
    fetchMovie();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="container">
      <Link to="/" className="btn">Back to Search</Link>
      <div className="movie-detail">
        <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"} alt={movie.Title} />
        <div className="movie-info">
          <h1>{movie.Title}</h1>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
          <p>{movie.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;