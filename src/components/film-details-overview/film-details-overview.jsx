import React from 'react';
import PropTypes from 'prop-types';
import { calculateRatingLevel, createStarringList } from './helper';

export const FilmDetailsOverview = ({
  director, description, rating, starring, scoresCount,
}) => (
    <>
        <div className="movie-rating">
          <div className="movie-rating__score">{rating}</div>
          <p className="movie-rating__meta">
            <span className="movie-rating__level">{calculateRatingLevel(rating)}</span>
            <span className="movie-rating__count">{scoresCount} ratings</span>
          </p>
        </div>

        <div className="movie-card__text">
          <p>{description}</p>

          <p className="movie-card__director"><strong>Director: {director}</strong></p>

          <p className="movie-card__starring"><strong>{createStarringList(starring)}</strong></p>
        </div>
      </>
);

FilmDetailsOverview.propTypes = {
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
};
