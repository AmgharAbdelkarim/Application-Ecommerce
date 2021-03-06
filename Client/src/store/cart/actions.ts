import {
  postCartType,
  POST_CART,
  deleteCartItemType,
  DELETE_CART_ITEM,
  updateCartType,
  UPDATE_CART,
  updateCartItemQuantityType,
  UPDATE_CART_ITEM_QUANTITY,
} from './constants';

export const postCart = (
  productId: string,
  quantity: string,
): postCartType => ({
  type: POST_CART,
  payload: { productId, quantity },
});

export const deleteCartItem = (productId: string): deleteCartItemType => ({
  type: DELETE_CART_ITEM,
  productId,
});

export const updateCart = (payload: any): updateCartType => ({
  type: UPDATE_CART,
  payload,
});

export const updateCartItemQuantity = (payload: {
  productId: string;
  quantity: number;
}): updateCartItemQuantityType => ({
  type: UPDATE_CART_ITEM_QUANTITY,
  payload,
});
