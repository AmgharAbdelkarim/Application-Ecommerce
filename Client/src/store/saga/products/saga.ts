// eslint-disable-next-line import/first
import { takeLatest, put, call } from 'redux-saga/effects';
import { GET_PRODUCTS, GET_PRODUCT } from './constants';
import { GetProductsApi } from './api';
import { GetProductsSuccess } from './action';

export function* GetProducts({ payload }: { type: string; payload?: any }) {
  try {
    console.log('eee');
    const { data: response } = yield call(GetProductsApi);
    yield put(GetProductsSuccess(response));
    payload.push('/products');
  } catch {}
}

export function* GetProduct() {}

export function* watchGetProducts() {
  yield takeLatest(GET_PRODUCTS, GetProducts);
}
export function* watchGetProduct() {
  yield takeLatest(GET_PRODUCT, GetProduct);
}

export default [watchGetProducts, watchGetProduct];
