import axios from 'axios'
import { Product } from '../../types/product'
import { BASE_URL, PRODUCTS } from './endpoints'

export const getProductById = async (productId: string) => {
  const { data } = await axios.get<Omit<Product, 'rating'>>(
    BASE_URL + PRODUCTS + '/' + productId
  )
  return data
}
