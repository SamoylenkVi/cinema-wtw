import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { NAVIGATION_BUTTONS } from './constants';
import { ucFirst } from './helper';
import { FilmDetailsContent } from '../film-details-content.jsx';

export const DetailsNavigation = ({ film }) => {
  const [currentButton, setCurrentButton] = useState(NAVIGATION_BUTTONS.DETAILS);

  const handlerActiveButton = (evt) => {
    const buttonName = evt.target.getAttribute('data-name');
    setCurrentButton(buttonName);
  };

  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          { Object.values(NAVIGATION_BUTTONS).map((button) => (
            <>
              <li className="movie-nav__item">
                <button
                  key={button}
                  data-name={button}
                  onClick={handlerActiveButton}
                  className={cn('movie-nav__link', { 'movie-nav__link--active': currentButton === button })}
                >
                  {ucFirst(button)}
                </button>
              </li>
            </>
          ))}
        </ul>
      </nav>
      <FilmDetailsContent film={film} state={currentButton} />
    </>
  );
};

DetailsNavigation.propTypes = {
  film: PropTypes.objectOf(),
};
