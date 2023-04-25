import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <section className='page-not-found'>
    <h1>404 Not Found</h1>
    <Link to="/">Вернуться на главную</Link>
  </section>
);
