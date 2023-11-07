import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { cities } from './mocks/locations';
import { offersData } from './mocks/offers';
import { favoritesData } from './mocks/favorites';
import { offersNearbyData } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      cities={cities}
      offers={offersData}
      favorites={favoritesData}
      offersNearby={offersNearbyData}
    />
  </React.StrictMode>,
);
