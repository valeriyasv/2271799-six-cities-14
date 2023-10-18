import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main/main-screen';
import LoginScreen from '../../pages/login/login-screen';
import FavoritesScreen from '../../pages/favorites/favorites-screen';
import OfferScreen from '../../pages/offer/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

type OffersType = {
  id: number;
  src: string;
  price: number;
  title: string;
}

type AppScreenProps = {
  offersCount: number;
  cities: string[];
  offers: OffersType[];
}

function App({offersCount, cities, offers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen offersCount={offersCount} cities={cities} offers={offers} />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.Favorites} element={<FavoritesScreen />} />
        <Route path={AppRoute.Offer} element={<OfferScreen />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
