/* eslint-disable import/first */
import {
  GetProductsType,
  GetProductType,
  GET_PRODUCTS,
  GET_PRODUCT,
  GetProductsSuccessType,
  GET_PRODUCTS_SUCCESS,
  postCartType,
  POST_CART,
} from './constants';

export const getProducts = (history: any): GetProductsType => ({
  type: GET_PRODUCTS,
  payload: history,
});

export const GetProductsSuccess = (data: any[]): GetProductsSuccessType => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: data,
});

export const getProduct = (id: string): GetProductType => ({
  type: GET_PRODUCT,
  payload: id,
});

export const postCart = (productId: string , quantity : string): postCartType => ({
  type: POST_CART,
  payload: {productId , quantity},
});