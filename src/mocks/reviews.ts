import { ReviewType } from '../types/review';

export const reviewsData: ReviewType[] = [
  {
    id: 1,
    comment: 'I stayed here for one night and it was an unpleasant experience.',
    date: '2023-11-04T11:13:12.982Z',
    rating: 5,
    user: {
      id: 16,
      isPro: true,
      name: 'Mollie',
      avatarUrl: 'https://14.react.pages.academy/static/avatar/7.jpg'
    },
  },

  {
    id: 2,
    comment: 'The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.',
    date: '2023-11-04T11:13:12.982Z',
    rating: 2,
    user: {
      id: 13,
      isPro: false,
      name: 'Zak',
      avatarUrl: 'https://14.react.pages.academy/static/avatar/4.jpg'
    },
  },
  {
    id: 3,
    comment: 'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
    date: '2023-10-02T09:23:20.316Z',
    rating: 4,
    user: {
      id: 15,
      isPro: false,
      name: 'Kendall',
      avatarUrl: 'https://14.react.pages.academy/static/avatar/6.jpg'
    },
  },
];
