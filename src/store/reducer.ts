import { Offer } from '../types/offer';
import { ReviewType } from '../types/review';
import { CityType } from '../types/city';
import { CityMapData } from '../const';
import { offersData } from '../mocks/offers';
import { reviewsData } from '../mocks/reviews';
import {createReducer} from '@reduxjs/toolkit';
import { OfferPreviewType } from '../types/offer-preview';
import
{
  fetchOffers,
  fetchReviews,
  setActiveCity,
  dropOffer,
  fetchFavorites,
  fetchNearPlaces,
  fetchOffer
}
  from './actions';

const initialState: {
  offers: OfferPreviewType[];
  nearPlaces: OfferPreviewType[];
  reviews: ReviewType[];
  offer: Offer | null;
  favorites: OfferPreviewType[];
  activeCity: CityType;
} = {
  offers: offersData,
  nearPlaces: [],
  reviews: [],
  offer: null,
  favorites: [],
  activeCity: CityMapData.Paris,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state) => {
      state.offers = offersData;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = offersData.find((offer) => offer.id === action.payload) ?? null;
    })
    .addCase(fetchNearPlaces, (state, action) => {
      state.nearPlaces = offersData.filter((offer) => offer.id !== action.payload);
    })
    .addCase(fetchReviews, (state) => {
      state.reviews = reviewsData;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.nearPlaces = [];
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchFavorites, (state) => {
      state.favorites = state.offers.filter((offer) => offer.isFavorite);
    });
});
