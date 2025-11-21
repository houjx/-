export type Category = 'single' | 'monthly' | 'weekly' | 'custom';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  tags?: string[];
  isSubscription?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Recipe {
  id: string;
  title: string;
  author: string;
  likes: number;
  image: string;
  content: string;
  tags: string[];
}

export interface UserProfile {
  name: string;
  level: 'Red' | 'Silver' | 'Gold' | 'Black'; // Haidilao inspired tiers
  points: number;
  nextLevelPoints: number;
  avatar: string;
}

export enum AppTab {
  HOME = 'HOME',
  COMMUNITY = 'COMMUNITY',
  CART = 'CART',
  MEMBER = 'MEMBER'
}