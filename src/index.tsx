import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Setting } from './const';
import { cities } from './mocks/locations';
import { offerData } from './mocks/offers';
import { offersData } from './mocks/offers';

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
    />
  </React.StrictMode>,
);
