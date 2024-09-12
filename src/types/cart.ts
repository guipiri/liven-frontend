import { Product } from './products'

export interface ProductInCart extends Pick<Product, 'id'> {
  qty: number
}

export type Cart = ProductInCart[]
