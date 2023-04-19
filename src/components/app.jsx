import React from 'react';
import { MainPage } from './main-page.jsx';

const filmInformation = {
  name: 'Shutter Island',
  genre: 'comedy',
  releaseDate: 2015,
};

export const App = () => (
 <MainPage
  name= {filmInformation.name}
  genre={filmInformation.genre}
  releaseDate={filmInformation.releaseDate}
 />
);
