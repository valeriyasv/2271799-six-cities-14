import MainScreen from '../../pages/main/main-screen';

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
    <MainScreen
      offersCount={offersCount}
      cities={cities}
      offers={offers}
    />
  );
}

export default App;
