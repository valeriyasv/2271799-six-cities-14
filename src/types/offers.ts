import { Host } from './host';
import { LocationType } from './location';

export type OffersType = {
  city?: {
    name: string;
    location?: LocationType;
  };
  previewImage: string;
  images: string[];
  title: string;
  isFavorite?: boolean;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: Host;
  description?: string;
  id: number;
};
