
export interface Product {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  category: string;
  imageUrl: string;
  featured: boolean;
  bestSeller: boolean;
  new: boolean;
  rating: number;
  reviews: number;
  tag?: string;
}
