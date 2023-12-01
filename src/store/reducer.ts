import { Offer } from '../types/offer';
import { ReviewType } from '../types/review';
import { CityType } from '../types/city';
import { CityMapData, RequestStatus } from '../const';
import {createReducer} from '@reduxjs/toolkit';
import { OfferPreviewType } from '../types/offer-preview';
import { OffersType } from '../types/offers';
import { AuthorizationStatus } from '../const';
import
{
  fetchOffers,
  fetchReviews,
  login,
  logout,
  checkAuth,
  postReviews,
  fetchFavorites,
  fetchNearPlaces,
  fetchOffer
}
  from './api-action';
import { setActiveCity } from './actions';
import { UserType } from '../types/user';
import { dropOffer } from './actions';

const initialState: {
  offers: OffersType[];
  offersFetchingStatus: RequestStatus;
  nearPlaces: OffersType[];
  reviews: ReviewType[];
  reviewsFetchingStatus: RequestStatus;
  reviewsSendingStatus: RequestStatus;
  offer: Offer | null;
  offerFetchingStatus: RequestStatus;
  favorites: OfferPreviewType[];
  favoritesFetchingStatus: RequestStatus;
  activeCity: CityType;
  authorizationStatus: AuthorizationStatus;
  user: UserType | null;
  loginSendingStatus: RequestStatus;
} = {
  offers: [],
  offersFetchingStatus: RequestStatus.Idle,
  nearPlaces: [],
  reviews: [],
  reviewsFetchingStatus: RequestStatus.Idle,
  reviewsSendingStatus: RequestStatus.Idle,
  offer: null,
  offerFetchingStatus: RequestStatus.Idle,
  favorites: [],
  favoritesFetchingStatus: RequestStatus.Idle,
  activeCity: CityMapData.Paris,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  loginSendingStatus: RequestStatus.Idle,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers.pending, (state) => {
      state.offerFetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offersFetchingStatus = RequestStatus.Success;
      state.offers = action.payload;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.offersFetchingStatus = RequestStatus.Error;
    })
    .addCase(fetchOffer.pending, (state) => {
      state.offerFetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchOffer.fulfilled, (state, action) => {
      state.offerFetchingStatus = RequestStatus.Success;
      state.offer = action.payload;
    })
    .addCase(fetchOffer.rejected, (state) => {
      state.offerFetchingStatus = RequestStatus.Error;
    })
    .addCase(fetchNearPlaces.fulfilled, (state, action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(fetchReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
      state.reviewsFetchingStatus = RequestStatus.Success;
    })
    .addCase(fetchReviews.pending, (state) => {
      state.reviewsFetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchReviews.rejected, (state) => {
      state.reviewsFetchingStatus = RequestStatus.Error;
    })
    .addCase(postReviews.pending, (state) => {
      state.reviewsSendingStatus = RequestStatus.Pending;
    })
    .addCase(postReviews.fulfilled, (state, action) => {
      state.reviewsSendingStatus = RequestStatus.Success;
      state.reviews.push(action.payload);
    })
    .addCase(postReviews.rejected, (state) => {
      state.reviewsSendingStatus = RequestStatus.Error;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchFavorites.fulfilled, (state, action) => {
      state.favoritesFetchingStatus = RequestStatus.Success;
      state.favorites = action.payload;
    })
    .addCase(fetchFavorites.pending, (state) => {
      state.favoritesFetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchFavorites.rejected, (state) => {
      state.favoritesFetchingStatus = RequestStatus.Error;
    })
    .addCase(login.pending, (state) => {
      state.loginSendingStatus = RequestStatus.Pending;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.loginSendingStatus = RequestStatus.Success;
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(login.rejected, (state) => {
      state.loginSendingStatus = RequestStatus.Error;
      state.user = null;
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    // .addCase(dropLoginSendingStatus, (state) => {
    //   state.loginSendingStatus = RequestStatus.Idle;
    // })
    .addCase(logout.pending, (state) => {
      state.user = null;
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(checkAuth.pending, (state) => {
      state.user = null;
      state.authorizationStatus = AuthorizationStatus.Unknown;
    })
    .addCase(checkAuth.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(checkAuth.rejected, (state) => {
      state.user = null;
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});
