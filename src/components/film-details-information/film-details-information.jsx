import React from 'react';
import PropTypes from 'prop-types';
import { formatRunTime } from './helper';

export const FilmDetailsInformation = ({
  director, starring, runTime, genre, released,
}) => (
    <>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
              <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {starring.map((item, index) => {
                if (index === starring.length - 1) {
                  return <>
                    {item}
                  </>;
                }
                return <>
                  {item}, <br></br>
                  </>;
              })}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{formatRunTime(runTime)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{released}</span>
          </p>
        </div>
      </div>
    </>
);

FilmDetailsInformation.propTypes = {
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string),
  runTime: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
};
