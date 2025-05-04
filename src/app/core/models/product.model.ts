
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  category: string;
  imageUrl: string;
  featured: boolean;
  bestSeller?: boolean;
  new?: boolean;
  rating?: number;
  reviews?: number;
  tag?: string;
  benefits?: string[];
  ingredients?: string[];
  usage?: string;
  benefitsTitle?: string;
  howToUse?: string;
  dosage?: string;
}
