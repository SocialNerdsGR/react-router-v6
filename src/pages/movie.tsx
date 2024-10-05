import { useParams } from "react-router-dom";
import { useMovie } from "../data/use-movie";

export function Movie() {
  const { id } = useParams();
  const movie = useMovie(Number(id));

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div>
      <h2>
        {movie.title} ({movie.rating})
      </h2>
      <p>
        {movie.director}, {movie.year}
      </p>
      <p>{movie.genres.join(", ")}</p>
    </div>
  );
}
