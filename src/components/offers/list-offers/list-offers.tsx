import CardOffer from '../card-offer/card-offer';

type OffersType = {
  id: number;
  src: string;
  price: number;
  title: string;
}

type ListOffersProps = {
  offers: OffersType[];
}

function ListOffers({ offers }: ListOffersProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <CardOffer key={offer.id} src={offer.src} price={offer.price} title={offer.title} />
      )}
    </div>
  );
}

export default ListOffers;
