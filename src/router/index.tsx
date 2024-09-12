import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import Cart from '../pages/cart'
import ErrorPage from '../pages/error-page'
import ProductsPage from '../pages/products'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    loader: false,
    children: [
      {
        path: '/',
        element: <ProductsPage />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router
