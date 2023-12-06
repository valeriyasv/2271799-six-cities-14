import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux/es/exports';

import {store} from './store';
import { checkAuth, fetchFavorites } from './store/api-action';

store.dispatch(checkAuth());
store.dispatch(fetchFavorites());

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
