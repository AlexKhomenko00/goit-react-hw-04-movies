import React, { Component } from "react";

import Loader from "react-loader-spinner";
import getQueryParams from "../../utils/getQueryParams";
import Searchbox from "./Searchbox";
import imdbApi from "../../services/imdbApi";
import MoviesList from "../MoviesList";

export default class MoviesPage extends Component {
  state = {
    movies: [],
    loading: false,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.setState({ movies: [], loading: true });
      this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = (query) => {
    imdbApi
      .fetchMoviesByQuery(query)
      .then(({ results }) =>
        this.setState({ movies: results, loading: false })
      );
  };

  handleChangeQuery = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, loading } = this.state;
    const isShowMovies = movies.length > 0;

    return (
      <>
        <Searchbox onSubmit={this.handleChangeQuery} />
        {loading && (
          <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
        )}
        {isShowMovies && (
          <MoviesList location={this.props.location} movies={movies} />
        )}
      </>
    );
  }
}
