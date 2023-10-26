import CardOffer from '../card-offer/card-offer';
import { OffersType } from '../../../types/Offers.type';

type ListOffersProps = {
  offers: OffersType[];
}

function ListOffers({ offers }: ListOffersProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <CardOffer key={offer.id} src={offer.previewImage} price={offer.price} title={offer.title} id={offer.id} />
      )}
    </div>
  );
}

export default ListOffers;
