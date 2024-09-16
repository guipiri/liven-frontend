import CartProvider from './contexts/CartProvider'
import RootLayout from './layout/root'

function App() {
  return (
    <CartProvider>
      <RootLayout />
    </CartProvider>
  )
}

export default App
