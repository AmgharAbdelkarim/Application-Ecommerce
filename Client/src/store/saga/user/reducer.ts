import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REQUEST_TYPE,
  SUBSCRIBE_FAILED,
  SUBSCRIBE_REQUEST,
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
  console.log(state, action);
  switch (action.type) {
    case SUBSCRIBE_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, ...action.payload, isLoading: true, error: null };
    case LOGIN_FAILED:
      return { ...state, error: action.payload, isLoading: false };
    case SUBSCRIBE_FAILED:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
