import { baseUrl } from '../../utils/api';
import axios from 'axios';

export const postCartApi = (data: any) => {
  const token = localStorage.getItem('token');
  return axios.post(baseUrl + '/cart', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const postDeleteCartItemApi = (productId: string) => {
  const token = localStorage.getItem('token');
  return axios.post(
    baseUrl + '/cart-delete-item',
    { productId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const updateCartItemQuantityApi = ({
  productId,
  quantity,
}: {
  productId: string;
  quantity: number;
}) => {
  const token = localStorage.getItem('token');
  return axios.post(
    baseUrl + '/cart-update-cart-item-quantity',
    { productId, quantity },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};
