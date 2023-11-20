import ReviewList from '../../review/review-list';
import ImageOffer from '../image-offer/image-offer';
import InsideOffers from '../inside-offer/inside-offer';
import Map from '../../map/map';
import { Offer } from '../../../types/offer';
import { OffersType } from '../../../types/offers';

type OfferTypeProps = {
  offer: Offer | null;
  offers: OffersType[];
}

function OfferDetails ({offer, offers}: OfferTypeProps) {
  if(!offer) {
    return null;
  }

  const ratingPercentage: number = (offer.rating / 6) * 100;
  return (
    <>
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {offer.images.map((item) => <ImageOffer src={item} key={offer.id} />)}
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          <div className="offer__mark">
            <span>{offer.isPremium ? 'Premium' : ''}</span>
          </div>
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {offer.title}
            </h1>
            <button className="offer__bookmark-button button" type="button">
              <svg className="offer__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{ width: `${ratingPercentage}%` }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{offer.rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {offer.bedrooms} Bedrooms
            </li>
            <li className="offer__feature offer__feature--adults">
                Max {offer.maxAdults} adults
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{offer.price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {offer.goods.map((item) => <InsideOffers insideOffer={item} key={offer.id}/>)}
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                <img
                  className="offer__avatar user__avatar"
                  src={offer.host.avatarUrl}
                  width="74"
                  height="74"
                  alt="Host avatar"
                />
              </div>
              <span className="offer__user-name">
                {offer.host.name}
              </span>
              <span className="offer__user-status">
                {offer.host.isPro}
              </span>
            </div>
            <div className="offer__description">
              <p className="offer__text">
                {offer.description}
              </p>
            </div>
          </div>
          <ReviewList />
        </div>
      </div>
      <Map block={'offer'} location={offer.location} offers={offers} specialOfferId={null} />
    </>
  );
}

export default OfferDetails;
