import { Link, Outlet } from "react-router-dom";
import { useMovies } from "../data/use-movies";

export function Movies() {
  const movies = useMovies();
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={movie.id.toString()}>
              {movie.title} ({movie.year}) - {movie.rating}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
