import { createReducer } from "@reduxjs/toolkit";
import {
  getProductById,
  getProductsByType,
  getCatalogSections,
  setSortType,
  setSortDirection
} from "../actions";
import { SortTypes, SortDirection } from "../../const";

const initialState = {
  product: null,
  products: [],
  sections: [],
  breadcrumbs: [],
  sortType: SortTypes.PRICE,
  sortDirection: SortDirection.ASCEND,
};

export const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(getProductById, (state, action) => {
      state.product = action.payload;
      state.breadcrumbs = action.payload.breadcrumbs;
    })
    .addCase(getProductsByType, (state, action) => {
      state.products = action.payload.catalog;
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
    });
});
