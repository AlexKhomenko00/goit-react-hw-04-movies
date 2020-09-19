import React, { Component } from "react";

import imdbApi from "../../../services/imdbApi";

export default class Reviews extends Component {
  state = {
    reviews: [],
    loading: true,
  };
  componentDidMount() {
    imdbApi
      .fectMovieReviews(this.props.match.params.movieId)
      .then(({ results }) =>
        this.setState({ reviews: results, loading: false })
      );
  }
  render() {
    const { reviews, loading } = this.state;
    const isShowReviews = reviews.length > 0;

    return (
      <>
        {isShowReviews && (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <h4>Author: {review.author}</h4>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
        {!isShowReviews && !loading && (
          <h3>Sorry, We don't have any reviews for this movie</h3>
        )}
      </>
    );
  }
}
