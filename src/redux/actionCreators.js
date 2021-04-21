import {
  SORT_BY_PRICE_ASC,
  SORT_BY_PRICE_DESC,
  FILTER_BY_MATERIAL,
} from './actionTypes';

export const sortByPriceAsc = () => ({ type: SORT_BY_PRICE_ASC });
export const sortByPriceDesc = () => ({ type: SORT_BY_PRICE_DESC });
export const filterByMaterial = (id) => ({ type: FILTER_BY_MATERIAL, payload: id });
