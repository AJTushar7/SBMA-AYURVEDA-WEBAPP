export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  imageUrl: string;
  category: string;
  tag?: string;
  featured: boolean;
  benefitsTitle?: string;
  benefits?: string[];
  ingredients?: string[];
  howToUse?: string;
  dosage?: string;
}
