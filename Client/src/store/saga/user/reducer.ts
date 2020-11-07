import { UPDATE_CART } from '../cart/constants';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REQUEST_TYPE,
  SUBSCRIBE_FAILED,
  SUBSCRIBE_REQUEST,
  LOG_OUT,
} from './constants';

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  address: '',
  cart: {},
  isLoading: false,
  error: null,
};

export const AuthReducer = (state = initialState, action: REQUEST_TYPE) => {
  const { payload } = action;
  console.log(payload);
  switch (action.type) {
    case SUBSCRIBE_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, ...action.payload, isLoading: false, error: null };
    case LOGIN_FAILED:
      return { ...state, error: action.payload, isLoading: false };
    case SUBSCRIBE_FAILED:
      return { ...state, error: action.payload, isLoading: false };
    case UPDATE_CART:
      return { ...state, ...payload };
    case LOG_OUT:
      return { ...initialState };
    default:
      return state;
  }
};
