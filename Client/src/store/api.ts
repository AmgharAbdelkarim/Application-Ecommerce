import axios from 'axios';
import { baseUrl } from '../utils/api';

export const getUserWithToken = (token: string) => {
  console.log(token);
  return axios.get(baseUrl + '/getUserWithToken', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
