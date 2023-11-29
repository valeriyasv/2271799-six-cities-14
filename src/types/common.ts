import { CardImageSizeType } from '../components/offers/card-offer/card-offer';
import { OfferPreviewType } from './offer-preview';

export type OffersCount = number;

export type Cities = string[];

export type CardOfferProps = {
  previewImage: string;
  size: CardImageSizeType;
  price: number;
  title: string;
  id?: string;
  block?: string;
  onCardHover?: (id: OfferPreviewType['id'] | null) => void;
  type: string;
  isHover: boolean;
  isPremium: boolean;
};
