import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  shortDescription: string;
  imageUrl: string;
  benefits: string[];
  ingredients: string[];
  usage: string;
  rating: number;
  reviews: number;
  featured: boolean;
  bestSeller: boolean;
  new: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private products: Product[] = [
    {
      id: 1,
      name: 'Liver Shodhan Syrup',
      category: 'Syrups',
      price: 299,
      description: 'SBMA Liver Shodhan Syrup is an ayurvedic formulation designed to detoxify and protect the liver. It combines powerful herbs known for their hepatoprotective properties that help maintain optimal liver function and support natural detoxification.',
      shortDescription: 'Natural liver cleanser & detoxifier with powerful ayurvedic herbs',
      imageUrl: 'assets/images/IMG-20250327-WA0023.jpg',
      benefits: [
        'Supports liver detoxification and cleansing',
        'Helps protect liver cells from damage',
        'Aids in improving digestion and metabolism',
        'Helps reduce fatty liver conditions'
      ],
      ingredients: [
        'Bhringraj (Eclipta alba)',
        'Punarnavaa (Boerhavia diffusa)',
        'Kutki (Picrorhiza kurroa)',
        'Giloy (Tinospora cordifolia)',
        'Kalmegh (Andrographis paniculata)',
        'Natural herbs and sugarcane juice'
      ],
      usage: 'Take 2 teaspoons (10ml) twice daily after meals or as directed by your ayurvedic physician.',
      rating: 4.8,
      reviews: 156,
      featured: true,
      bestSeller: true,
      new: false
    },
    {
      id: 2,
      name: 'Kesh Sudharak Oil',
      category: 'Oils',
      price: 399,
      description: 'SBMA Kesh Sudharak Oil is a premium Ayurvedic hair oil that nourishes hair from the roots and promotes healthy hair growth. This unique formulation combines traditional herbs known for their beneficial effects on hair and scalp health.',
      shortDescription: 'Premium ayurvedic hair oil for strong, thick and lustrous hair',
      imageUrl: 'assets/images/IMG-20250327-WA0022.jpg',
      benefits: [
        'Strengthens hair roots and reduces hair fall',
        'Prevents premature graying and dandruff',
        'Improves blood circulation in the scalp',
        'Adds natural shine and volume to hair'
      ],
      ingredients: [
        'Bhringraj (Eclipta alba)',
        'Amla (Emblica officinalis)',
        'Brahmi (Bacopa monnieri)',
        'Neem (Azadirachta indica)',
        'Sesame oil and coconut oil base'
      ],
      usage: 'Gently massage into scalp and hair 2-3 times a week. Leave overnight for best results.',
      rating: 4.6,
      reviews: 215,
      featured: true,
      bestSeller: false,
      new: false
    },
    {
      id: 3,
      name: 'D.L.K. Liquid',
      category: 'Liquids',
      price: 349,
      description: 'SBMA D.L.K. Liquid is an innovative ayurvedic formulation that supports digestive, liver, and kidney health in a single solution. This tri-dosha balancing liquid helps maintain the optimal functioning of these vital organs.',
      shortDescription: 'Tri-organ support liquid for digestive, liver and kidney health',
      imageUrl: 'assets/images/IMG-20250327-WA0021.jpg',
      benefits: [
        'Supports healthy digestive function',
        'Aids in liver detoxification',
        'Promotes kidney filtration and cleansing',
        'Helps balance all three doshas (Vata, Pitta, Kapha)'
      ],
      ingredients: [
        'Punarnava (Boerhavia diffusa)',
        'Gokshura (Tribulus terrestris)',
        'Haritaki (Terminalia chebula)',
        'Guduchi (Tinospora cordifolia)',
        'Herbs processed in herbal decoction'
      ],
      usage: 'Take 1 tablespoon (15ml) twice daily before meals with equal amount of water.',
      rating: 4.7,
      reviews: 128,
      featured: true,
      bestSeller: false,
      new: true
    },
    {
      id: 4,
      name: 'Rakt Shodhak Syrup',
      category: 'Syrups',
      price: 329,
      description: 'SBMA Rakt Shodhak Syrup is an authentic ayurvedic blood purifier that helps cleanse the blood of toxins and impurities. This herbal formulation promotes healthy skin and overall wellbeing by supporting the body\'s natural detoxification processes.',
      shortDescription: 'Ayurvedic blood purifier for clear skin and overall wellness',
      imageUrl: 'assets/images/IMG-20250327-WA0020.jpg',
      benefits: [
        'Purifies blood and removes toxins',
        'Improves skin health and complexion',
        'Helps manage skin conditions like acne and eczema',
        'Supports overall immunity and vitality'
      ],
      ingredients: [
        'Neem (Azadirachta indica)',
        'Manjistha (Rubia cordifolia)',
        'Sariva (Hemidesmus indicus)',
        'Guduchi (Tinospora cordifolia)',
        'Processed in herbal decoction with natural sweeteners'
      ],
      usage: 'Take 2 teaspoons (10ml) twice daily after meals with water.',
      rating: 4.9,
      reviews: 189,
      featured: false,
      bestSeller: true,
      new: false
    },
    {
      id: 5,
      name: 'Kidney Rakshak Syrup',
      category: 'Syrups',
      price: 449,
      description: 'SBMA Kidney Rakshak Syrup is a specialized ayurvedic formulation designed to support optimal kidney function and urinary tract health. It combines powerful herbs known for their nephroprotective and diuretic properties.',
      shortDescription: 'Specialized kidney support formula for urinary health',
      imageUrl: 'assets/images/IMG-20250327-WA0019.jpg',
      benefits: [
        'Supports healthy kidney function',
        'Helps maintain proper urinary flow',
        'Aids in preventing kidney stone formation',
        'Helps reduce urinary tract infections'
      ],
      ingredients: [
        'Punarnava (Boerhavia diffusa)',
        'Gokshura (Tribulus terrestris)',
        'Palash (Butea monosperma)',
        'Varuna (Crataeva nurvala)',
        'Processed with natural herbs and sweeteners'
      ],
      usage: 'Take 1 tablespoon (15ml) twice daily with equal amount of water.',
      rating: 4.7,
      reviews: 132,
      featured: false,
      bestSeller: true,
      new: false
    },
    {
      id: 6,
      name: 'Kabz Ki Chabi',
      category: 'Powders',
      price: 279,
      description: 'SBMA Kabz Ki Chabi is a natural ayurvedic solution for constipation and digestive sluggishness. This gentle yet effective herbal powder promotes regular bowel movements and improves overall digestive health.',
      shortDescription: 'Natural constipation relief powder for digestive regularity',
      imageUrl: 'assets/images/IMG-20250327-WA0022.jpg',
      benefits: [
        'Relieves constipation naturally without side effects',
        'Improves digestive movement and metabolism',
        'Cleanses the colon and aids detoxification',
        'Promotes regular and comfortable bowel movements'
      ],
      ingredients: [
        'Triphala (Three fruits combination)',
        'Senna (Cassia angustifolia)',
        'Psyllium husk (Plantago ovata)',
        'Fennel seeds (Foeniculum vulgare)',
        'Processed with natural herbs'
      ],
      usage: 'Take 1 teaspoon (5g) at bedtime with warm water or as directed by physician.',
      rating: 4.8,
      reviews: 210,
      featured: false,
      bestSeller: true,
      new: false
    }
  ];

  constructor() { }

  getAllProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }
  
  getProductsByCategory(category: string): Observable<Product[]> {
    const filteredProducts = this.products.filter(p => p.category === category);
    return of(filteredProducts);
  }
  
  getFeaturedProducts(): Observable<Product[]> {
    const featuredProducts = this.products.filter(p => p.featured);
    return of(featuredProducts);
  }
  
  getBestSellerProducts(): Observable<Product[]> {
    const bestSellers = this.products.filter(p => p.bestSeller);
    return of(bestSellers);
  }
  
  getNewProducts(): Observable<Product[]> {
    const newProducts = this.products.filter(p => p.new);
    return of(newProducts);
  }
  
  searchProducts(query: string): Observable<Product[]> {
    if (!query || query.trim() === '') {
      return of(this.products);
    }
    
    const searchTerm = query.toLowerCase().trim();
    const results = this.products.filter(p => 
      p.name.toLowerCase().includes(searchTerm) || 
      p.description.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm) ||
      p.shortDescription.toLowerCase().includes(searchTerm)
    );
    
    return of(results);
  }
  
  filterProducts(options: {
    category?: string,
    minPrice?: number,
    maxPrice?: number,
    featured?: boolean,
    bestSeller?: boolean,
    newProducts?: boolean
  }): Observable<Product[]> {
    let filtered = [...this.products];
    
    if (options.category) {
      filtered = filtered.filter(p => p.category === options.category);
    }
    
    if (options.minPrice !== undefined) {
      filtered = filtered.filter(p => p.price >= options.minPrice!);
    }
    
    if (options.maxPrice !== undefined) {
      filtered = filtered.filter(p => p.price <= options.maxPrice!);
    }
    
    if (options.featured) {
      filtered = filtered.filter(p => p.featured);
    }
    
    if (options.bestSeller) {
      filtered = filtered.filter(p => p.bestSeller);
    }
    
    if (options.newProducts) {
      filtered = filtered.filter(p => p.new);
    }
    
    return of(filtered);
  }
}