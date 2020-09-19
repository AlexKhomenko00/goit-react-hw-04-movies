import React from "react";
import { Link } from "react-router-dom";

import s from "./MoviesList.module.css";
import routes from "../../routes";

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={s.moviesList}>
      {movies.map((movie) => (
        <li className={s.moviesList__item} key={movie.id}>
          <img
            src={
              movie.poster_path &&
              `https://image.tmdb.org/t/p/w154/${movie.poster_path}`
            }
            alt={`${movie.title} Poster`}
          />
          <div className={s.moviesList__shortInfo}>
            <Link
              className={s.moviesList__link}
              to={{
                pathname: `${routes.movies}/${movie.id}`,
                state: { from: location },
              }}
            >
              {movie.title}
            </Link>
            <p>Poplarity: {movie.popularity}</p>
            <p>{movie.overview.slice(0, 40)}...</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
