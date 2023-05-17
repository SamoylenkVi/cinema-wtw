const SIMILAR_FILMS_MAX = 4;

export const findSimilarFilms = (films, genre) => (
  films.filter((film) => film.genre === genre).slice(0, SIMILAR_FILMS_MAX)
);
