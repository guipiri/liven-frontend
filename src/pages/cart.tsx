import { useContext } from 'react'
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { CartContext } from '../contexts/cart-provider'

export default function Cart() {
  const { cart, addToCart, removeOneFromCart, removeFromCart } =
    useContext(CartContext)
  console.log(cart)

  return (
    <div className="flex items-center flex-col px-6 py-10">
      {cart?.length === 0 && (
        <p className="mb-10">Ainda não há produtos no seu carrinho!</p>
      )}
      {cart?.map((prod) => {
        if (prod.qty === 0) return
        return (
          <div className="flex h-48 sm:h-60 w-full max-w-xl items-center border-b mb-4">
            <span className="relative bottom-24 right-0 hover:cursor-pointer">
              <IoClose
                onClick={() => {
                  removeFromCart(prod)
                }}
                size={22}
              />
            </span>
            <div className="shrink-0 h-48 sm:h-60 flex justify-center items-center mr-4 sm:mr-6">
              <img
                src={prod.image}
                alt={prod.title}
                className=" size-28 object-contain sm:size-48"
              />
            </div>
            <div className="w-full overflow-hidden flex flex-col justify-around py-6 h-48 sm:h-60">
              <h2 className="text-lg font-bold truncate">{prod.title}</h2>
              <div className="flex justify-between">
                <p className="text-lg">
                  R$ {prod.price.toFixed(2).replace('.', ',')}
                </p>
                <div className="flex items-center text-xl w-16 justify-between self-center">
                  <span>
                    <FaPlusSquare
                      onClick={() => {
                        addToCart(prod)
                      }}
                      className="rounded-md fill-green-800 hover:cursor-pointer"
                    />
                  </span>
                  {prod.qty}
                  <span>
                    <FaMinusSquare
                      onClick={() => {
                        removeOneFromCart(prod)
                      }}
                      className="rounded-md fill-red-800 hover:cursor-pointer"
                    />
                  </span>
                </div>
              </div>
              <span className="text-2xl text-end">
                R$ {(prod.qty * prod.price).toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>
        )
      })}
      <h2 className="text-2xl font-bold flex justify-between w-full max-w-xl">
        <span className="">Total: </span>
        R${' '}
        {!cart
          ? '0,00'
          : cart
              .reduce((prev, curr) => {
                return curr.qty * curr.price + prev
              }, 0)
              .toFixed(2)
              .replace('.', ',')}
      </h2>
    </div>
  )
}
