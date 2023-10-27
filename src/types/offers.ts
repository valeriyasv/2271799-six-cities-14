import { Host } from './host';

export type OffersType = {
    city?: {
      name: string;
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
