import { takeLatest, put, call } from 'redux-saga/effects';
import { updateCart } from './actions';
import { postCartApi, postDeleteCartItemApi, updateCartItemQuantityApi } from './api';
import { DELETE_CART_ITEM, POST_CART, UPDATE_CART_ITEM_QUANTITY } from './constants';


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

export function* updateCartItemQuantity({ payload}: { type: string; payload: {productId : string , quantity : number} }) {
    console.log(payload)
    try {
        const { data: response } = yield call(updateCartItemQuantityApi, payload);
        yield put(updateCart(response))
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

export function* watchUpdateCartItemQuantity() {
    yield takeLatest(UPDATE_CART_ITEM_QUANTITY, updateCartItemQuantity);
}
export default [watchPostCart, watchDeleteCartItem , watchUpdateCartItemQuantity];