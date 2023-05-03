import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { REGEX_ALT } from '../constants';
import { createAltText } from '../utils/film-card';

export const FilmCard = ({
  name, previewImage, id, onMouseEnter,
}) => {
  const altText = createAltText(previewImage, REGEX_ALT);

  return (
    <article onMouseEnter={() => onMouseEnter(id)} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={previewImage} alt={altText} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${id}/review`}className="small-movie-card__link">{name}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  id: PropTypes.string,
  onMouseEnter: PropTypes.func,
};
