import { movies } from "./movies";

export function useMovie(id: number) {
  return movies.find((movie) => movie.id === id);
}
