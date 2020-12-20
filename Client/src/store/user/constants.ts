export const LOGIN_REQUEST = '@user/login_request';
export const LOGIN_SUCCESS = '@user/login_success';
export const LOGIN_FAILED = '@user/login_failed';
export const SUBSCRIBE_REQUEST = '@user/subscribe_request';
export const SUBSCRIBE_FAILED = '@user/subscribe_failed';
export const LOG_OUT = '@user/LOG_OUT';

export interface RequestLoginPayloadType {
  login: string;
  password: string;
  history: any;
}
export interface RequestLoginType {
  type: string;
  payload: RequestLoginPayloadType;
}

export interface RequestSuccessPayloadType {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  cart: any;
}
export interface RequestSuccessType {
  type: string;
  payload: RequestSuccessPayloadType;
}

// export interface RequestFailedPayloadType {
//   error: string;
// }

export interface RequestFailedType {
  type: string;
  payload?: any;
}
export interface LogOutType {
  type: typeof LOG_OUT;
  payload?: any;
}

interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
}
export interface RequestSubscribePayloadType {
  user: User;
  history: any;
}
export interface RequestSubscribeType {
  type: string;
  payload: RequestSubscribePayloadType;
}

export interface RequestSubscribeFailedPayloadType {
  error: string;
}
export interface RequestSubscribeFailedType {
  type: string;
  payload: string;
}
export interface updateCartType {
  type: string;
  payload: any;
}

export type REQUEST_TYPE =
  | RequestLoginType
  | RequestSuccessType
  | RequestFailedType
  | updateCartType
  | LogOutType;
