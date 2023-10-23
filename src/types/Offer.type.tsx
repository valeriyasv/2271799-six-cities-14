import { Host } from './Host.type';

export type Offer = {
    images: string[];
      title: string;
      isFavorite?: boolean;
      isPremium: boolean;
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
