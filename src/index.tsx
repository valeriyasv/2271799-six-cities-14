import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Setting } from './const';
import { cities } from './mocks/locations';
import { offerData } from './mocks/offers';
import { offersData } from './mocks/offers';
import { favoritesData } from './mocks/favorites';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offersCount={Setting.OffersCount}
      cities={cities}
      offers={offersData}
      offer={offerData}
      favorites={favoritesData}
    />
  </React.StrictMode>,
);
