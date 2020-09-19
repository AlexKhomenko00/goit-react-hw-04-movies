import React, { Component } from "react";

import imdbApi from "../../../services/imdbApi";

export default class Cast extends Component {
  state = {
    cast: [],
  };
  componentDidMount() {
    imdbApi
      .fetchMovieCredits(this.props.match.params.movieId)
      .then(({ cast }) => this.setState({ cast: cast }));
  }
  render() {
    const { cast } = this.state;
    const isShowCast = cast.length > 0;

    return (
      <>
        {isShowCast && (
          <ul>
            {cast.map((actor) => (
              <li key={actor.cast_id}>
                <img
                  src={
                    actor.profile_path &&
                    `http://image.tmdb.org/t/p/w185/${actor.profile_path}`
                  }
                  alt={`Actor: ${actor.name}`}
                />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
