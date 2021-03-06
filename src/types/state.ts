import { store } from '../store';
import { SortingType, SortingOrder, PurchaseStatus, PromoCodeStatus } from '../const';
import { Guitars } from './guitar';
import { PurchasedGuitars } from './cart';
import { ReviewsByGuitar } from './review';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type CatalogData = {
  guitars: Guitars;
  reviewsByGuitar: ReviewsByGuitar;
  isDataLoaded: boolean;
};

export type CatalogSearch = {
  guitarsBySearch: Guitars;
};

export type CatalogFilter = {
  guitarsTypes: Array<string>;
  priceSearch: {
    min: number | null,
    max: number | null,
  };
  stringCount: string[],
  minPriceAvailable: number,
  maxPriceAvailable: number,
}

export type CatalogSorting = {
  sortingType: SortingType,
  sortingOrder: SortingOrder,
}

export type CatalogCart = {
  purchasedGuitars: PurchasedGuitars,
  purchasingGuitarId: number | null,
  purchaseStatus: PurchaseStatus,
  promoCodeStatus: PromoCodeStatus;
  discountPercent: number;
}
