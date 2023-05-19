import React from 'react';
import PropTypes from 'prop-types';
import { FilmReview } from '../film-review/film-review.jsx';

export const FilmDetailsReview = ({ comments }) => {
  const commentComponents = comments.map((comment) => (
    <FilmReview
      comment={comment} key={comment.id}
    />
  ));

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {commentComponents.slice(0, 3)}
      </div>
      <div className="movie-card__reviews-col">
        {commentComponents.slice(3, 6)}
      </div>
    </div>
  );
};

FilmDetailsReview.propTypes = {
  comments: PropTypes.object,
};
