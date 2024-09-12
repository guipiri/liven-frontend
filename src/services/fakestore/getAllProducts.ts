import axios from 'axios';
import { Products } from '../../types/products';
import { BASE_URL, PRODUCTS } from './endpoints';

export const getAllProducts = async () => {
  const { data } = await axios.get<Products[]>(BASE_URL + PRODUCTS);
  return data;
};
