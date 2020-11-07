import { takeLatest, put, call } from 'redux-saga/effects';
import { updateCart } from './actions';
import { postCartApi, postDeleteCartItemApi } from './api';
import { DELETE_CART_ITEM, POST_CART } from './constants';


export function* postCart({ payload }: { type: string; payload?: string }) {
    try {
        const { data: response } = yield call(postCartApi, payload);
        yield put(updateCart(response))
    }
    catch {
        throw Error("cannot add items to the cart")
    }
}

export function* deleteCartItem({ productId}: { type: string; productId: string }) {
    console.log(productId)
    try {
        const { data: response } = yield call(postDeleteCartItemApi, productId);
        yield put(updateCart(response.cart))
    }
    catch {
        throw Error("cannot delete cart items")
    }
    
}

export function* watchPostCart() {
    yield takeLatest(POST_CART, postCart);
}
export function* watchDeleteCartItem() {
    yield takeLatest(DELETE_CART_ITEM, deleteCartItem);
}

export default [watchPostCart, watchDeleteCartItem];