import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import {HelmetProvider} from 'react-helmet-async';
import MainScreen from '../../pages/main/main-screen';
import LoginScreen from '../../pages/login/login-screen';
import FavoritesScreen from '../../pages/favorites/favorites-screen';
import OfferScreen from '../../pages/offer/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
// import { Cities } from '../../types/common';
// import { OffersType } from '../../types/offers';


// type AppScreenProps = {
//   cities: Cities;
//   offers: OffersType[];
//   favorites: OffersType[];
//   offersNearby: OffersType[];
// }

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainScreen />} />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth} >
              <FavoritesScreen />
            </PrivateRoute>
          }
          />
          <Route path={`${AppRoute.Offer}/:id`} element={
            <OfferScreen />
          }
          />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
