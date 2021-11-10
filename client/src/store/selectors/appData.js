import { createSelector } from "reselect";
import { sortProducts } from "../../utils";

export const getProduct = ({DATA}) => DATA.product;
export const getProducts = ({DATA}) => DATA.products;
export const getProductsCount = ({DATA}) => DATA.productsCount;
export const getSections = ({DATA}) => DATA.sections;
export const getBreadcrumbs = ({DATA}) => DATA.breadcrumbs;
export const getSortType = ({DATA}) => DATA.sortType;
export const getSortDirection = ({DATA}) => DATA.sortDirection;
export const getProductListPage = ({DATA}) => DATA.pagination.currentPage;
export const getProductListSize = ({DATA}) => DATA.pagination.currentSize;

export const getSortedProducts = createSelector(
  [getSortType, getSortDirection, getProducts],
  (sortType, sortDirection, products) => {
    return sortProducts(sortType, sortDirection, products);
  }
);
