import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import {HelmetProvider} from 'react-helmet-async';
import MainScreen from '../../pages/main/main-screen';
import LoginScreen from '../../pages/login/login-screen';
import FavoritesScreen from '../../pages/favorites/favorites-screen';
import OfferScreen from '../../pages/offer/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {useEffect} from 'react';
import { fetchFavorites } from '../../store/api-action';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector((state) => state.authorizationStatus === AuthorizationStatus.Auth);

  useEffect(() => {
    if(isAuthorized) {
      dispatch(fetchFavorites());
    }
  }, [dispatch, fetchFavorites()]);

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
          <Route path={AppRoute.Offer} element={<OfferScreen />} />
          <Route path={AppRoute.NotFound} element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
