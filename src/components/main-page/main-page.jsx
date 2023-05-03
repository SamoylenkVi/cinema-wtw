import React from 'react';
import PropTypes from 'prop-types';

import { MovieCardMain } from './movie-card-main.jsx';
import { Footer } from '../footer.jsx';
import { FilmList } from '../film-list.jsx';

const filmInformation = {
  name: 'Shutter',
  genre: 'comedy',
  releaseDate: 2015,
};

export const MainPage = ({ films }) => <>
      <MovieCardMain
      name= {filmInformation.name}
      genre={filmInformation.genre}
      releaseDate={filmInformation.releaseDate}
      />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <FilmList filmsData={films} />
        </section>
        <Footer />
      </div>
  </>;

MainPage.propTypes = {
  films: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
