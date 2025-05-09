
export interface Product {
  id: number;
  name: string;
  description: string;
  shortDescription?: string;
  price: number;
  discountPrice?: number;
  category: string;
  imageUrl: string;
  featured?: boolean;
  benefits?: string[];
  ingredients?: string[];
  usage?: string;
  tag?: string;
}
