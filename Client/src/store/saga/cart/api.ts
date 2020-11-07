import { baseUrl } from '../../../utils/api';
import axios from 'axios';


export const postCartApi = (data : any) => {
  return axios.post(baseUrl + '/cart',data);
};

export const postDeleteCartItemApi = (productId : string) => {
  return axios.post(baseUrl + '/cart-delete-item',{productId});
}; 

export const updateCartItemQuantityApi = ({productId , quantity} : {productId : string , quantity : number}) => {
  return axios.post(baseUrl + '/cart-update-cart-item-quantity',{productId , quantity});
};