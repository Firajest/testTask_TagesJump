import items from '../data/items.json';
import {
  SORT_BY_PRICE_ASC,
  SORT_BY_PRICE_DESC,
  FILTER_BY_MATERIAL,
} from './actionTypes';

const initialState = {
  allData: items,
  filteredData: [],
};

function compareAsc(a, b) {
  if (a.price.current_price < b.price.current_price) {
    return -1;
  }
  if (a.price.current_price > b.price.current_price) {
    return 1;
  }
  return 0;
};

function compareDesc(a, b) {
  if (a.price.current_price < b.price.current_price) {
    return 1;
  }
  if (a.price.current_price > b.price.current_price) {
    return -1;
  }
  return 0;
};

export default function ReduxStorage(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SORT_BY_PRICE_ASC: {
      return {
        ...state,
        filteredData: [...state.allData].sort(compareAsc),
      };
    }
    case SORT_BY_PRICE_DESC: {
      return {
        ...state,
        filteredData: [...state.allData].sort(compareDesc),
      };
    }
    case FILTER_BY_MATERIAL: {
      const materialSelected = [...state.allData].filter((item) => item.material === Number(payload));
      return {
        ...state,
        filteredData: materialSelected,
      };
    }
    default:
      return state;
  }
}
