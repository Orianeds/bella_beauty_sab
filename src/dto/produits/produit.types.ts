export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;

  property?: string[];
  property_title?: string;

  how_to_use?: string;
  how_to_use_title?: string;

  quantity?: string;
  quantity_title?: string;

  composition?: string;
  composition_title?: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  products: Product[];
}

export interface ProductContent {
  title: string;
  categories: ProductCategory[];
}
