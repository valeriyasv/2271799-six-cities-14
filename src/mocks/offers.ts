import { OffersType } from '../types/offers';
import { CityMapData } from '../const';


export const offerData: OffersType = {
  city: {
    name: 'Dusseldorf'
  },
  previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
  images: [
    'https://14.react.pages.academy/static/offer/16.jpg',
    'https://14.react.pages.academy/static/offer/13.jpg',
    'https://14.react.pages.academy/static/offer/6.jpg',
    'https://14.react.pages.academy/static/offer/11.jpg',
    'https://14.react.pages.academy/static/offer/14.jpg',
    'https://14.react.pages.academy/static/offer/9.jpg',
    'https://14.react.pages.academy/static/offer/2.jpg',
    'https://14.react.pages.academy/static/offer/15.jpg',
    'https://14.react.pages.academy/static/offer/7.jpg',
    'https://14.react.pages.academy/static/offer/17.jpg',
    'https://14.react.pages.academy/static/offer/4.jpg',
    'https://14.react.pages.academy/static/offer/8.jpg',
    'https://14.react.pages.academy/static/offer/10.jpg',
    'https://14.react.pages.academy/static/offer/5.jpg'
  ],
  title: 'Waterfront with extraordinary view',
  isFavorite: false,
  isPremium: true,
  rating: 4.8,
  type: 'room',
  bedrooms: 1,
  maxAdults: 2,
  price: 142,
  goods: [
    'Laptop friendly workspace',
    'Breakfast'
  ],
  host: {
    id: 25,
    name: 'Angelina',
    isPro: true,
    avatarUrl: 'img/avatar-angelina.jpg'
  },
  description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
  id: 1,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  }
};

export const offersData: OffersType[] = [
  {
    city: CityMapData.Brussels,
    previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg'
    ],
    title: 'Waterfront with extraordinary view',
    isFavorite: false,
    isPremium: false,
    rating: 4.8,
    type: 'room',
    bedrooms: 1,
    maxAdults: 2,
    price: 142,
    goods: [
      'Laptop friendly workspace',
      'Breakfast'
    ],
    host: {
      id: 24,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    location: CityMapData.Brussels.location,
    id: 0
  },
  {
    city: CityMapData.Amsterdam,
    previewImage: 'https://14.react.pages.academy/static/offer/14.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg'
    ],
    title: 'House in countryside',
    isFavorite: false,
    isPremium: true,
    rating: 5,
    type: 'room',
    bedrooms: 3,
    maxAdults: 3,
    price: 193,
    goods: [
      'Laptop friendly workspace',
      'Breakfast',
      'Washer'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    location: CityMapData.Amsterdam.location,
    id: 1
  },
  {
    city: CityMapData.Cologne,
    previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg'
    ],
    title: 'Loft Studio in the Central Area',
    isFavorite: true,
    isPremium: false,
    rating: 3.5,
    type: 'hotel',
    bedrooms: 2,
    maxAdults: 4,
    price: 200,
    goods: [
      'Washing machine',
      'Towels',
      'Laptop friendly workspace',
      'Baby seat',
      'Air conditioning',
      'Coffee machine',
      'Towels',
      'Fridge',
      'Breakfast',
      'Washer',
      'Dishwasher'
    ],
    host: {
      id: 26,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    location: CityMapData.Cologne.location,
    id: 2
  },
  {
    city: CityMapData.Dusseldorf,
    previewImage: 'https://14.react.pages.academy/static/offer/6.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg'
    ],
    title: 'Nice, cozy, warm big bed apartment',
    isFavorite: true,
    isPremium: true,
    rating: 6,
    type: 'room',
    bedrooms: 1,
    maxAdults: 3,
    price: 150,
    goods: [
      'Air conditioning',
      'Breakfast',
      'Laptop friendly workspace',
      'Washer',
    ],
    host: {
      id: 27,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Design interior in most sympathetic area! Completely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    location: CityMapData.Dusseldorf.location,
    id: 3
  },
  {
    city: CityMapData.Hamburg,
    previewImage: 'https://14.react.pages.academy/static/offer/20.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg'
    ],
    title: 'The house among olive ',
    isFavorite: false,
    isPremium: false,
    rating: 3.0,
    type: 'house',
    bedrooms: 1,
    maxAdults: 2,
    price: 172,
    goods: [
      'Baby seat',
      'Laptop friendly workspace',
      'Fridge',
      'Air conditioning',
      'Breakfast',
      'Towels',
      'Washer'
    ],
    host: {
      id: 28,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    location: CityMapData.Hamburg.location,
    id: 4
  },
  {
    city: CityMapData.Paris,
    previewImage: 'https://14.react.pages.academy/static/offer/13.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg'
    ],
    title: 'Waterfront with extraordinary view',
    isFavorite: false,
    isPremium: false,
    rating: 4.0,
    type: 'house',
    bedrooms: 4,
    maxAdults: 4,
    price: 250,
    goods: [
      'Washer',
      'Laptop friendly workspace',
      'Air conditioning',
      'Breakfast'
    ],
    host: {
      id: 29,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    location: CityMapData.Paris.location,
    id: 5
  }
];

export const offersNearbyData: OffersType[] = [
  {
    city: CityMapData.Amsterdam,
    previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg'
    ],
    title: 'Waterfront with extraordinary view',
    isFavorite: false,
    isPremium: false,
    rating: 4.8,
    type: 'room',
    bedrooms: 1,
    maxAdults: 2,
    price: 142,
    goods: [
      'Laptop friendly workspace',
      'Breakfast'
    ],
    host: {
      id: 24,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    location: CityMapData.Amsterdam.location,
    id: 0
  },
  {
    city: CityMapData.Paris,
    previewImage: 'https://14.react.pages.academy/static/offer/14.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg'
    ],
    title: 'House in countryside',
    isFavorite: false,
    isPremium: true,
    rating: 5,
    type: 'room',
    bedrooms: 3,
    maxAdults: 3,
    price: 193,
    goods: [
      'Laptop friendly workspace',
      'Breakfast',
      'Washer'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    location: CityMapData.Paris.location,
    id: 1
  },
];
