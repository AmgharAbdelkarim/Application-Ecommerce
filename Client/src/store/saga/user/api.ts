import { baseUrl } from '../../../utils/api';
import axios from 'axios';

// interface result {
//   login: string;
//   password: string;
// }
export const authApi = (data: any[]) => {
  console.log(data[0], data[1]);
  return axios.post(baseUrl + data[0], data[1]);
};
