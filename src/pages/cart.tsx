import { useContext } from 'react'
import ProductCart from '../components/product-cart'
import { CartContext } from '../contexts/cart-provider'

export default function Cart() {
  const { cart } = useContext(CartContext)

  return (
    <div className="flex items-center flex-col px-6 py-10">
      {(cart?.length === 0 || !cart) && (
        <p className="mb-10">Ainda não há produtos no seu carrinho!</p>
      )}
      {cart?.map((prod) => {
        if (prod.qty === 0) return <></>
        return <ProductCart prod={prod} />
      })}
      <h2 className="text-2xl font-bold flex justify-between w-full max-w-xl">
        <span className="">Total: </span>
        {!cart
          ? '0,00'
          : cart
              .reduce((prev, curr) => {
                return curr.qty * curr.price + prev
              }, 0)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </h2>
    </div>
  )
}
