import CardOffer from '../card-offer/card-offer';
import { useState } from 'react';
import { Offer } from '../../../types/offer';

type ListOffersProps = {
  offers: Offer[];
  block: string;
}

function ListOffers({ offers, block}: ListOffersProps): JSX.Element {
  const [hoveredOfferId, setHoveredOfferId] = useState<Offer['id'] | null>(null);
  function handleCardHover(offerId: Offer['id'] | null) {
    setHoveredOfferId(offerId);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CardOffer
          key={offer.id}
          block={block}
          size='large'
          onCardHover={handleCardHover}
          isHover={hoveredOfferId === offer.id}
          offer={offer}
        />
      )
      )}
    </div>
  );
}

export default ListOffers;
