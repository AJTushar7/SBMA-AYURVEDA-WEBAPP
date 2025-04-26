export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  discountPrice?: number;
  description: string;
  shortDescription: string;
  imageUrl: string;
  featured: boolean;
  bestSeller: boolean;
  new: boolean;
  tag?: string;
  tagline?: string;
  rating: number;
  reviews: number;
  benefits: string[];
  ingredients: string[];
  usage: string[];
}