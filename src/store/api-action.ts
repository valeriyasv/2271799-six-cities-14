import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { APIRoute, NameSpace } from '../const';
import { OfferPreviewType } from '../types/offer-preview';
import { ReviewSendType, ReviewType } from '../types/review';
import { AuthType } from '../types/auth';
import { dropToken, saveToken } from '../services/token';
import { UserType } from '../types/user';
import { StateType } from '../types/state';

type ExtraType = {
  extra: AxiosInstance;
}

export const fetchOffers = createAsyncThunk<OfferPreviewType[], undefined, ExtraType>(
  `${NameSpace.Offers}/fetchOffers`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferPreviewType[]>(APIRoute.Offers);
    return data;
  }
);

export const fetchOffer = createAsyncThunk<Offer, Offer['id'], ExtraType>(
  `${NameSpace.Offer}/fetchOffer`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
    return data;
  }
);

export const fetchReviews = createAsyncThunk<ReviewType[], Offer['id'], ExtraType>(
  `${NameSpace.Reviews}/fetchReviews`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<ReviewType[]>(`${APIRoute.Reviews}/${offerId}`);
    return data;
  }
);

export const postReviews = createAsyncThunk<
  ReviewType,
  { reviewData: ReviewSendType; offerId: Offer['id'] },
  ExtraType
>(
  `${NameSpace.Reviews}/postReview`,
  async ({reviewData, offerId}, {extra: api}) => {
    const {data} = await api.post<ReviewType>(`${APIRoute.Reviews}${offerId}`,
      reviewData
    );
    return data;
  }
);

export const fetchNearPlaces = createAsyncThunk<OfferPreviewType[], Offer['id'], {
  state: StateType;
  extra: AxiosInstance;
}>(
  `${NameSpace.NearPlaces}/fetchNearPlaces`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferPreviewType[]>(
      `${APIRoute.Offers}/${offerId}${APIRoute.NearPlaces}`
    );
    return data;
  }
);

export const fetchFavorites = createAsyncThunk<OfferPreviewType[], undefined, ExtraType>(
  `${NameSpace.Favorites}/fetchFavorites`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferPreviewType[]>(APIRoute.Favorites);

    return data;
  }
);

export const checkAuth = createAsyncThunk<AuthType, undefined, ExtraType>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<AuthType>(APIRoute.Login);

    return data;
  }
);


export const logout = createAsyncThunk<void, undefined, ExtraType>(
  `${NameSpace.User}/logout`,
  (_arg, {extra: api}) => {
    api.delete(APIRoute.Logout);
    dropToken();
  }
);

export const login = createAsyncThunk<AuthType, UserType, ExtraType>(
  `${NameSpace.User}/login`,
  async (loginData, {extra: api}) => {
    const {data} = await api.post<AuthType>(APIRoute.Login, loginData);
    saveToken(data.token);

    return data;
  }
);

export const postFavorites = createAsyncThunk<Offer, {offer :Offer; offerId: Offer['id']; status: number}, {
  state: StateType;
  extra: AxiosInstance;
}
>
(
  `${NameSpace.Favorites}/postFavorites`,
  async({offer, offerId, status},{ extra:api })=>{
    const { data } = await api.post<Offer>(`favorite/${offerId}/${status}`, offer);
    return data;
  }
);
