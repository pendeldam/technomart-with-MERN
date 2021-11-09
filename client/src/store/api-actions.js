import axios from 'axios';
import {
  getProductById,
  getProductsByType,
  getCatalogSections,
  setConnectionStatus
} from './actions';
import { AppRoute, CONNECTION_STATUS } from '../const';

export const fetchProductById = (type, id) => (dispatch) => (
  axios.get(`${AppRoute.CATALOG}/${type}/${id}`)
    .then(({data: product}) => {
      dispatch(setConnectionStatus(CONNECTION_STATUS.WAIT));
      dispatch(getProductById(product));
      dispatch(setConnectionStatus(CONNECTION_STATUS.SUCCESS));
    })
);

export const fetchProductsByType = (type) => (dispatch) => (
  axios.get(`${AppRoute.CATALOG}/${type}`)
    .then(({data: products}) => {
      dispatch(setConnectionStatus(CONNECTION_STATUS.WAIT));
      dispatch(getProductsByType(products));
      dispatch(setConnectionStatus(CONNECTION_STATUS.SUCCESS));
    })
);

export const fetchCatalogSections = () => (dispatch) => (
  axios.get(AppRoute.CATALOG)
    .then(({data: sections}) => {
      dispatch(setConnectionStatus(CONNECTION_STATUS.WAIT));
      dispatch(getCatalogSections(sections));
      dispatch(setConnectionStatus(CONNECTION_STATUS.SUCCESS));
    })
);
