export type OffersCount = number;

export type Cities = string[];

export type CardOfferProps = {
  src: string;
  price: number;
  title: string;
  id?: string;
  block?: string;
  onCardHover?: void;
};
