import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { REGEX_ALT } from '../constants';
import { createAltText } from '../utils/film-card';
import { AddReviewForm } from './add-review-form.jsx';
import { films } from '../mocks/films';

export const AddReviewPage = () => {
  const { id } = useParams();

  const { name, previewImage } = films.find((film) => film.id === id);

  const altText = createAltText(previewImage, REGEX_ALT);

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={previewImage} alt={altText} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={'/films/2'} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={previewImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>
      <AddReviewForm />
    </section>
  );
};
