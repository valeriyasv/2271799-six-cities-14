import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import {Helmet} from 'react-helmet-async';
import ListOffers from '../../components/offers/list-offers/list-offers';

// import { OfferPreviewType } from '../../types/offer-preview';
import { useAppSelector } from '../../hooks';


// function getFavoritesByCity(favorites: OfferPreviewType[]) {
//   return favorites.reduce<{ [key: string]: OfferPreviewType[] }>((acc, curr) => {
//     const city = curr.city.name;

//     if (!(city in acc)) {
//       acc[city] = [];
//     }
//     acc[city].push(curr);

//     return acc;
//   }, {});
// }

function FavoritesScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  // const favorites = useAppSelector((state) => state.favorites);
  // const favoritesByCity = getFavoritesByCity(favorites);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Favorites offers</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <ListOffers offers={offers} block={'favorites'}/>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
