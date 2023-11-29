import CardOffer from '../card-offer/card-offer';
import { OffersType } from '../../../types/offers';
import { useState } from 'react';
import { OfferPreviewType } from '../../../types/offer-preview';

type ListOffersProps = {
  offers: OffersType[];
  block: string;
}

function ListOffers({ offers, block}: ListOffersProps): JSX.Element {
  const [hoveredOfferId, setHoveredOfferId] = useState<OfferPreviewType['id'] | null>(null);
  function handleCardHover(offerId: OfferPreviewType['id'] | null) {
    setHoveredOfferId(offerId);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CardOffer
          key={offer.id}
          previewImage={offer.previewImage}
          price={offer.price}
          title={offer.title}
          id={offer.id}
          block={block}
          type={offer.type}
          size='large'
          onCardHover={handleCardHover}
          isHover={hoveredOfferId === offer.id}
          isPremium={offer.isPremium}
        />
      )
      )}
    </div>
  );
}

export default ListOffers;
