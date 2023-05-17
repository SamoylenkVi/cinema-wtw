import React from 'react';
import PropTypes from 'prop-types';

import { comments } from '../mocks/comments';
import { FilmDetailsInformation } from './film-details-information/film-details-information.jsx';
import { FilmDetailsOverview } from './film-details-overview/film-details-overview.jsx';
import { NAVIGATION_BUTTONS } from './film-details-navigation/constants';
import { FilmDetailsReview } from './film-details-review/filmDetailsReview.jsx';

export const FilmDetailsContent = ({ film, state }) => {
  const {
    director, starring, runTime, released, genre, id, description, rating, scoresCount,
  } = film;

  switch (state) {
    case NAVIGATION_BUTTONS.OVERVIEW:
      return <FilmDetailsOverview
        director={director}
        starring={starring}
        description={description}
        rating={rating}
        scoresCount={scoresCount}
      />;
    case NAVIGATION_BUTTONS.DETAILS:
      return <FilmDetailsInformation
        key={id}
        director={director}
        starring={starring}
        runTime={runTime}
        genre={genre}
        released={released}
      />;
    case NAVIGATION_BUTTONS.REVIEWS:
      return <FilmDetailsReview comments={comments}/>;
    default:
      return null;
  }
};

FilmDetailsContent.propTypes = {
  state: PropTypes.string.isRequired,

  film: PropTypes.shape({
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
  }),
};
