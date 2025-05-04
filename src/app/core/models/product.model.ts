
export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  discountPrice?: number;
  imageUrl: string;
  rating: number;
  reviews: number;
  featured: boolean;
  bestSeller: boolean;
  new: boolean;
  benefits: string[];
  ingredients: string[];
  usage: string;
}
