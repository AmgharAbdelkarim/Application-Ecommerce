// eslint-disable-next-line import/first
import { takeLatest, put, call } from 'redux-saga/effects';
import { GET_PRODUCTS, GET_PRODUCT, POST_CART } from './constants';
import { GetProductsApi, postCartApi } from './api';
import { GetProductsSuccess } from './action';
import { updateCart } from '../user/action';

export function* GetProducts({ payload }: { type: string; payload?: any }) {
  try {
    console.log('eee');
    const { data: response } = yield call(GetProductsApi);
    yield put(GetProductsSuccess(response));
    payload.push('/products');
  } catch {}
}

export function* GetProduct() { }
export function* postCart({ payload }: { type: string; payload?: string }) {
  console.log(payload)
  const { data: response } = yield call(postCartApi, payload);
  yield put(updateCart(response))
}

export function* watchGetProducts() {
  yield takeLatest(GET_PRODUCTS, GetProducts);
}
export function* watchGetProduct() {
  yield takeLatest(GET_PRODUCT, GetProduct);
}
export function* watchPostCart() {
  yield takeLatest(POST_CART, postCart);
}

export default [watchGetProducts, watchGetProduct,watchPostCart];
