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
import { MovieDetailsPage } from './components/movie-details-page.jsx';
import { AddReviewPage } from './components/add-review-page.jsx';
import { Player } from './components/player.jsx';

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFoundPage />,
  },
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/mylist',
    element: <MyList />,
  },
  {
    path: '/films/:id',
    element: <MovieDetailsPage />,
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
