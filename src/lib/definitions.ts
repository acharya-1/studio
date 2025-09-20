import type { LucideIcon } from 'lucide-react';

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  category: 'Skilled Labor' | 'General Labor' | 'Event Services';
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatar: string; // Used as seed for placeholder image
  rating: number;
};
