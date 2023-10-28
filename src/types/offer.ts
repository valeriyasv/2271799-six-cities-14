import { Host } from './host';
import { LocationType } from './location';

export type Offer = {
  images: string[];
  title: string;
  isFavorite?: boolean;
  isPremium: boolean;
  location?: LocationType;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  previewImage: string;
  price: number;
  goods: string[];
  host: Host;
  id: number;
};
