import { Host } from './host';
import { LocationType } from './location';
import { CityType } from './city';

export type OffersType = {
  city?: CityType;
  previewImage: string;
  images: string[];
  title: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: Host;
  description?: string;
  location: LocationType;
  id: string;
};
