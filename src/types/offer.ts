import { Host } from './host';
import { OfferPreviewType } from './offer-preview';
import { CityType } from './city';

export type Offer = OfferPreviewType & {
  city?: CityType;
  bedrooms: number;
  description?: string;
  host: Host;
  images: string[];
  maxAdults: number;
};
