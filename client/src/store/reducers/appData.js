import { createReducer } from "@reduxjs/toolkit";
import {
  getProductById,
  getProductsByType,
  getCatalogSections,
  setSortType,
  setSortDirection,
  setProductListPage
} from "../actions";
import { SortTypes, SortDirection } from "../../const";

const initialState = {
  sections: [],
  products: [],
  productsCount: null,
  product: null,
  breadcrumbs: [],
  sortType: SortTypes.PRICE,
  sortDirection: SortDirection.ASCEND,
  pagination: {
    currentSize: 9,
    currentPage: 1,
  },
};

export const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(getProductById, (state, action) => {
      state.product = action.payload;
      state.breadcrumbs = action.payload.breadcrumbs;
    })
    .addCase(getProductsByType, (state, action) => {
      state.products = action.payload.catalog;
      state.productsCount = action.payload.count;
      state.breadcrumbs = action.payload.breadcrumbs;
    })
    .addCase(getCatalogSections, (state, action) => {
      state.sections = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setSortDirection, (state, action) => {
      state.sortDirection = action.payload;
    })
    .addCase(setProductListPage, (state, action) => {
      state.pagination.currentPage = action.payload;
    });
});
