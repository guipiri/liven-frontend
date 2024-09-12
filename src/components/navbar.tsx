import { useContext } from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../contexts/cart-provider'

export default function NavBar() {
  const { cart } = useContext(CartContext)
  const prodQty = cart?.reduce((prev, curr) => {
    return prev + curr.qty
  }, 0)
  console.log(cart)

  return (
    <div className="h-48 flex justify-center items-center shadow-lg px-20">
      <NavLink
        to="/"
        className="text-5xl text-center mx-auto hover:text-green-800 transition-all"
      >
        Xuxa's Store
      </NavLink>
      <NavLink to="/cart" className="flex items-center justify-center group">
        <FaCartShopping
          size={32}
          className="justify-end group-hover:fill-green-800 transition-all duration-100 group-hover:rotate-6"
        />
        <span className="bg-green-800 size-6 text-white font-bold flex items-center justify-center rounded-[100%] relative bottom-4">
          {prodQty ? prodQty : 0}
        </span>
      </NavLink>
    </div>
  )
}
