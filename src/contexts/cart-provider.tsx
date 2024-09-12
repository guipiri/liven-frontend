import { createContext, ReactNode, useState } from 'react'
import { Cart } from '../types/cart'

export const CartContext = createContext<{
  cart: Cart | null
  addToCart: (productId: number) => void
  removeFromCart: (productId: number) => void
  removeOneFromCart: (productId: number) => void
}>({
  cart: null,
  addToCart: () => {},
  removeFromCart: () => {},
  removeOneFromCart: () => {},
})

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null)

  const addToCart = (productId: number) => {
    if (!cart) return setCart([{ id: productId, qty: 1 }])
    const isProdIncart = cart.find((prod) => prod.id === productId)
    if (!isProdIncart) return setCart([...cart, { id: productId, qty: 1 }])
      
    const newCart = cart.map((prod) => {
      return prod.id === productId ? { ...prod, qty: prod.qty + 1 } : prod
    })
    setCart(newCart)
  }
  const removeFromCart = (productId: number) => {
    if (!cart) return
    const newCart = cart.filter((prod) => {
      return prod.id !== productId
    })
    setCart(newCart)
  }

  const removeOneFromCart = (productId: number) => {
    if (!cart) return
    const newCart = cart.map((prod) => {
      return prod.id === productId ? { ...prod, qty: prod.qty - 1 } : prod
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
