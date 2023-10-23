import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import {HelmetProvider} from 'react-helmet-async';
import MainScreen from '../../pages/main/main-screen';
import LoginScreen from '../../pages/login/login-screen';
import FavoritesScreen from '../../pages/favorites/favorites-screen';
import OfferScreen from '../../pages/offer/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { OffersCount } from '../../types/CommonTypes.type';
import { Cities } from '../../types/CommonTypes.type';
import { Offer } from '../../types/Offer.type';
import { OffersType } from '../../types/Offers.type';


type AppScreenProps = {
  offersCount: OffersCount;
  cities: Cities;
  offers: OffersType[];
  offer: Offer;
}

function App({offersCount, cities, offers, offer}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainScreen offersCount={offersCount} cities={cities} offers={offers} />} />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth} >
              <FavoritesScreen />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Offer} element={
            <OfferScreen
              images={offer.images}
              title={offer.title}
              price={offer.price}
              goods={offer.goods}
              id={offer.id}
              isPremium={offer.isPremium}
              rating={offer.rating}
              type={offer.type}
              bedrooms={offer.bedrooms}
              maxAdults={offer.maxAdults}
              host={offer.host}
              previewImage={offer.previewImage}
            />
          }
          />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
