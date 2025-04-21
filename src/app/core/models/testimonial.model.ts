export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  productUsed?: string;
  date: string;
  imageUrl?: string;
}
