enum Categories {
  WOMAN = "women's clothing",
  MAN = "men's clothing",
  ELECTRONICS = 'electronics',
  JEWELERT = 'jewelery',
}

export interface Rating {
  rate: number
  count: number
}

export interface Product {
  id: number
  title: string
  price: number
  category: Categories
  description: string
  image: string
  rating: Rating
}
