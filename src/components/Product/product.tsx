import { useContext } from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { IoIosStar } from 'react-icons/io'
import { CartContext } from '../../contexts/CartProvider'
import { Product } from '../../types/product'

export default function ProductComponent({ prod }: { prod: Product }) {
  const { addToCart } = useContext(CartContext)
  return (
    <div className="shadow-lg w-80 rounded-xl my-10 flex flex-col items-center">
      <div className="size-48">
        <img
          className="size-48 object-contain"
          src={prod.image}
          alt={prod.title}
        />
      </div>
      <p className="text-lg font-bold truncate w-[90%] mt-6">{prod.title}</p>
      <div className="w-[90%] my-2 flex items-center">
        <IoIosStar className="fill-yellow-400 mr-2" />
        <p>{prod.rating.rate} / 5</p>
      </div>
      <div className="w-[90%] flex justify-between items-center mb-8">
        <span className="text-2xl">
          R${' '}
          {prod.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
        <button
          onClick={() => addToCart(prod)}
          className="flex items-center justify-center shadow-md bg-green-100 p-2 px-4 rounded-xl text-gray-600 hover:text-black hover:bg-green-200 transition-all"
        >
          Carrinho
          <FaCartShopping className="ml-2" />
        </button>
      </div>
    </div>
  )
}
