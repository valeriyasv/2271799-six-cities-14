export type InsideOffersProps = {
    insideOffer: string;
}

function InsideOffers({insideOffer}: InsideOffersProps): JSX.Element {
  return (
    <li className="offer__inside-item">
      {insideOffer}
    </li>
  );
}

export default InsideOffers;
