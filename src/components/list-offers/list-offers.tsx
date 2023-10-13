import CardOffer from "../card-offer/card-offer"

type OffersType = {
  src: string;
  price: number;
  description: string;
}

type ListOffersProps = {
  offers: OffersType[]
}

function ListOffers({ offers }: ListOffersProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        return (
          <CardOffer src={offer.src} price={offer.price} description={offer.description} />
        );
      })}
    </div>
  );
}

export default ListOffers;
