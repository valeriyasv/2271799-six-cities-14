export const Setting = {
  OffersCount: 312
};

export const cities: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

type OffersType = {
  id: number;
  src: string;
  price: number;
  title: string;
}

export const offersData: OffersType[] = [
  {
    id: 1,
    src: 'img/apartment-01.jpg',
    price: 140,
    title: 'Beautiful & luxurious studio at great location'
  },
  {
    id: 2,
    src: 'img/apartment-02.jpg',
    price: 45,
    title: 'Waterfront with extraordinary view'
  },
  {
    id: 3,
    src: 'img/apartment-03.jpg',
    price: 700,
    title: 'Lorem ipsum Lorem ipsum Lorem ipsum'
  },
  {
    id: 4,
    src: 'img/apartment-02.jpg',
    price: 123,
    title: ''
  },
  {
    id: 5,
    src: 'img/studio-01.jpg',
    price: 140,
    title: 'Lorem ipsum'
  }
];

export type ImageOfferType = {
  src: string;
}

export const ImagesOffersData: ImageOfferType[] = [

];

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer'
}
