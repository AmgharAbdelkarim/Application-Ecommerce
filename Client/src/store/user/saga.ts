import { put, takeLatest, call } from 'redux-saga/effects';
import { LoginFailed, LoginSuccess, SubscribeFailed } from './action';
import { authApi } from './api';
import { LOGIN_REQUEST, SUBSCRIBE_REQUEST } from './constants';

export function* LoginUser({ payload }: { type: string; payload: any }) {
  try {
    const { data: response } = yield call(authApi, [
      '/login',
      {
        login: payload.login,
        password: payload.password,
      },
    ]);
    const { token, ...client } = response;
    localStorage.setItem('token', token);
    yield put(LoginSuccess(client.user));
    payload.history.push('/products');
  } catch {
    yield put(LoginFailed('login failed'));
  }
}

export function* watchLoginUser() {
  yield takeLatest(LOGIN_REQUEST, LoginUser);
}

export function* subscribeUser({ payload }: { type: string; payload: any }) {
  try {
    const { data: response } = yield call(authApi, ['/signUp', payload.user]);
    const { token, ...client } = response;
    if (token && client) {
      localStorage.setItem('token', token);
      yield put(LoginSuccess(client.user));
      payload.history.push('/products');
    } else {
      yield put(SubscribeFailed(response));
    }
  } catch {
    yield put(SubscribeFailed('Subscribe failed'));
  }
}

export function* watchSubscribeUser() {
  yield takeLatest(SUBSCRIBE_REQUEST, subscribeUser);
}
export default [watchLoginUser, watchSubscribeUser];
