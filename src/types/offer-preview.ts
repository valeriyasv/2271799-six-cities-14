// import { CityType } from './city';
import { Host } from './host';
import { LocationType } from './location';

export type OfferPreviewType = {
  goods: string[];
  id: string;
  isFavorite: boolean;
  isPremium: boolean;
  location: LocationType;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  images: string[];
  bedrooms: number;
  maxAdults: number;
  host: Host;
};
