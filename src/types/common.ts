export type OffersCount = number;

export type Cities = string[];

export type CardOfferProps = {
  src: string;
  price: number;
  title: string;
  id?: number;
  block?: string;
  onCardHover?: void;
};
