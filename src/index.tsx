import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Setting } from './const';

const cities: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

type OffersType = {
  src: string;
  price: number;
  description: string;
}

const offersData: OffersType[] = [
  {
    src: "img/apartment-01.jpg",
    price: 140,
    description: "Lorem ipsum"
  },
  {
    src: "img/apartment-02.jpg",
    price: 45,
    description: "Lorem ipsum Lorem ipsumLorem ipsum"
  },
  {
    src: "img/apartment-03.jpg",
    price: 700,
    description: "Lorem ipsum Lorem ipsum Lorem ipsum"
  },
  {
    src: "img/apartment-04.jpg",
    price: 123,
    description: "Lorem ipsum"
  },
  {
    src: "img/apartment-01.jpg",
    price: 140,
    description: "Lorem ipsum"
  }
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offersCount = {Setting.OffersCount}
      cities = {cities}
      offers = {offersData}
    />
  </React.StrictMode>,
);
