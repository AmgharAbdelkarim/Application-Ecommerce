import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  RequestLoginType,
  RequestSuccessType,
  RequestFailedType,
  RequestSuccessPayloadType,
  RequestLoginPayloadType,
  SUBSCRIBE_FAILED,
  SUBSCRIBE_REQUEST,
  RequestSubscribeType,
  RequestSubscribeFailedType,
  RequestSubscribePayloadType,
} from './constants';

export const LoginRequest = (
  credentials: RequestLoginPayloadType,
): RequestLoginType => ({
  type: LOGIN_REQUEST,
  payload: credentials,
});

export const LoginSuccess = (
  user: RequestSuccessPayloadType,
): RequestSuccessType => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const LoginFailed = (error: string): RequestFailedType => ({
  type: LOGIN_FAILED,
  payload: error,
});

export const SubscribeRequest = (
  payload: RequestSubscribePayloadType,
): RequestSubscribeType => ({
  type: SUBSCRIBE_REQUEST,
  payload,
});

export const SubscribeFailed = (error: string): RequestSubscribeFailedType => ({
  type: SUBSCRIBE_FAILED,
  payload: error,
});




