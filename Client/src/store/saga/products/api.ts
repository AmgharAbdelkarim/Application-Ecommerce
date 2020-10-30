import { baseUrl } from '../../../utils/api';
import axios from 'axios';

export const GetProductsApi = () => {
  return axios.get(baseUrl + '/products');
};
export const postCartApi = (data : any) => {
  return axios.post(baseUrl + '/cart',data);
};