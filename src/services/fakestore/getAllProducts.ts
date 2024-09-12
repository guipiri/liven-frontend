import axios from 'axios'
import { Product } from '../../types/products'
import { BASE_URL, PRODUCTS } from './endpoints'

export const getAllProducts = async () => {
  const { data } = await axios.get<Product[]>(BASE_URL + PRODUCTS)
  return data
}
