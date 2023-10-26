import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import {Helmet} from 'react-helmet-async';
import CardOffer from '../../components/offers/card-offer/card-offer';
import { CardOfferProps } from '../../types/Common.type';

function FavoritesScreen({src, price, title, id}: CardOfferProps): JSX.Element {
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
                  <CardOffer src={src} price={price} title={title} id={id}/>
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <CardOffer src={src} price={price} title={title} id={id}/>
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
