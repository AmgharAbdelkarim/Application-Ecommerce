import { baseUrl } from '../../../utils/api';
import axios from 'axios';

export const GetProductsApi = () => {
  return axios.get(baseUrl + '/products');
};