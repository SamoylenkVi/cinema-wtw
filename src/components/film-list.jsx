import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FilmCard } from './film-card.jsx';
import { FILM_CARD_COUNT } from '../constants';

export const FilmList = ({ filmsData }) => {
  const [, setActiveCardId] = useState();

  const handleMouseEnter = (id) => {
    setActiveCardId(id);
  };

  return (
    <>
      <div className="catalog__movies-list">
        {Array.from(
          { length: FILM_CARD_COUNT },
          (_, index) => <FilmCard
            key={filmsData[index].id}
            name = {filmsData[index].name}
            previewImage = {filmsData[index].previewImage}
            id = {filmsData[index].id}
            onMouseEnter={handleMouseEnter}/>,
        )}
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </>
  );
};

FilmList.propTypes = {
  filmsData: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
