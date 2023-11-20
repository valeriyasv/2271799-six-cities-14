import CardOffer from '../card-offer/card-offer';
import { OffersType } from '../../../types/offers';

type ListOffersProps = {
  offers: OffersType[];
  block: string;
}

function ListOffers({ offers, block}: ListOffersProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CardOffer
          key={offer.id}
          src={offer.previewImage}
          price={offer.price}
          title={offer.title}
          id={offer.id}
          block={block}
        />
      )
      )}
    </div>
  );
}

export default ListOffers;
