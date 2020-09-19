import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import s from "./MovieDetailPage.module.css";

import Cast from "./Cast";
import Reviews from "./Reviews";
import imdbApi from "../../services/imdbApi";
import routes from "../../routes";

class MovieDetailPage extends Component {
  state = {
    movieInfo: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    imdbApi
      .fetchMovieDetails(movieId)
      .then((data) => this.setState({ movieInfo: data }));
  }

  handeGoBack = () => {
    const {
      location: { state },
      history,
    } = this.props;

    if (state && state.from) {
      history.push(state.from);
      return;
    }

    history.push(routes.movies);
  };

  render() {
    if (!this.state.movieInfo) {
      return <></>;
    }

    const { title, overview, genres, poster_path } = this.state.movieInfo;
    const { match } = this.props;

    return (
      <>
        <button
          type="button"
          className={s.goBackBtn}
          onClick={this.handeGoBack}
        >
          &larr; Go Back
        </button>
        <div className={s.movieDetails}>
          <img
            src={
              poster_path && `https://image.tmdb.org/t/p/w342/${poster_path}`
            }
            alt={`${title} poster`}
          />
          <div className={s.movieDescr}>
            <h2 className={s.movieTitle}>{title}</h2>
            <p>{overview}</p>
            {genres.map((genre) => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </div>
        </div>
        <hr />
        <div className="additInfo">
          <h3>Adittional info</h3>
          <ul>
            <li>
              <Link
                to={{
                  pathname: `${match.url}/cast`,
                  state: this.props.location.state,
                }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `${match.url}/reviews`,
                  state: this.props.location.state,
                }}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <hr />
        <Route path={`${match.path}/cast`} component={Cast} />
        <Route path={`${match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailPage;
