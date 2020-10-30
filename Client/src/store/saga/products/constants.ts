export const GET_PRODUCTS: '@user/get_products' = '@user/get_products';
export const GET_PRODUCT: '@user/get_product' = '@user/get_product';
export const GET_PRODUCTS_SUCCESS: '@user/get_products_Success' =
  '@user/get_products_Success';
  export const POST_CART: '@user/POST_CART' =
  '@user/POST_CART';
export interface GetProductsType {
  type: string;
  payload: any;
}

export interface GetProductsSuccessType {
  type: string;
  payload: any[];
}

export interface GetProductType {
  type: string;
  payload: string;
}

export interface postCartType {
  type: string;
  payload: any;
}

export type PRODUCT_TYPE =
  | GetProductsType
  | GetProductType
  | GetProductsSuccessType
  | postCartType;
