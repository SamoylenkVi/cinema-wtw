import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { MainPage } from './components/main-page/main-page.jsx';
import { NotFoundPage } from './components/not-found-page.jsx';
import { Login } from './components/login.jsx';
import { MyList } from './components/my-list.jsx';
import { FilmDetailsPage } from './components/film-details-page/film-details-page.jsx';
import { AddReviewPage } from './components/add-review-page.jsx';
import { Player } from './components/player.jsx';
import { films } from './mocks/films';

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFoundPage />,
  },
  {
    path: '/',
    element: <MainPage films={films} />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/my-list',
    element: <MyList films={films} />,
  },
  {
    path: '/films/:id',
    element: <FilmDetailsPage films={films} />,
  },
  {
    path: '/films/:id/review',
    element: <AddReviewPage />,
  },
  {
    path: '/player/:id',
    element: <Player />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
