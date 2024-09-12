import React, { createContext, useState } from 'react'
import { Cart } from '../types/cart'
import { Product } from '../types/products'

const CartContext = createContext<{
  cart: Cart | null
  addToCart: (product: Product) => void
  removeFromCart: (product: Product) => void
  removeOneFromCart: (product: Product) => void
}>({
  cart: null,
  addToCart: () => {},
  removeFromCart: () => {},
  removeOneFromCart: () => {},
})

export default function CartProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [cart, setCart] = useState<Cart | null>(null)
  const addToCart = (product: Product) => {}
  const removeFromCart = (product: Product) => {}
  const removeOneFromCart = (product: Product) => {}
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, removeOneFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
