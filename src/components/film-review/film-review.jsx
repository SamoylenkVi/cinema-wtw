import React from 'react';
import PropTypes from 'prop-types';
import { formatData } from './helper';
import { DATA_FORMAT_TEXT, DATA_FORMAT_ATTRIBUTE } from './const';

export const FilmReview = ({ comment }) => {
  const {
    user, rating, commentText, date,
  } = comment;
  const { name } = user;
  return <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{commentText}</p>

      <footer className="review__details">
        <cite className="review__author">{name}</cite>
        <time className="review__date" dateTime={formatData(date, DATA_FORMAT_ATTRIBUTE)}>{formatData(date, DATA_FORMAT_TEXT)}</time>
      </footer>
    </blockquote>

    <div className="review__rating">{rating}</div>
  </div>;
};

FilmReview.propTypes = {
  comment: PropTypes.shape({
    commentText: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }),
};
