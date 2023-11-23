import ListOffers from '../../components/offers/list-offers/list-offers';
import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import Map from '../../components/map/map';
import { CityMapData } from '../../const';
import Sorting from '../../components/sorting/sorting';
import { useState } from 'react';
import { SortingType } from '../../types/sorting';
import { sorting } from '../../utils';

function MainScreen(): JSX.Element {
  const activeCity = CityMapData.Amsterdam;
  const offers = useAppSelector((state) => state.offers);
  const [activeSorting, setActiveSorting] = useState<SortingType>('Popular');
  function handleSortingChange(type: SortingType) {
    setActiveSorting(type);
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Choose your place!</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {activeCity.name}</b>
              <Sorting activeSorting={activeSorting} onChange={handleSortingChange}/>
              <ListOffers offers={sorting[activeSorting](offers)} block={'cities'}/>
            </section>
            <div className="cities__right-section">
              <Map offers={offers} block='cities' location={activeCity.location} specialOfferId={null}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
