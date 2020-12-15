import axios from 'axios';
import { baseUrl } from '../utils/api';

export const getUserWithToken = (token: string) => {
  return axios.get(baseUrl + '/cart', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
