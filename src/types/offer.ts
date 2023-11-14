import { Host } from './host';
import { OfferPreviewType } from './offer-preview';

export type Offer = OfferPreviewType & {
  bedrooms: number;
  description: string;
  host: Host;
  images: string[];
  maxAdults: number;
};
