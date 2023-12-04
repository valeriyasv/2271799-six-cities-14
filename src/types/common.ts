import { CardImageSizeType } from '../components/offers/card-offer/card-offer';
import { Offer } from './offer';
import { OfferPreviewType } from './offer-preview';

export type OffersCount = number;

export type Cities = string[];

export type CardOfferProps = {
  offer: Offer;
  size: CardImageSizeType;
  block?: string;
  onCardHover?: (id: OfferPreviewType['id'] | null) => void;
  isHover: boolean;
};
