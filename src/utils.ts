import { OfferPreviewType } from './types/offer-preview';
import { SortingType } from './types/sorting';

export default function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}

function sortByRating(a: OfferPreviewType, b: OfferPreviewType) {
  return b.rating - a.rating;
}

function sortLowToHigh(a: OfferPreviewType, b: OfferPreviewType) {
  return a.price - b.price;
}

function sortHighToLow(a: OfferPreviewType, b: OfferPreviewType) {
  return b.price - a.price;
}

export const sorting: Record<SortingType, (offers: OfferPreviewType[]) => OfferPreviewType[]> =
  {
    Popular: (offers: OfferPreviewType[]) => offers.slice(),
    HighToLow: (offers: OfferPreviewType[]) => offers.toSorted(sortHighToLow),
    LowToHigh: (offers: OfferPreviewType[]) => offers.toSorted(sortLowToHigh),
    TopRated: (offers: OfferPreviewType[]) => offers.toSorted(sortByRating),
  };

