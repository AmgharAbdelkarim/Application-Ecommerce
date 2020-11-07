export const UPDATE_CART = '@user/UPDATE_CART';
export const DELETE_CART_ITEM = '@user/DELETE_CART_ITEM';
export const POST_CART: '@user/POST_CART' =
  '@user/POST_CART';
export const UPDATE_CART_ITEM_QUANTITY = '@user/UPDATE_CART_ITEM_QUANTITY';

export interface updateCartType {
  type: string;
  payload: any;
}
export interface deleteCartItemType {
  type: typeof DELETE_CART_ITEM;
  productId: string;
}
export interface updateCartItemQuantityType {
  type: string;
  payload: any;
}

export interface postCartType {
    type: string;
    payload: any;
}