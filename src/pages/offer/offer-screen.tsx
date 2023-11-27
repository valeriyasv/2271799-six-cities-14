import Header from '../../components/header/header';
import { useParams } from 'react-router-dom';
import ListOffers from '../../components/offers/list-offers/list-offers';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchNearPlaces, fetchOffer, fetchReviews } from '../../store/api-action';
import { dropOffer } from '../../store/actions';
import OfferDetails from '../../components/offers/offers-details/offers-details';
import { MAX_NEAR_PLACES_COUNT } from '../../const';

function OfferScreen(): JSX.Element {

  const { id } = useParams();
  const reviews = useAppSelector((state) => state.reviews);
  const offer = useAppSelector((state) => state.offer);
  const dispatch = useAppDispatch();
  const nearPlaces = useAppSelector((state) => state.nearPlaces);
  const nearPlacesToRender = nearPlaces.slice(0, MAX_NEAR_PLACES_COUNT);

  useEffect(() => {
    if (id) {
      dispatch(fetchOffer(id));
      dispatch(fetchNearPlaces(id));
      dispatch(fetchReviews(id));
    }

    return () => {
      dispatch(dropOffer());
    };
  }, [id, dispatch]);

  return (
    <div className='page'>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferDetails offer={offer} offers={nearPlacesToRender} reviews={reviews} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>
            <div className="near-places__list places__list">
              <ListOffers offers={nearPlacesToRender} block={'near-places'}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
