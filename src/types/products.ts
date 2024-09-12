enum Categories {
  WOMAN = "women's clothing",
  MAN = "men's clothing",
  ELECTRONICS = 'electronics',
  JEWELERT = 'jewelery',
}

export interface Rating {
  rate: number;
  count: number;
}

export interface Products {
  id: number;
  title: string;
  category: Categories;
  description: string;
  image: string;
  rating: Rating;
}
