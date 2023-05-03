import React from 'react';
import PropTypes from 'prop-types';
import { Footer } from './footer.jsx';
import { FilmCard } from './film-card.jsx';
import { FILM_CARD_COUNT } from '../constants';

export const MyList = (props) => {
  const { films } = props;
  return (
  <div className="user-page">
    <header className="page-header user-page__head">
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <h1 className="page-title user-page__title">My list</h1>

      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </div>
    </header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <div className="catalog__movies-list">
      {Array.from(
        { length: FILM_CARD_COUNT },
        (_, index) => <FilmCard
          key={index}
          name = {films[index].name}
          previewImage = {films[index].previewImage}/>,
      )}
      </div>
    </section>

    <Footer />
  </div>
  );
};

MyList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
