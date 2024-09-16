import { useCallback, useEffect, useState } from 'react'
import ProductComponent from '../../components/Product/product'
import { getAllProducts } from '../../services/fakestore/getAllProducts'
import { Product } from '../../types/product'

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[] | null>(null)

  const getProductsList = useCallback(async () => {
    const products = await getAllProducts()
    if (products) setProducts(products)
  }, [])

  useEffect(() => {
    getProductsList()
  }, [getProductsList])

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap max-w-4xl justify-evenly">
        {products?.map((prod) => {
          return <ProductComponent prod={prod} />
        })}
      </div>
    </div>
  )
}
