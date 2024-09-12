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
    children: [
      {
        element: <ProductsPage />,
        index: true,
      },
      {
        path: '/cart',
        element: <Cart />,
        index: true,
      },
    ],
  },
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router
