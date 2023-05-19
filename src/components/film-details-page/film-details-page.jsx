import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from '../footer.jsx';
import { films } from '../../mocks/films';
import { REGEX_ALT } from '../../constants';
import { createAltText } from '../../utils/film-card';
import { DetailsNavigation } from '../film-details-navigation/details-navigation.jsx';
import { FilmCard } from '../film-card.jsx';
import { findSimilarFilms } from './helper';

export const FilmDetailsPage = () => {
  const { id } = useParams();

  const film = films.find((item) => item.id === id);
  const {
    name, previewImage, genre, released,
  } = film;

  const similarFilms = findSimilarFilms(films, genre);
  const altText = createAltText(previewImage, REGEX_ALT);

  return <>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={previewImage} alt={altText} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <a href="add-review.html" className="btn movie-card__button">Add review</a>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <DetailsNavigation film={film}/>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__movies-list">
          {similarFilms.map((similarFilm) => <FilmCard
              key={similarFilm.id}
              name = {similarFilm.name}
              previewImage = {similarFilm.previewImage}
              previewVideoLink = {similarFilm.previewVideoLink}
              id = {similarFilm.id}/>)
          }
        </div>
      </section>

      <Footer />
    </div>
</>;
};
