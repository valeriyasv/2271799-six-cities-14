import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
// import { cities } from './mocks/locations';
// import { offersData } from './mocks/offers';
// import { favoritesData } from './mocks/favorites';
// import { offersNearbyData } from './mocks/offers';
import { Provider } from 'react-redux/es/exports';

import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
