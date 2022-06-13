import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { APIRoute, AppRoute } from '../const';
import { redirectToRoute } from './action';
import { AppDispatch, State } from '../types/state';
import { Guitar, Guitars } from '../types/guitar';
import { Review, PostingReview } from '../types/review';
import {
  loadGuitars,
  resetGuitars,
  loadSortedGuitars,
  loadGuitar,
  loadReviews,
  addReview
} from './catalog-data/catalog-data';

import {
  loadGuitarsByName,
  resetGuitarsByName
} from './catalog-search/catalog-search';

export const fetchGuitarsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchGuitars',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Guitars>(APIRoute.Guitars);
    dispatch(loadGuitars(data));
  },
);

export const fetchGuitarsByNameAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchGuitarsByName',
  async (name, {dispatch, extra: api}) => {
    const {data} = await api.get<Guitars>(`${APIRoute.Guitars}?name_like=${name}`);
    dispatch(loadGuitarsByName(data));
  },
);

export const resetGuitarsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchGuitarsByName',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(resetGuitars());
  },
);

export const resetGuitarsByNameAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchGuitarsByName',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(resetGuitarsByName());
  },
);

export const fetchSortedGuitarsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSortedGuitars',
  async (search, {dispatch, extra: api}) => {
    const {data} = await api.get<Guitars>(`${APIRoute.Guitars}${search}`);
    dispatch(loadSortedGuitars(data));
  },
);

export const fetchGuitarAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchGuitar',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Guitar>(APIRoute.Guitar.replace(':id', id));
      dispatch(loadGuitar(data));
    } catch(error) {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Review>(APIRoute.Comment.replace(':id', id));
    dispatch(loadReviews(data));
  },
);

export const sendReviewAction = createAsyncThunk<void, PostingReview, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/addReview',
  async (review, {dispatch, extra: api}) => {
    const {data} = await api.post<Review>(APIRoute.SendComment, review);
    dispatch(addReview(data));
  },
);
