import React, { Component } from "react";

import Loader from "react-loader-spinner";
import imdbApi from "../../services/imdbApi";
import MoviesList from "../MoviesList";

class HomePage extends Component {
  state = {
    popularMovies: [],
    loading: true,
  };

  componentDidMount() {
    imdbApi
      .fetchTrendingMovies()
      .then((results) =>
        this.setState({ popularMovies: results, loading: false })
      );
  }

  render() {
    const { popularMovies, loading } = this.state;
    return (
      <>
        <h2 className="tranding-header">
          Tranding now{" "}
          <span role="img" aria-label="fire">
            🔥
          </span>
        </h2>
        {loading && (
          <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
        )}
        {!loading && (
          <MoviesList movies={popularMovies} location={this.props.location} />
        )}
      </>
    );
  }
}

export default HomePage;
