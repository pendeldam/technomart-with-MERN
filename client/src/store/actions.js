import { createAction } from "@reduxjs/toolkit";

export const ActionType = {
  CONNECTION_STATUS: 'data/CONNECTION_STATUS',
  GET_PRODUCT_BY_ID: 'data/GET_PRODUCT_BY_ID',
  GET_PRODUCTS_BY_TYPE: 'data/GET_PRODUCTS_BY_TYPE',
  GET_CATALOG_SECTIONS: 'data/GET_CATALOG_SECTIONS',
};

export const getProductById = createAction(
  ActionType.GET_PRODUCT_BY_ID,
  (product) => ({payload: product})
);

export const getProductsByType = createAction(
  ActionType.GET_PRODUCTS_BY_TYPE,
  (products) => ({payload: products})
);

export const getCatalogSections = createAction(
  ActionType.GET_CATALOG_SECTIONS,
  (sections) => ({payload: sections})
);

export const setConnectionStatus = createAction(
  ActionType.CONNECTION_STATUS,
  (status) => ({payload: status})
);
