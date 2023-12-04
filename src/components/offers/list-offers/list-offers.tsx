import CardOffer from '../card-offer/card-offer';
import { Offer } from '../../../types/offer';

type ListOffersProps = {
  offers: Offer[];
  block: string;
  onCardHover: (id: string | null) => void;
}

function ListOffers({ offers, block, onCardHover}: ListOffersProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CardOffer
          key={offer.id}
          block={block}
          size='large'
          onCardHover={onCardHover}
          offer={offer}
        />
      )
      )}
    </div>
  );
}

export default ListOffers;
