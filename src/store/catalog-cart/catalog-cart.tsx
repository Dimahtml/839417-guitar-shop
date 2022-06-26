import { createSlice } from '@reduxjs/toolkit';

import { NameSpace, PurchaseStatus } from '../../const';
import { CatalogCart } from '../../types/state';

const initialState: CatalogCart = {
  purchasedGuitars: {},
  purchasingGuitarId: null,
  purchaseStatus: PurchaseStatus.Empty,
};

export const catalogCart = createSlice({
  name: NameSpace.CatalogCart,
  initialState,
  reducers: {
    beginPurchasing: (state, action: {payload: number, type: string}) => {
      state.purchasingGuitarId = action.payload;
      state.purchaseStatus = PurchaseStatus.Choice;
    },
    endPurchasing: (state) => {
      state.purchasingGuitarId = null;
      state.purchaseStatus = PurchaseStatus.Empty;
    },
    addProductToCart: (state, action: {payload: {id: number, price: number}, type: string}) => {
      state.purchaseStatus = PurchaseStatus.InCart;
      state.purchasedGuitars[action.payload.id] = {quantity: 1, price: action.payload.price};
    },
    decreaseGuitarsCount: (state, action) => {
      state.purchasedGuitars[action.payload].quantity = state.purchasedGuitars[action.payload].quantity - 1;
    },
    increaseGuitarsCount: (state, action) => {
      state.purchasedGuitars[action.payload].quantity = state.purchasedGuitars[action.payload].quantity + 1;
    },
    updateGuitarsCount: (state, action: {payload: {id: number, quantity: number}, type: string}) => {
      state.purchasedGuitars[action.payload.id].quantity = action.payload.quantity;
    },
    addPurchasedGuitar: (state, action: {payload: {id: number, quantity: number}, type: string}) => {
      state.purchasedGuitars[action.payload.id].quantity += action.payload.quantity;
    },
  },
});

export const {
  beginPurchasing,
  addProductToCart,
  endPurchasing,
  addPurchasedGuitar,
  updateGuitarsCount,
  decreaseGuitarsCount,
  increaseGuitarsCount,
} = catalogCart.actions;
