import { createReducer } from "@reduxjs/toolkit";
import {
  getProductById,
  getProductsByType,
  getCatalogSections
} from "../actions";

const initialState = {
  product: null,
  products: [],
  sections: [],
  breadcrumbs: [],
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
    });
});
