import { PRODUCT_TYPE, GET_PRODUCTS_SUCCESS } from './constants';

const initialState: any[] = [];

export const ProductReducer = (state = initialState, action: PRODUCT_TYPE) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
};
