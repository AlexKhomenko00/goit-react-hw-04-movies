const key = "315e08344ecf67d3b7c1eb2e8ad237c9";

function fetchTrendingMovies() {
  return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`)
    .then((res) => res.json())
    .then((data) => data.results);
}

function fetchMovieDetails(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`
  ).then((res) => res.json());
}

function fetchMovieCredits(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}`
  ).then((res) => res.json());
}

function fectMovieReviews(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`
  ).then((res) => res.json());
}

function fetchMoviesByQuery(query) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
  ).then((res) => res.json());
}

export default {
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchMovieCredits,
  fectMovieReviews,
  fetchMoviesByQuery,
};
