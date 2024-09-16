import { createContext, ReactNode, useState } from 'react'
import { Cart } from '../../types/cart'
import { Product } from '../../types/product'

export const CartContext = createContext<{
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

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null)

  const addToCart = (product: Product) => {
    if (!cart) return setCart([{ ...product, qty: 1 }])
    const isProdIncart = cart.find((prod) => prod.id === product.id)
    if (!isProdIncart) return setCart([...cart, { ...product, qty: 1 }])

    const newCart = cart.map((prod) => {
      return prod.id === product.id ? { ...prod, qty: prod.qty + 1 } : prod
    })
    setCart(newCart)
  }
  const removeFromCart = (product: Product) => {
    if (!cart) return
    const newCart = cart.filter((prod) => {
      return prod.id !== product.id
    })
    setCart(newCart)
  }

  const removeOneFromCart = (product: Product) => {
    if (!cart) return
    const newCart = cart.map((prod) => {
      return prod.id === product.id ? { ...prod, qty: prod.qty - 1 } : prod
    })
    setCart(newCart)
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, removeOneFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
