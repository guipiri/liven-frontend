import CartProvider from './contexts/cart-provider'
import RootLayout from './layout/root'

function App() {
  return (
    <CartProvider>
      <RootLayout />
    </CartProvider>
  )
}

export default App
